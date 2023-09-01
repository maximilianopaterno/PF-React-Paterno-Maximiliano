import { toCapital } from "../toCapital"
import Item from "./Item"

const ItemList = ({productos, titulo}) =>{
    return (
        <div className="container" >
            <h2 className="main-titulo" style={{display: 'block', paddingBottom:'10px', textAlign: 'center', fontWeight:' bold'  }} >{toCapital(titulo)}</h2>
            <div className="productos" style={{display: "flex", gap: "1rem", flexWrap:" wrap"}}> 
                {productos.map((prod) => <Item producto={prod} key={prod.id} />)}
            </div>
        </div>
    )
}

export default ItemList