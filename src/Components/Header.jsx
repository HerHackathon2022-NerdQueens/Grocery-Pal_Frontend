import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <nav>
                <Link to={"shoppinglist"}>
                    <div>
                        <h3>My Shoppinglist</h3>
                    </div>
                </Link>
            </nav>
        </header>
    )
}