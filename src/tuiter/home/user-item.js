import React, {useState} from "react";
import "../search/index.css";


const UserItem = ({user}) => {
    const [account, setAccount] = useState(user.accountType);
    return (
        <li key={user._id} className="list-group-item">
            <div className="row">
                {/*left-part user info*/}
                <div className="col-3 position-relative">
                    <img className="rounded-circle position-absolute top-50 start-50 translate-middle"
                         src={`/images/${user.username}.png`}
                         width="60px"
                    />
                    <div className="position-absolute top-0 start-50 translate-middle mt-2">
                        {user.username}
                    </div>
                </div>
                {/* right-part */}
                <div className="col-9">
                    {/* user */}
                    <label>Set Account Type</label>
                    <select className="form-select" aria-label="Default select example">
                        <option value="PERSONAL" selected={account === 'PERSONAL'}>PERSONAL</option>
                        <option value="GAME-ADMIN" selected={account === 'GAME-ADMIN'}>GAME-ADMIN</option>
                        <option value="TUITER-ADMIN" selected={account === 'TUITER-ADMIN'}>TUITER-ADMIN</option>
                    </select>
                    <button className="mt-2 me-2 btn btn-primary border border-secondary fw-bolder rounded-pill fa-pull-right">
                        SAVE
                    </button>
                </div>
            </div>
        </li>
    );
};
export default UserItem;
