import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import AddItemToShoppingList from "../Components/AddItemToShoppingList";
import ItemList from "../Components/ItemList";

export default function RecipeDetails() {
    const { recipeID } = useParams();
    console.log(recipeID);

    const [singleRecipe, setSingleRecipe] = useState()

    const [error, setError] = useState("")
    const [loaded, setLoaded] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        fetch('http://localhost:8081/Recipe/' + recipeID)
            .then(resp => resp.json())
            .then(recipe => {
                if (recipe.err) {
                    setError(recipe.err.message)
                    return
                } else if (!recipe.err && recipe) {
                    setLoaded(true)
                    console.log(recipe);
                    setSingleRecipe(recipe)
                } return () => {
                    setError("Could not fetch Recipe Detail ID")
                }
            })
    }, [])


    const addAllIngredients = (e, allIngredientsArray) => {
        e.preventDefault()
        console.log(allIngredientsArray);

        allIngredientsArray.map(ingred => {
            for (let i = 0; i < (ingred.amount + 1); i++) {
                fetch("http://localhost:8081/ShoppingList/" + ingred.product.id, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
            }
        })
    }

    const navigateBack = () => {
        navigate(-1)
    }

    return (
        <>
            {loaded ?
                (error ? <div>
                    <h3>Sorry, we could not find that recipe :/</h3>
                </div> :
                    <>
                        <article>
                            <h2>{singleRecipe.recipeName}</h2>
                            <div>
                                <p>{singleRecipe.instructions}</p>
                            </div>
                            <ItemList filterItems={singleRecipe.ingredients.product} />

                            <button onClick={e => addAllIngredients(e, singleRecipe.ingredients)}>Add all ingredients to ShoppingList</button>
                        </article>
                    </>
                )
                : <h1>Loading...</h1>}

            <button onClick={navigateBack}>Back</button>

        </>
    )
}