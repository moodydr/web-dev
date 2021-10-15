const PostItem = (post) => {
    if (post.title != ""){
        return(`
      
           <div class="col-1">
           <img class="wd-small-image" src="${post.avatarIcon}">
</div>
           <div class="col-11 ps-4">
            <span class="fw-bold wd-white">${post.userName}</span><i class="fas fa-check-circle wd-white"></i><span class="wd-light-font">${post.handle}${post.time}</span>
            <br><span class="wd-dark-font wd-white">${post.tweet}</span>
            <div class="row mt-1">
                <div class="wd-image ">
                    <img src="${post.image}" class="img-fluid wd-home-image">
                </div>
            </div>
            <div class="row mb-2 g-0 px-2 py-2 wd-home-text">
                <div class="">
                    <span class="wd-dark-font wd-white">${post.title}</span><br>
                        <span class="wd-dark-font">${post.text}</span>
                        <br><span class="wd-dark-font">${post.link}</span>
                    </div> 
             </div>
             <div class="row">
                 <div class="wd-dark-font col-12 d-flex justify-content-between">
                    <a class=" wd-stats wd-icon" href="#"><i class="far fa-comment wd-icon wd-icon-set pe-3"></i><span
                            class="wd-icon-set">${post.comments}</span></a>
                    <a class=" wd-stats wd-icon" href="#" ><i class=" fas fa-retweet wd-icon wd-icon-set pe-3"></i><span
                            class="wd-icon-set">${post.retweets}</span></a>
                    <a class=" wd-stats wd-icon" href="#"><i class="far fa-heart wd-icon wd-icon-set pe-3"></i><span
                            class="wd-icon-set">${post.likes}</span></a>
                    <a class=" wd-stats wd-icon" href="#"><i class="fas fa-external-link-alt wd-icon wd-icon-set pe-5"></i></a>
                </div> 
              </div> 
            </div>
   
          <div class="row wd-b-bottom g-0 px-2 py-2 mb-2"></div>

    `);

    }
    return(`
       
           <div class="col-1">
           <img class="wd-small-image" src="${post.avatarIcon}">
</div>
           <div class="col-11 ps-4">
            <span class="fw-bold wd-white">${post.userName}</span><i class="fas fa-check-circle wd-white"></i><span class="wd-light-font">${post.handle}${post.time}</span>
            <br><span class="wd-dark-font wd-white">${post.tweet}</span>
            <div class="row mt-1 mb-2">
                <div class="wd-image">
                    <img src="${post.image}" class="img-fluid wd-home-image-alt">
                </div>
            </div>
      
         
             <div class="row">
                 <div class="wd-dark-font col-12 d-flex justify-content-between">
                    <a class="wd-stats wd-icon" href="#"><i class="pe-3 far fa-comment wd-icon wd-icon-set"></i><span
                            class="wd-icon-set">${post.comments}</span></a>
                    <a class="wd-stats wd-icon" href="#" ><i class="pe-3 fas fa-retweet wd-icon wd-icon-set"></i><span
                            class="wd-icon-set">${post.retweets}</span></a>
                    <a class="wd-stats wd-icon" href="#"><i class="pe-3 far fa-heart wd-icon wd-icon-set"></i><span
                            class="wd-icon-set">${post.likes}</span></a>
                    <a class="wd-stats wd-icon" href="#"><i class="fas fa-external-link-alt wd-icon wd-icon-set pe-5"></i></a>
                </div> 
              </div>    
              </div> 
                   <div class="row wd-b-bottom g-0 px-2 py-2"></div>
    `);
}
export default PostItem;