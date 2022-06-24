import './footer.css'
import { BsShopWindow } from "react-icons/bs";

export default function Footer() {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    {/* Random Recipes */}

                    <BsShopWindow />
                </li>
                <li>User List</li>
                <li>Premade Lists</li>
                <li>Statistics</li>
            </ul>
        </nav>
    )
}