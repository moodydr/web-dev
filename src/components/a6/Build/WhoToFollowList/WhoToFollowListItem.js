import React from "react";

const WhoToFollowListItem = (
    {
        who = {
            avatarIcon: '../../../images/nasa.png',
            userName: 'NASA',
            handle: 'NASA',
        }
    }) => {
    return(
        <>
          <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="wd-small-image" src={who.avatarIcon}/>
                </div>
                <div className="col-7">
                    <span className="fw-bold wd-white">{who.userName} </span><i className="fas fa-check-circle"></i>
                    <br/><span className="wd-light-font">@{who.handle}</span>
                </div>
                <div className="col-3 ps-0 pe-1">
                    <button className="btn btn-primary mt-1">Follow</button>
                </div>
            </div>
        </li>
        </>
    );
}
export default WhoToFollowListItem;
