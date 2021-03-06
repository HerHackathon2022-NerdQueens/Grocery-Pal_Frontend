import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import AddOneItemToShoppingList from "../Components/AddOneItemToShoppingList";
import ItemList from "../Components/ItemList";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./recipeDetail.css"

export default function RecipeDetails() {
    const { recipeID } = useParams();

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
                    setSingleRecipe(recipe)
                } return () => {
                    setError("Could not fetch Recipe Detail ID")
                }
            })
    }, [])


    const addAllIngredients = (e, allIngredientsArray) => {
        e.preventDefault()

        allIngredientsArray.map(ingred => {
            for (let i = 0; i < (ingred.amount); i++) {
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
        <main>

            {loaded ?
                (error ? <div>
                    <h3>Sorry, we could not find that recipe :/</h3>
                </div> :
                    <>
                        <article>
                            <section className="header">
                                <button className="btn back-btn" onClick={navigateBack}><AiOutlineArrowLeft /></button>
                                <h2>{singleRecipe.recipeName}</h2>
                            </section>
                            <div>
                                <p>{singleRecipe.instructions}</p>
                            </div>
                            <ItemList filterItems={singleRecipe.ingredients} />
                            <button className="blue-btn" onClick={e => addAllIngredients(e, singleRecipe.ingredients)}>Add all ingredients to ShoppingList</button>
                        </article>
                    </>
                )
                : <h1>Loading...</h1>}
        </main>
    )
}