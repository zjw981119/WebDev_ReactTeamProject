import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
           <!-- Search input -->
           <div class="row pt-2">
                <div class="col-11">
                    <div class="position-relative">
                        <i class="fa-solid fa-magnifying-glass ps-3 pt-2 position-absolute" style="color: gray"></i>
                        <input class="form-control rounded-pill ps-5 border border-secondary" placeholder="Search Tuiter">
                    </div>
                </div>
                <div class="col-1 d-flex align-items-center">
                    <i class="fa fa-cog me-1" style="color: deepskyblue"></i>
                </div>
           </div>
           <!-- Navigation tabs -->
            <ul class="nav nav-pills nav-justified mt-2 pb-2">
                <li class="nav-item">
                    <a class="nav-link active" href="#">
                        <span>For you</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <span>Trending</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <span>News</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <span>Sports</span>
                    </a>
                </li>
                <li class="nav-item d-none d-lg-block">
                    <a class="nav-link" href="#">
                        <span>Entertainment</span>
                    </a>
                </li>
            </ul>
           <!-- image container -->
            <div class="position-relative">
                <img class="border border-secondary" src="/public/images/starship.webp" width="100%" >
                <!-- image text -->
                <div class="position-absolute bottom-0 start-0 text-light mb-2">
                    <div class="ps-3 fs-2">
                        SpaceX's Starship
                    </div>
                </div>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
