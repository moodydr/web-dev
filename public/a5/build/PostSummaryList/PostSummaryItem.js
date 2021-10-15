const PostSummaryItem = (post) => {
    return(`
          <li class="list-group-item">
                    <div class="row">
                        <div class="col-9">
                            <span class="wd-light-font">${post.topic}</span>
                            <br><span class="fw-bold">${post.userName}</span><i class="fas fa-check-circle wd-white"></i><span class="wd-light-font">${post.time}</span>
                            <br><span class="fw-bold wd-dark-font wd-white">${post.title}</span>
                        </div>
                        <div class="col-3 my-auto">
                            <img class="wd-square-image float-end" src="${post.image}">
                        </div>
                    </div>
           </li>
    `);
}
export default PostSummaryItem;