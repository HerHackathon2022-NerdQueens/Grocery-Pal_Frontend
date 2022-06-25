import { useEffect, useState } from "react"

export default function ShoppingList() {
    const [loaded, setLoaded] = useState(false)
    const [shoppingList, setShoppingList] = useState([])
    const [error, setError] = useState()

    useEffect(() => {

    }, [])



    return (
        <>
            <h1>Your ShoppingList:</h1>

            <div>

            </div>
        </>
    )
}