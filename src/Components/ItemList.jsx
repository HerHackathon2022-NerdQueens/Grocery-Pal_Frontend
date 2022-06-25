import { useState } from "react";
import { Link } from "react-router-dom"
import AddMultipleItemsToShoppingList from "./AddMultipleItemsToShoppingList";
import AddOneItemToShoppingList from "./AddOneItemToShoppingList";

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

        <div className="product-container">

            {props.filterItems.map((item, key) =>
                <div key={key}>
                    <Link to={"article/" + item.id || item.product.id}>
                        <h2>{item.productName || item.product.productName}</h2>
                    </Link>
                    <p>{item.brand || item.product.brand}</p>
                    <p>{item.pack || item.product.pack}</p>
                    <p>{item.price || item.product.price}€</p>

                    {item.amount
                        ? <p>Stückzahl: {item.amount}</p>
                        : null}

                    {(props.ingredients && props.setIngredients)
                        ? <AddIngredient setIngredients={props.setIngredients} ingredients={props.ingredients} />
                        :
                        (item.amount > 1 ?
                            <AddMultipleItemsToShoppingList id={item.id || item.product.id} amount={item.amount} />
                            :
                            < AddOneItemToShoppingList id={item.id || item.product.id} />)
                    }
                </div>
            )}
        </div>
    )
}

const AddIngredient = ({ }) => {

}