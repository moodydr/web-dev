const WhoToFollowListItem = (who) => {
    return(`
          <li class="list-group-item">
            <div class="row">
                <div class="col-2">
                    <img class="wd-small-image" src="${who.avatarIcon}">
                </div>
                <div class="col-7">
                    <span class="fw-bold wd-white">${who.userName} </span><i class="fas fa-check-circle"></i>
                    <br><span class="wd-light-font">@${who.handle}</span>
                </div>
                <div class="col-3 ps-0 pe-1">
                    <button class="btn btn-primary mt-1">Follow</button>
                </div>
            </div>
        </li>
    `);
}
export default WhoToFollowListItem;
