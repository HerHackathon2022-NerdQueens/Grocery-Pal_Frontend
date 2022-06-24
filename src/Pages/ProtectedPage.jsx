import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer"

export default function ProtectedPage() {
    return (
        <>
            <Outlet />

            <Footer />
        </>
    )
}