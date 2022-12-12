import {useLocation, useNavigate} from "react-router-dom";
import {useParams} from "react-router";

export const Tabbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {uid} = useParams();
  const bars = [
    {
      path: `/tuiter/profile/${uid}/tuits`,
      name: 'Tuits'
    },
    {
      path: `/tuiter/profile/${uid}/reviewed-games`,
      name: 'Reviewd Games'
    },
    {
      path: `/tuiter/profile/${uid}/likes`,
      name: 'Likes'
    },

  ];
  return (
    <ul className={'nav nav-pills d-flex justify-content-between'}>
      {bars.map(bar => {
        return (
          <li key={bar.name} className="nav-item">
            <a
              role={'button'}
              onClick={() => navigate(bar.path, {replace: true})}
              className={`nav-link ${bar.path === location.pathname ? 'active' : ''}`}
               aria-current="page"
              >{bar.name}</a>
          </li>
        )
      })}
    </ul>
  )
}
