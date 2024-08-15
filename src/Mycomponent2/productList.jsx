import React from "react";

const products=[
    {id:1, name:"Laptop",price:120000,inStock:false},
    {id:2, name:"smartPhone",price:110000,inStock:false},
    {id:3, name:"HeadPhones",price:1500,inStock:true},
    {id:4, name:"MacBook",price:250000,inStock:true},
]

export function ProductList(){
    const instockProduct = products.filter(product=>product.inStock);
    return(
        <div>
            <h3>Products in Stock</h3>
            {instockProduct.map(product=>(
              <div key={product.id}>
                <h4>{product.name}</h4>;
                <p>Price: {product.price}</p>
                </div>
            ))}
        </div>
    );

}

export default ProductList;