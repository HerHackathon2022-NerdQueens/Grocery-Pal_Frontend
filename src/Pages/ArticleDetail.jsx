import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import AddOneItemToShoppingList from "../Components/AddOneItemToShoppingList"

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
        <>
            {loaded ?
                (error ? <div>
                    <h3>Sorry, we could not find that article :/</h3>
                </div> :
                    <>
                        <article>
                            <h2>{item.productName}</h2>
                            <p>{item.brand}</p>
                            <p>{item.pack}</p>
                            <p>{item.price}€</p>
                            <AddOneItemToShoppingList id={item.id} />
                        </article>
                        <div>
                            <img src=""
                                alt="Map where item is located" />
                        </div>
                    </>
                )
                : <h1>Loading...</h1>}

            <button onClick={navigateBack}>Back</button>

        </>
    )
}