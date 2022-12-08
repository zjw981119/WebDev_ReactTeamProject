import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import * as tuitService from "../services/tuits-service";
import * as secureService from "../services/security-service";
import {Button} from "antd";
const WhatsHappening = ({isLoggedIn, profile, refreshTuits}) => {
    const navigate = useNavigate();
    const [whatsHappening, setWhatsHappening] = useState('');
    const createTuit = () => {
        // anonymous user
        if (!isLoggedIn) {
            navigate('/tuiter/login');
        } else {
            // create tuit
            tuitService
                .createTuit(profile._id, {tuit: whatsHappening})
                .then(refreshTuits);
        }
    }
    //user logout
    const logout = () => {
        secureService.logout()
            .then(() => navigate('/tuiter/login'));
    }

    return (
        <div className="row">
            <div className="col-auto">
                {
                    // if anonymous user
                    !isLoggedIn &&
                    <img src="/images/anonymous.png" width={60}/>
                }
                {
                    isLoggedIn &&
                    <img src={"/images/" + profile.username + ".png"} width={60}/>
                }
                {
                    isLoggedIn &&
                    <div className="row">
                        <Button onClick={logout}
                                className="mt-2 me-2 btn btn-sm btn-light border border-secondary fw-bolder rounded-pill fa-pull-left">
                            Logout
                        </Button>
                    </div>
                }
            </div>
            <div className="col-10">
                       <textarea value={whatsHappening} placeholder="What's happening?"
                                 className="form-control border-0"
                                 onChange={(event) => setWhatsHappening(event.target.value)}>
                       </textarea>
                <div>
                    <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                            onClick={createTuit}>
                        Tuit
                    </button>
                    <div className="text-primary fs-2">
                        <i className="bi bi-card-image fa-xs me-3"/>
                        <i className="bi bi-filetype-gif fa-xs me-3"/>
                        <i className="bi bi-bar-chart fa-xs me-3"/>
                        <i className="bi bi-emoji-smile fa-xs me-3"/>
                        <i className="bi bi-geo-alt fa-xs"/>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <hr/>
            </div>
        </div>
    );
}
export default WhatsHappening;
