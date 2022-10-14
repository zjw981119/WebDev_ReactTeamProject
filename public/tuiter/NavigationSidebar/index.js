const NavigationSidebar = () => {
    return(`
   <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fa-solid fa-t"></i>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-2">
                    <i class="fa-solid fa-house me-2"></i>
                </div>
                <div class="col-10 d-none d-xl-block">
                    <span>Home</span>
                </div>
            </div>
        </a>

        <a href="#"
           class="list-group-item list-group-item-action active">
            <div class="row">
                <div class="col-2">
                    <i class="fa-solid fa-hashtag me-2"></i>
                </div>
                <div class="col-10 d-none d-xl-block">
                    <span>Explore</span>
                </div>
            </div>
        </a>

        <a href="#" class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-2">
                    <i class="fa-regular fa-bell me-2"></i>
                </div>
                <div class="col-10 d-none d-xl-block">
                    <span>Notifications</span>
                </div>
            </div>
        </a>

        <a href="#"
           class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-2">
                    <i class="fa-regular fa-envelope me-2"></i>
                </div>
                <div class="col-10 d-none d-xl-block">
                    <span >Messages</span>
                </div>
            </div>
        </a>

        <a href="#"
           class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-2">
                    <i class="fa-regular fa-bookmark me-2"></i>
                </div>
                <div class="col-10 d-none d-xl-block">
                    <span>Bookmark</span>
                </div>
            </div>
        </a>
        <a href="#"
           class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-2">
                    <i class="fa-regular fa-rectangle-list me-2"></i>
                </div>
                <div class="col-10 d-none d-xl-block">
                    <span>Lists</span>
                </div>
            </div>
        </a>

        <a href="#"
           class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-2">
                    <i class="fa-regular fa-user me-2"></i>
                </div>
                <div class="col-10 d-none d-xl-block">
                    <span>Profile</span>
                </div>
            </div>
        </a>

        <a href="#"
           class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-2">
                    <i class="fa-solid fa-ellipsis me-2"></i>
                </div>
                <div class="col-10 d-none d-xl-block">
                    <span>More</span>
                </div>
            </div>
        </a>

    </div>
    <button class="btn btn-primary w-100 mt-2 rounded-pill">
        Tuit
    </button>
 `);
}
export default NavigationSidebar;
