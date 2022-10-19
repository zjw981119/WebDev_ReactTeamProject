import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
const ExploreComponent = () => {
    return(
        <>
            <div className="row">
                <div className="col-11">
                    <div className="position-relative">
                        <i className="fa-solid fa-magnifying-glass ps-3 pt-2 position-absolute" style={{"color": "gray"}}></i>
                        <input className="form-control rounded-pill ps-5 border border-secondary"
                               placeholder="Search Tuiter"/>
                    </div>
                </div>
                <div className="col-1 d-flex align-items-center">
                    <i className="fa fa-cog me-1" style={{"color": "deepskyblue"}}></i>
                </div>
                {/*<div className="col-11 position-relative">*/}
                {/*    <input placeholder="Search Tuiter"*/}
                {/*           className="form-control rounded-pill ps-5"/>*/}
                {/*    <i className="bi bi-search position-absolute wd-nudge-up"></i>*/}
                {/*</div>*/}
                {/*<div className="col-1">*/}
                {/*    <i className="wd-bottom-4 text-primary float-end bi bi-gear-fill fs-2 position-relative"></i>*/}
                {/*</div>*/}
            </div>
            <ul className="nav nav-pills mt-2 mb-2">
                <li className="nav-item">
                    <a className="nav-link active">For You</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">News</a>
                </li>
            </ul>
            <div className="position-relative mb-2">
                <img src="/images/starship.webp" className="w-100"/>
                <h1 className="position-absolute wd-nudge-up text-black">
                    SpaceX Starship</h1>
            </div>
            <PostSummaryList/>
        </>
    );
};
export default ExploreComponent;
