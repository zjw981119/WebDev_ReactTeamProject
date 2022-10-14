import NavigationSidebar from "./NavigationSidebar/index.js";

function exploreComponent() {
    $('#wd-navigation').append(`
       <h2>Explore</h2>
      <div class="row mt-2">
        <!--  Navigation Sidebar   -->
       <div class="col-2 col-md-2 col-lg-1 col-xl-2">
        ${NavigationSidebar('')}
       </div>
       
       <div class="col-10 col-lg-7 col-xl-6">
       </div>
       
       <!--  Who to follow list   -->
       <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
       </div>
       
      </div>
   `);
}

$(exploreComponent);
