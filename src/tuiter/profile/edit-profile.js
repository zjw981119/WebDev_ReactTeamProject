import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

import * as userService from "../services/user-service";
import {message} from "antd";
function imgFileToSrc(imageFile) {
    return new Promise((resolve, reject) => {
        const fr = new FileReader();
        fr.onload = function () {
            resolve(fr.result);
        }
        fr.readAsDataURL(imageFile);
    });
}
const EditProfile = () => {
    const [profile, setProfile] = useState({});
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [birthday, setBirthday] = useState('');
    const [phone, setPhone] = useState('');
    const [banner, setBanner] = useState('');
    const [avatar, setAvatar] = useState('');

    // retrieve the currently logged in user
    useEffect(() => {
        async function getProfile() {
            const user = await userService.profile();
            setProfile(user);
            // TODO set properties
            setLocation(user.location);
            setPhone(user.phone);
            setEmail(user.email);
            setBirthday(user.birthday);
        }
        getProfile();
    }, []);

    const saveChangeHandler = () => {
        const data = {
            "location": location,
            "phone": phone,
            "email": email,
            "dateOfBirth": birthday,
        }
        userService.updateProfile(profile._id, data)
            .then(message.success("Update successfully!"))
    }

    return (
        <div className="ttr-edit-profile list-group">
            <div className="border border-secondary border-bottom-0 list-group-item" style={{"marginBottom": "60px"}}>
                <Link to={`/tuiter/profile/${profile._id}`} className="btn btn-light rounded-pill fa-pull-left fw-bolder mt-2 mb-2 ms-2">
                    <i className="fa-solid fa-xmark"/>
                </Link>
                <Link to={`/tuiter/profile/${profile._id}`} className="btn btn-dark rounded-pill fa-pull-right fw-bolder mt-2 mb-2 me-2"
                      onClick={saveChangeHandler}>
                    Save
                </Link>
                <h5 className="p-3 mb-0 fw-bolder">Edit profile</h5>
                <div className="position-relative">
                    <img className="w-100" src="https://th.bing.com/th/id/OIP.b2-Z2RfU6u2Fghz13FPcTAHaEK?pid=ImgDet&rs=1" height='250px' style={{"filter": "brightness(50%)"}}/>
                    {/* upload new banner image button */}
                    <label className="position-absolute end-50 top-50 translate-middle btn btn-light btn-sm rounded-pill">
                        <i className="fa-solid fa-camera fa-lg"/>
                        <input accept={'image/*'} onChange={e => {
                            imgFileToSrc(e.target.files[0])
                              .then(src => {
                                setBanner(src);
                              })
                        }} id={'file1'} hidden type={'file'}/>
                    </label>
                    {/* cancel uploading banner image button */}
                    <label onClick={() => setBanner('')} className="position-absolute start-50 top-50 translate-middle btn btn-light btn-sm rounded-pill ms-5" >
                        <i className="fa-solid fa-xmark fa-lg"/>
                    </label>

                    <div className="position-absolute top-100 translate-middle" style={{'paddingLeft': '150px'}}>
                        <img className="rounded-circle"
                             style={{"width": "100px", height: '100px', "filter": "brightness(50%)"}}
                             src={`/images/${profile.username}.png`}/>
                    </div>
                    {/* upload new avatar button */}
                    <label className="position-absolute start-0 top-100 translate-middle btn btn-light btn-sm rounded-pill" style={{'marginLeft': '75px'}}>
                        <i className="fa-solid fa-camera fa-lg"/>
                        <input accept={'image/*'} onChange={e => {
                            imgFileToSrc(e.target.files[0])
                              .then(src => {
                                  setAvatar(src);
                              })
                        }} hidden type={'file'}/>
                    </label>
                </div>
            </div>
            <form className="p-2 list-group-item">
                {/*<div className="border border-secondary rounded-3 p-2 mb-3 ">*/}
                {/*    <label htmlFor="username">Username</label>*/}
                {/*    <input id="username" title="Username"*/}
                {/*           className="p-0 form-control border-0 p-2"*/}
                {/*           placeholder="Update username" value={userName}*/}
                {/*           onChange={(event) => setUserName(event.target.value)}*/}
                {/*    />*/}
                {/*</div>*/}
                {/*<div className="border border-secondary rounded-3 p-2 mb-3">*/}
                {/*    <label htmlFor="bio">Bio</label>*/}
                {/*    <textarea*/}
                {/*        id="bio"*/}
                {/*        className="p-0 form-control border-0 p-2"*/}
                {/*        placeholder="Update bio"*/}
                {/*        value={bio}*/}
                {/*        onChange={(event) => setBio(event.target.value)}*/}
                {/*    />*/}
                {/*</div>*/}

                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label htmlFor="location">Location</label>
                    <input id="location"
                           className="p-0 form-control border-0 p-2"
                           placeholder="Update Location"
                           value={location}
                           onChange={(event) => setLocation(event.target.value)}
                    />
                </div>

                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label htmlFor="phoneNum">Phone</label>
                    <input id="phoneNum"
                           className="p-0 form-control border-0 p-2"
                           placeholder="Update phone"
                           value={phone}
                           onChange={(event) => setPhone(event.target.value)}
                    />
                </div>

                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label htmlFor="Email">Email</label>
                    <input id="Email"
                           className="p-0 form-control border-0 p-2"
                           placeholder="Update phone"
                           value={email}
                           onChange={(event) => setEmail(event.target.value)}
                    />
                </div>

                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label htmlFor="date-of-birth">Date of birth</label>
                    <input id="date-of-birth"
                           className="p-0 form-control border-0 p-2"
                           style={{"colorScheme": "white"}}
                           type="date"
                           placeholder="Update birthday"
                           value={birthday}
                           onChange={(event) => setBirthday(event.target.value)}
                    />
                </div>

            </form>
        </div>
    );
};
export default EditProfile;
