import { useState } from "react";
import { Link } from "react-router-dom"
import AddMultipleItemsToShoppingList from "./AddMultipleItemsToShoppingList";
import AddOneItemToShoppingList from "./AddOneItemToShoppingList";


import "./itemList.css"

export default function ItemList(props) {

    // const addIngredient = (e, itemID) => {
    //     e.preventDefault()

    //     const [singleIngredient, setSingleIngredient] = useState({})

    //     setSingleIngredient({
    //         "productId": itemID,
    //         "amount": 1
    //     })

    //     console.log("singleIngred", singleIngredient);
    // }

    console.log("ItemList", props.filterItems);


    return (
        <>
            <div className="flex mg">
                <h2 className="title">Search Results</h2>
                <a href="#" className="link-sm"> See all →</a>
            </div>
            <section className="product-container">
                {props.filterItems.map((item, key) =>
                    <article key={key}>
                        <Link to={"article/" + item.id || item.product.id}>
                            <div className="product-name">
                                <h2>{item.productName || item.product.productName}</h2>
                            </div>
                        </Link>
                        <p>{item.brand || item.product.brand}</p>
                        <p>{item.pack || item.product.pack}</p>
                        <div>
                            <p className="price blue">{item.price || item.product.price}€</p>

                            {item.amount
                                ? <p>Stückzahl: {item.amount}</p>
                                : null}
                            <div className="flex">
                                <Link className="link" to={"article/" + item.id || item.product.id}>
                                    Details
                                </Link>
                                {(props.ingredients && props.setIngredients)
                                    ? <AddIngredient setIngredients={props.setIngredients} ingredients={props.ingredients} />
                                    :
                                    (item.amount > 1 ?
                                        <AddMultipleItemsToShoppingList id={item.id || item.product.id} amount={item.amount} />
                                        :
                                        < AddOneItemToShoppingList id={item.id || item.product.id} />)
                                }</div>
                        </div>
                    </article>

                )}
            </section></>
    )
}

const AddIngredient = ({ }) => {

}