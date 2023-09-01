import React, { useEffect, useContext, useState  } from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';
import Loader from './Loader';

export const ItemListContainer = () => {
        const [productos, setProductos] = useState([]);
        const [isLoading, setIsLoading] = useState(true);
        const [titulo, setTitulo] = useState("Productos");
        const categoria = useParams().categoria;

        useEffect(() => {
                const productosRef = collection(db, "productos"); //Almacenara la coleccion de documentos
                const qry = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef //Filtra por categoria
                getDocs(qry)
                        .then((res) => {
                                setProductos (
                                        res.docs.map((doc) => {
                                                return {...doc.data(), id: doc.id }
                                        })
                                )
                        })
                        .catch((error) => console.error(error))
                        .finally(() => setIsLoading(false));
               
        },[categoria])

        if (isLoading) return <Loader />;

        return (
               <div className="container-fluid" style={{paddingTop: "10px"}}>
                       <ItemList productos={productos} titulo={titulo} />
               </div>
                
                )

}