import React from 'react';

const PostSummaryItem = (
    {
        post = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "../../../images/react-blue.png"
        }
    }) => {
    return(
        <>
          <li className="list-group-item">
                    <div className="row">
                        <div className="col-9">
                            <span className="wd-light-font">{post.topic}</span>
                            <br/><span className="fw-bold">{post.userName}</span><i className="fas fa-check-circle wd-white"></i><span className="wd-light-font">{post.time}</span>
                            <br/><span className="fw-bold wd-dark-font wd-white">{post.title}</span>
                        </div>
                        <div className="col-3 my-auto">
                            <img className="wd-square-image float-end" alt="" src={post.image}/>
                        </div>
                    </div>
           </li>
            </>
    );
}
export default PostSummaryItem;