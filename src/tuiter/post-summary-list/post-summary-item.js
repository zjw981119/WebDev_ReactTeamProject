import {useEffect, useState} from "react";
import  "./index.css"

const PostSummaryItem = (
    {
        news = {
            "link": "",
            "published_datetime_utc": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "photo_url": "tesla.png"
        }
    }
) => {

    let [date, setdate] = useState(news.published_datetime_utc);

    useEffect(() => {
        //console.log(date.substring(0,10))
        let local_time = new Date(date);
        UpdateDate(local_time)
    }, );

    async function UpdateDate(local_time) {
        await setdate(String(local_time).substring(4, 21));
    }


    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <a href={news.link}  className="text-decoration-none fw-bolder" target="_blank" rel="noopener">{news.title}</a>
                    <div className="top-bottom-padding time-text">Posted: {date}</div>
                </div>
                <div className="col-2">
                    <img width={70} className="float-end rounded-3" src={news.photo_url}/>
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;
