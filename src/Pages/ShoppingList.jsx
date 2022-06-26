import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./shoppingList.css"
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

        fetch("http://localhost:8081/ShoppingList/" + itemID, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            }
        })

        amountChange ? setAmountChange(false) : setAmountChange(true)
    }

    const navigate = useNavigate()

    const navigateBack = () => {
        navigate("/")
    }

    return (
        <main>
            <section className="header">
                <button className="btn back-btn" onClick={navigateBack}><AiOutlineArrowLeft /></button>
                <h1>Your ShoppingList</h1></section>

            <div>
                {loaded ? (
                    error !== undefined ?
                        <div>
                            <h3>Sorry, there seems to be an error :/</h3>
                        </div>
                        : <ul>
                            {shoppingList.shoppingListItems.map((item, key) =>
                                <li key={key}>
                                    <div className="shopping-list-item" >
                                        <div className="flex">
                                            <h4>{item.product.productName}</h4>
                                            <div className="flex-container amount">
                                                <button className="btn" onClick={e => increaseAmountItem(e, item.product.id)}>
                                                    +
                                                </button>
                                                <p>{item.amount}</p>
                                                <button className="btn" onClick={e => decreaseAmountItem(e, item.product.id)}>
                                                    -
                                                </button>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="price">{item.product.price}€</p>
                                            <div className="flex">
                                                <p>{item.product.brand}</p>
                                                <p>{item.product.pack}</p>
                                                <p className="category">{item.product.categoryName}</p></div>
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
            <div className="map">
                <img src="../img/map.jpg"
                    alt="Map where item is located" />
            </div>

        </main>
    )
}