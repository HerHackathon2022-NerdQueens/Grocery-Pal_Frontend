import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import AddOneItemToShoppingList from "../Components/AddOneItemToShoppingList"
import "./articleDetail.css"
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function ArticleDetail(props) {
    const { itemID } = useParams()
    const [item, setItem] = useState()

    const [error, setError] = useState("")
    const [loaded, setLoaded] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        fetch("http://localhost:8081/Product/" + itemID)
            .then(resp => resp.json())
            .then(getSingleItem => {
                if (!getSingleItem.err && getSingleItem) {
                    setLoaded(true)
                    setItem(getSingleItem)
                } else if (getSingleItem.err) {
                    setError(getSingleItem.err.message)
                    return
                } return () => {
                    setError("Could not fetch Article Detail ID")
                }
            })
    }, [])

    if (error) {
        console.log(error);
    }

    const navigateBack = () => {
        navigate(-1)
    }


    return (
        <main>
            {loaded ?
                (error ? <div className="error">
                    <h3 className="error">Sorry, we could not find that article :/</h3>
                </div> :
                    <>

                        <section className="header">
                            <button className="back-btn btn" onClick={navigateBack}><AiOutlineArrowLeft /></button>
                            <h1>Product details</h1></section>
                        <section className="product-photo"></section>
                        <article className="product-destails">
                            <div className="flex">
                                <h3>{item.productName}</h3>
                                <p className="link"><a href="#">show location in store</a></p>
                            </div>
                            <p className="price">{item.price}€</p>
                            <AddOneItemToShoppingList id={item.id} />

                        </article>
                        <section className="product-info">
                            <p>Brand: {item.brand}</p>
                            <p>Pack: {item.pack}</p>
                        </section>

                        <div className="map">
                            <img src="../img/map.jpg"
                                alt="Map where item is located" />
                        </div>
                    </>
                )
                : <h1>Loading...</h1>
            }

        </main >
    )
}