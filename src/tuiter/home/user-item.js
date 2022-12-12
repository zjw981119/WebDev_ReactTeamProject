import React, {useState} from "react";
import "../search/index.css";
import {updateProfile} from "../services/user-service";
import {message} from "antd";
import {Link} from "react-router-dom";


const UserItem = ({user, refreshUsers}) => {
    const [account, setAccount] = useState(user.accountType);
    const saveClickHandler = () => {
        const updatedUser = {...user, accountType:account};
        updateProfile(user._id, updatedUser)
            .then(refreshUsers)
            .then(message.success("Update Successfully!"));
    }

    return (
        <li key={user._id} className="list-group-item">
            <div className="row">
                {/*left-part user info*/}
                <div className="col-3 position-relative">
                    <Link to={`/tuiter/profile/${user._id}`}>
                        <img className="rounded-circle position-absolute top-50 start-50 translate-middle"
                             src={`/images/${user.username}.png`}
                             width="60px"
                        />
                        <div className="position-absolute top-0 start-50 translate-middle mt-2">
                            {user.username}
                        </div>
                    </Link>
                </div>
                {/* right-part */}
                <div className="col-9">
                    {/* user */}
                    <label>Set Account Type</label>
                    <select className="form-select" aria-label="Default select example"
                            onChange={(event) => setAccount(event.target.value)}>
                        <option value="PERSONAL" selected={account === "PERSONAL"}>
                            PERSONAL
                        </option>
                        <option value="GAME-ADMIN" selected={account === "GAME-ADMIN"}>
                            GAME-ADMIN
                        </option>
                        <option value="TUITER-ADMIN" selected={account === "TUITER-ADMIN"}>
                            TUITER-ADMIN
                        </option>
                    </select>
                    <button
                        className="mt-2 me-2 btn btn-primary border border-secondary fw-bolder rounded-pill fa-pull-right"
                        onClick={saveClickHandler}>
                        SAVE
                    </button>
                </div>
            </div>
        </li>
    );
};
export default UserItem;
