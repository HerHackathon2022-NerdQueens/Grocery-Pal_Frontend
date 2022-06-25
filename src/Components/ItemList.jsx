import { Link } from "react-router-dom"

export default function ItemList(props) {
    console.log("ItemList", props.filterItems);
    return (
        <div className="product-container">
            {/* Link to item Detail per item */}
            {/* <h2>TestList</h2> */}
            {props.filterItems.map((item, key) =>
                <div key={key}>
                    <Link to={"article/" + item.id}>
                        <h2>{item.name}</h2>
                    </Link>
                    <p>{item.brand}</p>
                    <p>{item.pack}</p>
                    <p>{item.price}€</p>
                    <div>Add to Shopping List</div>
                </div>
            )}
        </div>
    )
}