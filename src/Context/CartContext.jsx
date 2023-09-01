import React, { createContext, useState } from 'react'

export const CartContext = createContext();

function CartProvider ({children}) {
    const [cartArray, setCartArray] = useState([]);

    const addToCart = (item, count) => {
        const nuevoItem = {...item, count}    //Agregar nuevo item al carrito sin eliminar lo que ya esta cargado.
        const nuevoCartArray = [...cartArray];
        
        //Verificar si esta en el carrito para no repetir el mismo item
        const estaEnElCart = nuevoCartArray.find((item) => item.id === nuevoItem.id);

        estaEnElCart ? estaEnElCart.count += count : nuevoCartArray.push(nuevoItem);
        console.log(`agregaste ${item.nombre}, cantidad ${count} `);

        setCartArray(nuevoCartArray);
    }

/*
        if(estaEnElCart(nuevoItem.id)){
            cartArray.map(el => {
              if(el.id === nuevoItem.id)  {
                            el.count += nuevoItem.count;
                                     }
             
              })
      
          }else {
              console.log(`agregaste ${item.nombre}, cantidad ${count} `);
              setCartArray([...cartArray, nuevoItem]);
        }
    }
    
    //Agregar al carrito
    /*
    const addToCart = (item, count) => {
        if (estaEnElCart(item.id)) {
            cartArray.map(el => {
                if(el.id === item.id)  {
                  el.quantity += item.quantity
                }
                console.log(el)
                return(el)
                })
            console.log('esta en el carrito') //--> condicional para sumar si ya esta
        } else {
            console.log(`agregaste ${item.nombre}, cantidad ${count} `);
            const nuevoItem = {         //Agregar nuevo item al carrito sin eliminar lo que ya esta cargado.
                product: item,
                count
            }
            setCartArray([...cartArray, nuevoItem]);
        }
    }
*/
    
//Borrar un item seleccionado
    const borrarItem = (id) => {
        const actualizarCart = cartArray.filter(el => el.id !== id); //filtrar para encontar el elemento por id y borrarlo. 
        setCartArray(actualizarCart);
    }

//Vaciar el carrito
    const vaciarCart = () => {
        setCartArray([]);
    }
   

//Verifica si ya esta agregado al carrito el item, lo uso luego en CartWidget para que sume en el carrito
    const agregadoAlCart = () => {
        return cartArray.reduce((acc, prod) => acc + prod.count,0)
    }

//Suma total
    const sumaTotalCart = () => {
        return cartArray.reduce((acc, prod) => acc + (prod.precio)*(prod.count),0)
    }   
    
    const value = {
        cartArray,
        addToCart,
        borrarItem,
        vaciarCart,
        agregadoAlCart,
        sumaTotalCart
                }

    return(
                <CartContext.Provider value={value}>
                    {children}
                </CartContext.Provider>
            );
}

export default CartProvider;
