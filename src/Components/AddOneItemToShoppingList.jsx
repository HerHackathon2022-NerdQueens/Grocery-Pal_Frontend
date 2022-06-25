
export default function AddOneItemToShoppingList(props) {
    // const itemID = props.id

    const addItem = (event, itemID) => {
        event.preventDefault()

        console.log(itemID);

        fetch("http://localhost:8081/ShoppingList/" + itemID, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            }
        })
        // .then(resp => resp.json())
        // .then(json => console.log("addeditem"))
    }

    return (
        <>
            <button className="blue-btn" onClick={e => addItem(e, props.id)}>Save to my List </button>
        </>
    )

}