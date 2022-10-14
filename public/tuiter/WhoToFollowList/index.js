import FollowItem from "./WhoToFollowListItem.js";
import users from "./users.js";

const WhoToFollowList = () => {
    return (`
       <ul class="list-group">
           <li class="list-group-item">
                <span class=" fw-bolder"> Who to follow </span>
            </li>
           ${
        users.map(user => {
            return (FollowItem(user));
        }).join("")
    }
       </ul>
   `);
}
export default WhoToFollowList;