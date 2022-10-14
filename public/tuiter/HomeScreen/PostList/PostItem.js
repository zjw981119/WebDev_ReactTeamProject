const PostItem = (post) => {
    return (`
        <li class="list-group-item">
        <div class="row">
            <!-- left-part avatar -->
            <div class="col-1">
                <img class="rounded-circle" src=${post.avatar} width="40px">
            </div>
            <!-- right-part post -->
            <div class="col-11">
                <!-- user -->
                <div class="d-flex justify-content-between ps-2">
                    <div>
                        <div>
                            <span>${post.userName}</span>
                            <span class="text-secondary">${post.handle}</span>
                            <span class="text-secondary">${' - ' + post.time}</span>
                        </div>
                    </div>
                    <div>
                        <span class="text-secondary">•••</span>
                    </div>
                </div>
                <div class="ps-2">
                    <span>${post.leftComment}</span>
                    <span class="text-primary">${post.linkComment}</span>
                    <span>${post.rightComment}</span>
                </div>

                <!-- article -->
                <div class="card mt-2">
                    <img src=${post.image} class="card-img-top rounded-top border border-1 border-secondary" alt="...">
                    ${post.title === '' && post.paragraph === '' && post.website === '' ? '' : ''}
                    <div id="card-body" class="card-body border border-1 border-secondary 
                    ${post.title === '' && post.paragraph === '' && post.website === '' ? 'visually-hidden' : ''}">
                        <div class="card-title" style="font-size: 16px">${post.title}</div>
                        <div class="card-text text-secondary">${post.paragraph}</div>
                        <div class="text-secondary mt-1">${post.website}</div>
                    </div>
                </div>

                <!-- status -->
                <div class="d-flex justify-content-between ps-3 pe-3 mt-3">
                    <!--  comment  -->
                    <div>
                        <i class="fa-regular fa-comment" style="color: grey"></i>
                        <span class="text-secondary ms-2">${post.comments}</span>
                    </div>

                    <!--  retweet  -->
                    <div>
                        <i class="fa-solid fa-retweet" style="color: grey"></i>
                        <span class="text-secondary ms-2">${post.retweets}</span>
                    </div>

                    <!--  heart  -->
                    <div>
                        <i class="fa-solid fa-heart" style="color: grey"></i>
                        <span class="text-secondary ms-2">${post.likes}</span>
                    </div>

                    <!--  upload  -->
                    <div>
                        <i class="fa-solid fa-arrow-up-from-bracket" style="color: grey"></i>
                    </div>
                </div>
            </div>
        </div>
    </li>
`);
}
export default PostItem;