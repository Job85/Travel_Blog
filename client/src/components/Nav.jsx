import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/Posts'>Posts</Link>
            </nav>
        </div>
    )
}

export default Nav