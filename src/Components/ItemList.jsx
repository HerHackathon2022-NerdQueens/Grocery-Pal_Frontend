import { Link } from "react-router-dom"
import AddItemToShoppingList from "./AddItemToShoppingList";

export default function ItemList(props) {
    console.log("ItemList", props.filterItems);
    return (

        <div className="product-container">

            {props.filterItems.map((item, key) =>
                <div key={key}>
                    <Link to={"article/" + item.id}>
                        <h2>{item.productName}</h2>
                    </Link>
                    <p>{item.brand}</p>
                    <p>{item.pack}</p>
                    <p>{item.price}€</p>
                    {<AddItemToShoppingList id={item.id} />}
                </div>
            )}
        </div>
    )
}