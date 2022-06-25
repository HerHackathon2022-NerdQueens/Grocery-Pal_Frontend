import { useEffect, useState } from "react"

export default function ShoppingList() {
    const [loaded, setLoaded] = useState(false)
    const [shoppingList, setShoppingList] = useState([])
    const [error, setError] = useState()
    const [amountChange, setAmountChange] = useState(false)

    useEffect(() => {
        fetch('http://localhost:8081/ShoppingList')
            .then(resp => resp.json())
            .then(list => {
                if (!list.err && list) {
                    setLoaded(true)
                    setShoppingList(list)
                } else if (list.err) {
                    setLoaded(false)
                    setError(list.err.message)
                    return
                } return () => { setError("fetch of Shopping list not working") }
            })
    }, [amountChange])

    const decreaseAmountItem = (e, itemID) => {
        e.preventDefault()
        console.log("item decreased,id: ", itemID);

        fetch('http://localhost:8081/ShoppingList/' + itemID, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            }
        })

        amountChange ? setAmountChange(false) : setAmountChange(true)
    }

    const increaseAmountItem = (e, itemID) => {
        e.preventDefault()

        console.log("item increased,id: ", itemID);

        console.log("http://localhost:8081/ShoppingList/" + itemID);

        fetch("http://localhost:8081/ShoppingList/" + itemID, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            }
        })

        amountChange ? setAmountChange(false) : setAmountChange(true)
    }

    console.log("shoppingList", shoppingList);
    console.log("amountchange", amountChange);



    return (
        <>
            <h1>Your ShoppingList:</h1>

            <div>
                {loaded ? (
                    error !== undefined ?
                        <div>
                            <h3>Sorry, there seems to be an error :/</h3>
                        </div>
                        : <ul>
                            {shoppingList.shoppingListItems.map((item, key) =>
                                <li key={key}>
                                    <div>
                                        <div>
                                            <h1>{item.product.productName}</h1>
                                            <p>{item.product.brand}</p>
                                            <p>{item.product.pack}</p>
                                            <p>{item.product.categoryName}</p>
                                        </div>
                                        <div>
                                            <p>{item.product.price}€</p>
                                            <p>{item.amount}</p>
                                        </div>
                                        <div>
                                            <button onClick={e => increaseAmountItem(e, item.product.id)}>
                                                ▲
                                            </button>
                                            <button onClick={e => decreaseAmountItem(e, item.product.id)}>
                                                ▼
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            )}
                        </ul>
                )
                    : <div>
                        <h3>Your Shopping List is currently empty</h3>
                    </div>
                }

            </div>
        </>
    )
}