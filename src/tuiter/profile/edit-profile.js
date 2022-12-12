import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {updateProfile, updateUserData} from "../reducers/profile-reducer";
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
    const profile = useSelector(state => state.profile.profile);
    const [userName, setUserName] = useState(profile.username);
    const [bio, setBio] = useState(profile.bio);
    const [location, setLocation] = useState(profile.location);
    const [birthday, setBirthday] = useState(profile.dateOfBirth);
    const [phone, setPhone] = useState(profile.phone);
    const [banner, setBanner] = useState('');
    const [avatar, setAvatar] = useState('');
    const dispatch = useDispatch();
    const saveChangeHandler = () => {
        // dispatch(updateProfile({
        //     "username": userName,
        //     "bio": bio,
        //     "location": location,
        //     "website": website,
        //     "dateOfBirth": birthday
        // }))
        const data = {
            username: userName,
            biography: bio,
            location,
            phone,
            dateOfBirth: birthday,
            avatar,
            bannerPicture: banner
        }
        dispatch(updateUserData(profile._id, data))
    }

    if (!profile) {
        return <></>
    }
    return (
        <div className="ttr-edit-profile list-group">
            <div className="border border-secondary border-bottom-0 list-group-item" style={{"marginBottom": "60px"}}>
                <Link to="/tuiter/profile" className="btn btn-light rounded-pill fa-pull-left fw-bolder mt-2 mb-2 ms-2">
                    <i className="fa-solid fa-xmark"/>
                </Link>
                <button  className="btn btn-dark rounded-pill fa-pull-right fw-bolder mt-2 mb-2 me-2"
                      onClick={saveChangeHandler}>
                    Save
                </button>
                <h5 className="p-3 mb-0 fw-bolder">Edit profile</h5>
                <div className="position-relative">
                    <img className="w-100" src={profile.bannerPicture ? profile.bannerPicture : banner} height='250px' style={{"filter": "brightness(50%)"}}/>
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
                    <label htmlFor="website">Phone</label>
                    <input id="website"
                           className="p-0 form-control border-0 p-2"
                           placeholder="Update phone"
                           value={phone}
                           onChange={(event) => setPhone(event.target.value)}
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
                {/*<div className="border border-secondary rounded-3 p-2 mb-3">*/}
                {/*    <label htmlFor="email">Email</label>*/}
                {/*    <input id="email" placeholder="alan@cam.ac.uk"*/}
                {/*           className="p-0 form-control border-0"*/}
                {/*           type="email"/>*/}
                {/*</div>*/}
                {/*<div className="border border-secondary rounded-3 p-2 mb-3">*/}
                {/*    <label htmlFor="password">Reset password</label>*/}
                {/*    <input id="password"*/}
                {/*           className="p-0 form-control border-0"*/}
                {/*           type="password"/>*/}
                {/*</div>*/}
                {/*<div className="border border-secondary rounded-3 p-2 mb-3">*/}
                {/*    <label for="photo">Profile photo</label>*/}
                {/*    <input id="photo"*/}
                {/*           className="p-0 form-control border-0"*/}
                {/*           type="file"/>*/}
                {/*</div>*/}
                {/*<div className="border border-secondary rounded-3 p-2 mb-3">*/}
                {/*    <label for="header">Header image</label>*/}
                {/*    <input id="header"*/}
                {/*           className="p-0 form-control border-0"*/}
                {/*           type="file"/>*/}
                {/*</div>*/}
                {/*<div className="border border-secondary rounded-3 p-2 mb-3">*/}
                {/*    <label for="account">Select account</label>*/}
                {/*    <select*/}
                {/*        className="p-0 form-control border-0"*/}
                {/*        id="account">*/}
                {/*        <option>Personal account</option>*/}
                {/*        <option selected>Academic account</option>*/}
                {/*    </select>*/}
                {/*</div>*/}
                {/*<div className="border border-secondary rounded-3 p-2 mb-3">*/}
                {/*    Marital status*/}
                {/*    <input id="married"*/}
                {/*           type="radio" name="marital"/>*/}
                {/*    <label for="married">Married</label>*/}
                {/*    <input id="single" type="radio"*/}
                {/*           checked name="marital"/>*/}
                {/*    <label for="single">Single</label>*/}
                {/*</div>*/}
                {/*<div className="border border-secondary rounded-3 p-2 mb-3">*/}
                {/*    Topics of interest*/}
                {/*    <input id="space" type="checkbox"*/}
                {/*           checked name="topics"/>*/}
                {/*    <label for="space">Space</label>*/}
                {/*    <input id="energy" type="checkbox" checked*/}
                {/*           name="topics"/>*/}
                {/*    <label for="energy">Energy</label>*/}
                {/*    <input id="politics" type="checkbox"*/}
                {/*           name="topics"/>*/}
                {/*    <label for="politics">Politics</label>*/}
                {/*</div>*/}
            </form>
        </div>
    );
};
export default EditProfile;
