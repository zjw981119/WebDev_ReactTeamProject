import {Link} from "react-router-dom";
import Collapsible from 'react-collapsible';
const AboutUsComponent = () => {


    return (

        <div className="ttr-profile list-group" >

            <div className="border border-secondary list-group-item">

                <div className="btn-padding">
                    <button className="btn btn-light btn-lg rounded-pill ms-2 mt-3 " >
                        <Link to="/tuiter/home">
                            <i className="fa-solid fa-arrow-left fa-lg"/>
                        </Link>
                    </button>
                </div>



                <div className="mb-5 position-relative">
                    <img className="w-100" src="https://gw-advance-prod-us-east-1.s3.amazonaws.com/uploads/campaign_image/name/5c87d953e54b05006b06075c/ee1549ed-f59e-4cef-b6ad-34acf303d886.jpeg" height='350px'/>
                    {/*className="position-relative"*/}
                    <div className="position-absolute top-100 translate-middle" style={{'paddingLeft':'150px'}}>

                    </div>
                </div>


                <div className="p-3">
                    <div className="bg-color-blue border-secondary">
                        <Collapsible trigger="About this Application"  className="fw-bolder pb-0 mb-0" open={true}>
                            <p className="p-2 collapsible">
                                This is an Full-stack game-related social media web application. User needs to sign up and login to their account for using this application.
                                User can search the game they are interested in and find the detail information about it such as game description, trailer, music, genres, developers. Also, user can review the game
                                by providing their comment, feedback and rating to the game. In addition, user could post about what they are doing, what they thought and which game they are playing recently. This is not
                                limited to only game, user can basically post everything they like. What's more, user can add their personal info to the profile page including their username, password, bio, birthday, Avator, etc.
                                User can also check their game review history in their profile page.
                            </p>

                        </Collapsible>
                    </div>

                    <div className="bg-color-blue border-secondary">
                        <Collapsible trigger="About us"  className="fw-bolder pb-0 mb-0" open={true}>
                            <p className="p-2 collapsible">
                                We are Computer Science Students from the Northeastern University's Khory College of Computer Science. This is our final project of CS5610 Web development course which instructed by
                                Dr. JOSE ANNUNZIATO.
                            </p>

                        </Collapsible>
                    </div>

                    <div className="bg-color-blue border-secondary">
                        <Collapsible trigger="Authors"  className="fw-bolder pb-0 mb-0" open={true}>
                            <p className="p-2 collapsible">
                                This web application is designed by:
                                <ul>
                                    <li>
                                        Jinwei Zhang
                                    </li>
                                    <li>
                                        Zuocheng Wang
                                    </li>
                                    <li>
                                        Pengbo Wang
                                    </li>
                                </ul>
                                (all in random order and equal contribution)
                            </p>

                        </Collapsible>
                    </div>

                    <div className="bg-color-blue border-secondary">
                        <Collapsible trigger="Contact Us"  className="fw-bolder pb-0 mb-0" open={true}>
                            <div className="p-2 collapsible">
                                Jinwei Zhang: zhang.jinw@northeastern.edu
                            </div>
                            <div className="p-2 collapsible">
                                Zuocheng Wang: wang.zuo@northeastern.edu
                            </div>
                            <div className="p-2 collapsible">
                                Pengbo Wang: wang.pengbo@northeastern.edu
                            </div>

                        </Collapsible>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default AboutUsComponent;