import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function ArticleDetail(props) {
    const { itemID } = useParams()
    const [item, setItem] = useState()

    const [error, setError] = useState("")
    const [loaded, setLoaded] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        fetch("http://localhost:8080/api/articles/" + itemID)
            .then(resp => resp.json())
            .then(getSingleItem => {
                if (!getSingleItem.err) {
                    console.log(getSingleItem);
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


    const navigateBack = () => {
        navigate(-1)
    }


    return (
        <>
            {loaded ?
                (
                    <>
                        <article>
                            <h2>{item.name}</h2>
                            <p>{item.brand}</p>
                            <p>{item.pack}</p>
                            <p>{item.price}€</p>
                            <div>Add to Shopping List</div>
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