import React, {useState} from "react";
import {createTuit} from "../reducers/home-tuits-reducer";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        const newTuit = {
            'tuit': whatsHappening
        }
        dispatch(createTuit(newTuit));
    }
    return (
        <div className="row">
            <div className="col-auto">
                <img src="/images/nasa.jpeg" width={60}/>
            </div>
            <div className="col-10">
               <textarea value={whatsHappening} placeholder="What's happening?"
                         className="form-control border-0"
                         onChange={(event) => setWhatsHappening(event.target.value)}>
               </textarea>
                <div>
                    <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                            onClick={tuitClickHandler}>
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
