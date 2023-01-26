import { Link } from 'react-router-dom'
import "./style.css"

export default function Navbar() {
    return (
        <nav id="mainNavigation">
            <Link to="/">Home</Link>
            <Link to="/create-page">Create Page</Link>
        </nav >
    )
}
