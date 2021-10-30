import React from 'react';

const PostItem = ({

    post = {
        "avatarIcon": "../../images/musk.jpg", "userName": "Elon Musk ", "handle": " @elonmusk", "time": " · 23h",  "image": "../../images/inspiration.jpeg",
        "tweet": "Amazing show about @Inspiration4x mission", "title": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
        "text": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space...",
        "link": "🔗 netflix.com", "comments": "4.2K", "retweets": "3.5K", "likes": "37.5K"
    }
                  }) => {
    if (post.title !== ""){
        return(
      <>
           <div className="col-1">
           <img className="wd-small-image" alt src={post.avatarIcon}/>
</div>
           <div className="col-11 ps-4">
            <span className="fw-bold wd-white">{post.userName}</span><i className="fas fa-check-circle wd-white"></i><span className="wd-light-font">{post.handle}{post.time}</span>
            <br/><span className="wd-dark-font wd-white">{post.tweet}</span>
            <div className="row mt-1">
                <div className="wd-image ">
                    <img src={post.image} alt className="img-fluid wd-home-image"/>
                </div>
            </div>
            <div className="row mb-2 g-0 px-2 py-2 wd-home-text">
                <div className="">
                    <span className="wd-dark-font wd-white">{post.title}</span><br/>
                        <span className="wd-dark-font">{post.text}</span>
                        <br/><span className="wd-dark-font">{post.link}</span>
                    </div>
             </div>
             <div className="row">
                 <div className="wd-dark-font col-12 d-flex justify-content-between">
                    <a className=" wd-stats wd-icon" href="#0"><i className="far fa-comment wd-icon wd-icon-set pe-3"></i><span
                            className="wd-icon-set">{post.comments}</span></a>
                    <a className=" wd-stats wd-icon" href="#0" ><i className=" fas fa-retweet wd-icon wd-icon-set pe-3"></i><span
                            className="wd-icon-set">{post.retweets}</span></a>
                    <a className=" wd-stats wd-icon" href="#0"><i className="far fa-heart wd-icon wd-icon-set pe-3"></i><span
                            className="wd-icon-set">{post.likes}</span></a>
                    <a className=" wd-stats wd-icon" href="#0"><i className="fas fa-external-link-alt wd-icon wd-icon-set pe-5"></i></a>
                </div>
              </div>
            </div>

          <div className="row wd-b-bottom g-0 px-2 py-2 mb-2"></div>

      </>
    );

    } else {

    }
    return(

        <>

           <div className="col-1">
           <img className="wd-small-image" alt src={post.avatarIcon}/>
</div>
           <div className="col-11 ps-4">
            <span className="fw-bold wd-white">{post.userName}</span><i className="fas fa-check-circle wd-white"></i><span className="wd-light-font">{post.handle}{post.time}</span>
            <br/><span className="wd-dark-font wd-white">{post.tweet}</span>
            <div className="row mt-1 mb-2">
                <div className="wd-image">
                    <img src={post.image} alt className="img-fluid wd-home-image-alt"/>
                </div>
            </div>


             <div className="row">
                 <div className="wd-dark-font col-12 d-flex justify-content-between">
                    <a className="wd-stats wd-icon" href="#0"><i className="pe-3 far fa-comment wd-icon wd-icon-set"></i><span
                            className="wd-icon-set">{post.comments}</span></a>
                    <a className="wd-stats wd-icon" href="#0" ><i className="pe-3 fas fa-retweet wd-icon wd-icon-set"></i><span
                            className="wd-icon-set">{post.retweets}</span></a>
                    <a className="wd-stats wd-icon" href="#0"><i className="pe-3 far fa-heart wd-icon wd-icon-set"></i><span
                            className="wd-icon-set">{post.likes}</span></a>
                    <a className="wd-stats wd-icon" href="#0"><i className="fas fa-external-link-alt wd-icon wd-icon-set pe-5"></i></a>
                </div>
              </div>
              </div>
                   <div className="row wd-b-bottom g-0 px-2 py-2"></div>
        </>
    );

}
export default PostItem;