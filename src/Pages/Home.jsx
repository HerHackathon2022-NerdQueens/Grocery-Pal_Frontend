import "./home.css"
import Searchbar from "../Components/Searchbar";

export default function Home() {
    return (
        <header>
            <h1>Finding items
                was never easier</h1>
            <section className="search">
                <Searchbar />
            </section>
        </header>


    )
}