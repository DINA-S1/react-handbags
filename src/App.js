import React from 'react'
import './App.css'
import Button from './Components/Button'
import Product from './Components/Product'
import Footer from './Components/Footer'
import bag_1 from "./assets/bag_1.png"
import bag_2 from "./assets/bag_2.png"
import bag_3 from "./assets/bag_3.png"
import bag_4 from "./assets/bag_4.png"
import brand from "./assets/brand.png"
import story from "./assets/our_story.png"



//export default class Instructions extends Components {}

function App() {
    //const [button] = React.useState("")



    return (

        <>
            <nav>

            <h1>Handbags & Purses</h1>

                <Button>{"To the collection"}</Button>
                <Button>{"Shop all bags"}</Button>
                <Button disabled={true}>{"Pre - orders"} </Button>
             </nav>

            <main>

                <Product>
                    span={"Best seller"}
                    img={bag_1}
                    p={"The handy bag"}
                    h4={"$400,-"}
                </Product>

                <Product>
                    span={"Best seller"}
                    img={bag_2}
                    p={"The stylish bag"}
                    h4={"$250,-"}
                </Product>

                <Product>
                    span={"New collection"}
                    img={bag_3}
                    p={"The simple bag"}
                    h4={"$300,-"}
                </Product>

                <Product>
                    span={"New collection"}
                    img={bag_4}
                    p={"The trendy bag"}
                    h4={"$150,-"}
                </Product>

            </main>

            <Footer>

                    <section>
                        titel={'The brand'}
                        text={'Fantastisch merk'}

                    </section>


                    <section>
                        titel={'our story'}
                        text={'LoremLoremLoremLorem'}
                        image={brand}
                    </section>


                    <section>
                        titel={'our story'}
                        text={'ge-wel-dig verhaal'}
                        image={story}
                    </section>


                <section>
                    titel={'our story'}
                    text={'LoremLoremLoremLorem'}

                </section>

            </Footer>

        </>


    )
}


