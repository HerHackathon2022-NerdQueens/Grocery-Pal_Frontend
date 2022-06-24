export default function ItemList(props) {
    console.log("ItemList", props.filterItems);
    return (
        <div>
            {/* Link to item Detail per item */}
            <h2>TestList</h2>
            {props.filterItems.map((item, key) =>
                <div key={key}>
                    <h2>{item.name}</h2>
                    <p>{item.brand}</p>
                    <p>{item.pack}</p>
                    <p>{item.price}€</p>
                    <div>Add to Shopping List</div>
                </div>
            )}
        </div>
    )
}