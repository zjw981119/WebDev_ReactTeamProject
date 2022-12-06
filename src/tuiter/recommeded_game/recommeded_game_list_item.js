import React from "react";
const Recommended_game_list_item = (
    {
        gameSummary = { name: 'GTA', released: '2022-11-01', background_image: '' }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className height={48} width={90} src={gameSummary.background_image}/>
                </div>
                <div className="col-2 ps-3">
                </div>
                <div className="col-8">
                    <div className="fw-bold">{gameSummary.name}</div>
                    <div>Release Date: {gameSummary.released}</div>
                </div>
            </div>
        </li>
    );
};
export default Recommended_game_list_item;
