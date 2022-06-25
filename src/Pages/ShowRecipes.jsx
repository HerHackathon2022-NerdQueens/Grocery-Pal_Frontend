import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"

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
                    console.log(recipes);
                    setAllRecipes(recipes)
                } return () => {
                    setError("Could not fetch Recipes")
                }
            })
    }, [])

    const goBack = () => {
        navigate(-1)
    }

    return (
        <>
            <h1>Recipes:</h1>
            {loaded ?
                (error ? <h2>There seems to be a problem :/</h2>
                    : (
                        allRecipes.length === 0 ? <h2>There are currently no recipes there...</h2>
                            : <ul>
                                {allRecipes.map((recipe, key) =>
                                    <Link to={"/repice/" + recipe.id} key={key}>
                                        <li>
                                            <div>
                                                <h1>{recipe.recipeName}</h1>
                                                <p>{recipe.instructions.substring(0, 100)}</p>
                                            </div>
                                        </li>
                                    </Link>
                                )}
                            </ul>
                    )
                )
                : <h2>Loading...</h2>
            }
            <button onClick={goBack}>Go Back</button>
        </>
    )
}