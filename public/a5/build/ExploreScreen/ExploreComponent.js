import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                       <!-- search field and cog -->
             <div class="ps-5 col-10 form-group wd-has-search">
        <span class="fas fa-search form-control-feedback mt-2"></span>
        <input class="form-control wd-input ps-5 pt-2 pb-2 mb-2" placeholder="Search Twitter">
    </div>
    <div class="col-2 pt-1">
        <i class="fas fa-cog fa-2x float-end me-3"></i>
    </div>
           </div>
            <ul class="nav mb-2 nav-tabs">
                      <!-- tabs -->
                <li class="nav-item">
            <a class="nav-link active" href="for-you.html">For you</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="trending.html">Trending</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="news.html">News</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="sports.html">Sports</a>
        </li>
        <li class="nav-item d-none d-md-block">
            <a class="nav-link" href="entertainment.html">Entertainment</a>
        </li>
           </ul>
           
           <!-- image with overlaid text -->
           <div class="row mb-2">
                <div class="wd-image">
                    <img src="../../images/starship.jpg" class="img-fluid">
                    <div class="wd-image-text"><span class="fs-3 fw-bold wd-white">SpaceX's Starship</span></div>
                </div>      
             </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
