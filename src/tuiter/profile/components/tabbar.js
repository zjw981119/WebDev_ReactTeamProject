import {Button, Space} from "antd";
import {useLocation, useNavigate} from "react-router-dom";
import {useProfile} from "../../hooks";

export const Tabbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {profile} = useProfile();
  const bars = [
    {
      path: '/tuiter/profile/tuits',
      name: 'Tuits'
    },
    {
      path: '/tuiter/profile/tuits-replies',
      name: 'Reviewd Games'
    },
    // {
    //   path: '/tuiter/profile/media',
    //   name: 'Media'
    // },
    {
      path: '/tuiter/profile/likes',
      name: 'Likes'
    },
    // {
    //   path: '/tuiter/profile/dislikes',
    //   name: 'Displikes'
    // }
  ];
  if (!profile) {
    return <></>
  }
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
