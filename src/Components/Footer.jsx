import './footer.css'
import { BsShopWindow } from "react-icons/bs";
import { BsListUl } from "react-icons/bs";
import { GiCookingPot } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai"
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    {/* Random Recipes */}
                    <BsShopWindow />
                </li>
                <Link to={"shoppinglist"}>
                    <li>
                        {/* User Shopping List */}
                        <BsListUl />
                    </li>
                </Link>
                <Link to={"recipes"}>
                    <li>
                        <GiCookingPot />
                    </li>
                </Link>

                <li><AiOutlineUser />
                </li>
            </ul>
        </nav>
    )
}
