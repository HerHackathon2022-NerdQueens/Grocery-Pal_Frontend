export default function AddMultipleItemsToShoppingList(props) {
    // const itemID = props.id

    const addItem = (event, itemID, amount) => {
        event.preventDefault()

        console.log("itemID " + itemID + " & amount: " + amount);

        for (let i = 0; i < amount; i++) {
            fetch("http://localhost:8081/ShoppingList/" + itemID, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                }
            })
        }

    }

    return (
        <>
            <button onClick={e => addItem(e, props.id, props.amount)}>+</button>
        </>
    )

}