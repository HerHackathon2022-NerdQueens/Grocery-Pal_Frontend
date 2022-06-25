import { useEffect } from "react"

export default function AddItemToShoppingList(props) {
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
            <button onClick={e => addItem(e, props.id)}>+</button>
        </>
    )

}