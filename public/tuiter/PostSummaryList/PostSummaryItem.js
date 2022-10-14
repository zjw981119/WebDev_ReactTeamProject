const PostSummaryItem = (post) => {
    return (`
        <li class="list-group-item">
        <div class="row">
            <!-- left-part -->
            <div class="col-9">
                <div class="text-secondary">
                    ${post.topic}
                </div>
                <div>
                    <span>${post.userName}</span>
                    <span class="text-secondary">${' - ' + post.time}</span>
                </div>
                <div>
                    ${post.title}
                </div>
                <div class="text-secondary">
                    ${post.tweets === undefined? '' : post.tweets + ' Tweets'}
                </div>
            </div>
            <!-- right-part -->
            <div class="col-3">
                <img class="rounded float-md-end" src=${post.image} width="80px">
            </div>
        </div>
    </li>
`);
}
export default PostSummaryItem;