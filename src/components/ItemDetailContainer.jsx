import { useEffect, useState,  useContext } from "react"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import Loader from "./Loader";

export const ItemDetailContainer = () =>{
    const [isLoading, setIsLoading] = useState(true);
    const [item, setItem] = useState([]);
    const [added, setAdded] = useState(false);
    const id = useParams().id;

    //Importamos la funcion desde el contexto
    const {addToCart} = useContext(CartContext);

    useEffect (() => {
        const docRef = doc(db, "productos", id);
        getDoc(docRef)
        .then((res) => {
            setItem(
                {...res.data(), id: res.id}
            )
        })
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));
    },[id]);

    const onAdd = (count) => {
        addToCart(item, count);
        setAdded(true);
    }

    if (isLoading) return <Loader />;

    return (
        <div>
           {item && <ItemDetail onAdd={onAdd} item={item} added={added} />} 
        </div>

    )
}