import { Link } from "react-router-dom"
import AddItemToShoppingList from "./AddItemToShoppingList";
import "./itemList.css"
export default function ItemList(props) {
    console.log("ItemList", props.filterItems);
    return (

        <section className="product-container">

            {props.filterItems.map((item, key) =>
                <article key={key}>

                    <Link to={"article/" + item.id}>
                        <h2>{item.productName}</h2>
                    </Link>
                    <p>{item.brand}</p>
                    <p>{item.pack}</p>

                    <div className="flex">
                        <p>{item.price}€</p>
                        <AddItemToShoppingList id={item.id} />
                    </div>
                </article>

            )}
        </section>
    )
}