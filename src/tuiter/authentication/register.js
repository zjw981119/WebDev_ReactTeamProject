import {useState} from "react";
import {useNavigate} from "react-router-dom";
import * as usersService from "../services/security-service";

const Signup = () => {
    const [newUser, setNewUser] = useState({});
    const navigate = useNavigate();

    // If the response is successful the screen navigates to the profile screen
    // Otherwise an alert pops up and stays in the signup screen.
    const signup = () =>
        usersService.signup(newUser)
            .then(() => navigate('/tuiter/home'))
            .catch(e => alert(e));
    return (
        <div>
            <h3>Signup</h3>
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form2Username">Username</label>
                <input className="mb-2 form-control" id="form2Username"
                       onChange={(e) =>
                           setNewUser({...newUser, username: e.target.value})}
                       placeholder="username"/>
            </div>

            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form2Password">Password</label>
                <input className="mb-2 form-control" id="form2Password"
                       onChange={(e) =>
                           setNewUser({...newUser, password: e.target.value})}
                       placeholder="password" type="password"/>
            </div>

            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form2Email">Email</label>
                <input className="mb-2 form-control" id="form2Email"
                       onChange={(e) =>
                           setNewUser({...newUser, email: e.target.value})}
                       placeholder="email" type="email"/>
            </div>

            <button onClick={signup}
                    className="btn btn-primary mb-5">Register
            </button>

        </div>
    );
}
export default Signup;