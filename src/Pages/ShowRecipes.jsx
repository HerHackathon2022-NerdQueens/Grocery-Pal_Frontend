import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./showRecipes.css"

export default function ShowRecipes() {
    const [allRecipes, setAllRecipes] = useState([])

    const [error, setError] = useState("")
    const [loaded, setLoaded] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        fetch('http://localhost:8081/Recipe')
            .then(resp => resp.json())
            .then(recipes => {
                if (recipes.err) {
                    setError(recipes.err.message)
                    return
                } else if (!recipes.err && recipes) {
                    setLoaded(true)
                    setAllRecipes(recipes)
                } return () => {
                    setError("Could not fetch Recipes")
                }
            })
    }, [])

    const navigateBack = () => {
        navigate(-1)
    }

    return (
        <main>
            <section className="header">
                <button className="btn back-btn" onClick={navigateBack}><AiOutlineArrowLeft /></button>
                <h1>Recipes</h1>
            </section>

            {loaded ?
                (error ? <h2>There seems to be a problem :/</h2>
                    : (
                        allRecipes.length === 0 ? <h2>There are currently no recipes there...</h2>
                            : <ul>
                                {allRecipes.map((recipe, key) =>
                                    <Link to={"/repice/" + recipe.id} key={key}>
                                        <li className="recipe-info">
                                            <div>
                                                <img src="../img/bg.jpg" alt="measurements cups" />
                                            </div>
                                            <div className="flex">
                                                <h3>{recipe.recipeName}</h3>
                                                <p className="link-lg"><a href="#">Ingredients list</a></p>
                                                {/* <p>{recipe.instructions.substring(0, 100)}</p> */}
                                            </div>
                                        </li>
                                    </Link>
                                )}
                            </ul>
                    )
                )
                : <h2>Loading...</h2>
            }
        </main>
    )
}