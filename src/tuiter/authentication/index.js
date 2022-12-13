import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import * as service from "../services/user-service";


export const Login = () => {
    const [loginUser, setLoginUser] = useState({});
    const navigate = useNavigate()
    // login: if success --> navigate to mytuits screen
    const login = () =>
        service.login(loginUser)
            .then((user) => navigate('/tuiter/home'))
            .catch(e => alert(e));
    const signup = () =>
        service.login(loginUser)
            .then((user) => navigate('/signup'))
            .catch(e => alert(e));

    return (
        <div>
            <h3>Login</h3>

            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form2Username">Username</label>
                <input onChange={(e) =>
                    setLoginUser({...loginUser, username: e.target.value})}
                       type="text" id="form2Username" className="form-control"/>
            </div>
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form2Password">Password</label>
                <input onChange={(e) =>
                    setLoginUser({...loginUser, password: e.target.value})}
                       type="password" id="form2Password" className="form-control"/>

            </div>
            <button onClick={login} type="button" className="btn btn-primary btn-block mb-4">Login</button>

            <div className="text-center">
                <p>Not a member? <Link to="/tuiter/register" className="text-decoration-none">
                    Register</Link> now
                </p>
            </div>
        </div>
    );
};

export default Login