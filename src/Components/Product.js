import React from 'react'

function Product({span, image, name, price}){

    return(
        <main>
            <article >
              <span >{span}</span>

                <image  src={image} alt={{name}}/>

              <p >{name}</p>

                <h4>{price}</h4>
            </article>

        </main>
    )
}

export default Product