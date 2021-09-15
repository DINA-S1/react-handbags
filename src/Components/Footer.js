import React from 'react'

function Footer({ titel, text, image}) {
    return(
        <footer>
            <section>
                <h2>{titel}</h2>
                <p>{text}</p>
                <img src={image} onError={titel}/>
            </section>

        </footer>
    )


}








export default Footer