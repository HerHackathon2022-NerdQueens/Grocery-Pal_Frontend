import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom"
import Searchbar from "./Searchbar";

export default function AddRecipeForm() {
    const [recipeName, setRecipeName] = useState("")
    const [description, setDescription] = useState("")
    const [ingredients, setIngredients] = useState([]) //[{"productId": 0,"amount": 0}]
    const addRecipeActive = true

    const [error, setError] = useState("")
    const [inputError, setInputError] = useState("")

    const navigate = useNavigate()

    const addIngredient = () => {

    }

    const removeIngredient = () => {

    }

    const increaseAmountIngredient = () => {

    }

    const decreaseAmountIngredient = () => {

    }

    const addRecipe = (e) => {
        e.preventDefault()

        const formData = new FormData()

        if (recipeName.length < 4) {
            setInputError("Please add a Recipe Title (length must be more than 3 characters!")
        }

        if (description.length < 21) {
            setInputError("Please add a Description (length must be more than 20 characters!")
        }

        if (ingredients.length < 3) {
            setInputError("Please add some ingredients (must be at least 2")
        }

        if (recipeName.length > 4 && description.length < 21 && ingredients.length < 3) {

            formData.set(
                {
                    "recipeName": recipeName,
                    "ingredientInputs": ingredients,
                    "instructions": description
                }
            )

            fetch('http://localhost:8081/Recipe', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: formData,
            })
                // if there is a server response, use following (else turn the following into comment and change navigate):
                .then(resp => resp.json())
                .then(newRecipe => {
                    if (newRecipe.id) {
                        navigate("/repice/" + newRecipe.id)
                    }
                })

        }

    }


    return (
        <>
            <form>
                <div>
                    <input
                        type="text"
                        onChange={e => setRecipeName(e.target.value)}
                    />
                    <label htmlFor="recipeDescription">Description</label>
                    <textarea
                        name="recipeDescription"
                        id=""
                        cols="80"
                        rows="10"
                        placeholder="Add your description..."
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>

                <input type="submit" value="Create New Recipe" onSubmit={e => addRecipe(e)} />
                <h1>Add Ingredients:</h1>
                <Searchbar setIngredients={setIngredients} ingredients={ingredients} addRecipeActive={addRecipeActive} />
            </form>
            <div>
                <h3>Ingredients:</h3>
                <div>
                    {ingredients.slice(1).map((item, key) =>
                        <Link to={"/article/" + item.id} key={key}>
                            <li>
                                <h2>{item.productId}</h2>
                            </li>
                        </Link>
                    )}
                </div>
            </div>


        </>
    )
}