import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <h1>
                Travel Blog Home Page!
            </h1>
            <h2>
                <Link to={'/posts'}> Write A Post! </Link>
            </h2>
        </div>
    )
}

export default Home