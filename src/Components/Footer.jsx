import './footer.css'
import { BsShopWindow } from "react-icons/bs";
import { BsListUl } from "react-icons/bs";
import { GiCookingPot } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai"
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";

export default function Footer() {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    {/* Random Recipes */}
                    <NavLink to="/" activeclassname="active">
                        <BsShopWindow />
                    </NavLink>
                </li>
                <li>
                    {/* User Shopping List */}
                    <BsListUl />
                </li>
                <li><GiCookingPot />
                </li>
                <li><AiOutlineUser />
                </li>
            </ul>
        </nav>
    )
}

