import React, {useEffect, useState} from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
//import {useSelector} from "react-redux";
import service from '../../../../services/who-service';

//const selectAllWho = (state) => state.who;

const WhoToFollowList = () => {
    //const who = useSelector(selectAllWho);
    const [who, setWho] = useState([]);
    useEffect(() =>
        service.findAllWho()
            .then(who => setWho(who)));
    return (
        <ul className="list-group">
            <li className="list-group-item fw-bold">
                Who to follow
            </li>
            {
                who.map(who => {
                    return(
                        <WhoToFollowListItem who={who}/>
                    );
                })
            }
        </ul>
    );
}

export default WhoToFollowList;