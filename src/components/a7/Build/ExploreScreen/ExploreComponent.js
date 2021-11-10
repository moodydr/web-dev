import React from 'react';
import PostSummaryList from "../PostSummaryList/index";

const ExploreComponent = () => {

    return(
              <>
            <div className="row">

             <div className="ps-5 col-10 form-group wd-has-search">
        <span className="fas fa-search form-control-feedback mt-2"></span>
        <input className="form-control wd-input ps-5 pt-2 pb-2 mb-2" placeholder="Search Twitter"/>
    </div>
    <div className="col-2 pt-1">
        <i className="fas fa-cog fa-2x float-end me-3"></i>
    </div>
           </div>
            <ul className="nav mb-2 nav-tabs">

                <li className="nav-item">
            <a className="nav-link active" href="for-you.html">For you</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="trending.html">Trending</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="news.html">News</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="sports.html">Sports</a>
        </li>
        <li className="nav-item d-none d-md-block">
            <a className="nav-link" href="entertainment.html">Entertainment</a>
        </li>
           </ul>
           

           <div className="row mb-2">
                <div className="wd-image">
                    <img src="../../images/starship.jpg" alt="" className="img-fluid"/>
                    <div className="wd-image-text"><span className="fs-3 fw-bold wd-white">SpaceX's Starship</span></div>
                </div>      
             </div>
           {PostSummaryList()}
           </>
    );
}
export default ExploreComponent;

