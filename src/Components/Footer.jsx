import './footer.css'
import { BsShopWindow } from "react-icons/bs";
import { BsListUl } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai"
import { BsCart } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";
import { BiFoodMenu } from "react-icons/bi";
export default function Footer() {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <NavLink to="/" activeclassname="active">
                        <BsShopWindow />
                    </NavLink>
                </li>
                <NavLink to={"shoppinglist"} activeclassname="active">
                    <li>
                        <BsCart />
                    </li>
                </NavLink>
                <NavLink to={"recipes"} activeclassname="active">
                    <li>
                        <BiFoodMenu />
                    </li>
                </NavLink>

                <li><AiOutlineUser />
                </li>
            </ul>
        </nav>
    )
}

