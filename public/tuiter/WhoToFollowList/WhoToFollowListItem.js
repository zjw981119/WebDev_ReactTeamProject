const FollowItem = (user) => {
    return (`
        <li class="list-group-item">
            <div class="row">
                <div class="col-9">
                    <div class="d-inline-flex align-items-center">
                        <div class="pt-1">
                            <img class="rounded-circle" src=${user.avatarIcon} width="35px" height="35px">
                        </div>
                        <div class="ms-3 text-white">
                            <div class="fw-bolder">
                                <span>${user.userName}</span>
                            </div>
                            <div>
                                <span>${'@' + user.handle}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-3 d-flex align-items-center">
                    <button class="btn btn-primary btn-sm rounded-pill">
                        <span>Follow</span>
                    </button>
                </div>
            </div>
        </li>
`);
}
export default FollowItem;