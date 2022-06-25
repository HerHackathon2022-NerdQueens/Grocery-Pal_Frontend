import './searchbar.css'
import { useEffect, useState } from "react"
import ItemList from "./ItemList"

export default function Searchbar(props) {

    const [allItems, setAllItems] = useState([])
    const [search, setSearch] = useState("")
    const [filterItems, setFilterItems] = useState([])
    const [error, setError] = useState()

    useEffect(() => {
        console.log("Searchbar all Items were rendered");

        fetch('http://localhost:8081/Product')
            .then(resp => resp.json())
            .then(data => {
                if (!data.err) {
                    console.log(data);
                    setAllItems(data)
                } else if (data.err) {
                    setError(data.err.message)
                    return
                } return () => {
                    setError("Fetch not working")
                }
            })
    }, [])

    const handleChange = (e) => {
        const searchedWord = e.target.value;
        setSearch(searchedWord)

        const nFilter = allItems.filter((value) => {
            return value.productName.toLowerCase().includes(searchedWord.toLowerCase())
        })

        if (searchedWord === "") {
            setFilterItems([])
        } else {
            setFilterItems(nFilter)
        }

    }

    const emptySearch = () => {
        setSearch("")
        setFilterItems([])
    }


    const handleSubmit = (e) => {
        e.preventDefault()
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={search}
                    onChange={handleChange}
                    placeholder="search products"
                />
                {/* <div onClick={emptySearch}>X</div> */}
                {/* <button>Submit</button> */}
            </form>
            {error
                ? null
                : <ItemList filterItems={filterItems} />}
        </>
    )
}