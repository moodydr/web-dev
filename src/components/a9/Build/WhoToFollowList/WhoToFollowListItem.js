import React from "react";
//import service from '../../../../services/who-service';

const WhoToFollowListItem = (
    {
        who = {
            avatarIcon: '../../../images/nasa.png',
            userName: 'NASA',
            handle: 'NASA',
        }
    }
    ) => {
    //const [who, setWho] = useState([]);
    // useEffect(() =>
    //     service.findAllWho()
    //         .then(who => setWho(who)));

    return(
        <>
          <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="wd-small-image" alt="" src={who.avatarIcon}/>
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
