import {Link} from "react-router-dom";

function Nav() {
    return (
        <div>
            <Link to="/">Labs</Link> |
            <Link to="/hello">Hello</Link> |
            <Link to="/tuiter/home">Tuiter</Link>
        </div>
    )
}

export default Nav;
