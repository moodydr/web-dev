
const NavigationSidebar = (active) => {

    return (` 
            <div class="list-group">
                <a class="list-group-item ${active === 'twitter' ? 'active' : ''}" href="#">
                    <i class="fab fa-twitter"></i></a>
                <a id="home" class="list-group-item ${active === 'home' ? 'active' : ''}" href="../HomeScreen/index.html">
                    <i class="fas fa-home"></i>
                    <span class="d-none d-xl-inline">Home</span>
                </a>
                <a id="explore" class="list-group-item ${active === 'explore' ? 'active' : ''}" href="../ExploreScreen/index.html">
                    <i class="fas fa-hashtag"></i>
                    <span class="d-none d-xl-inline">Explore</span></a>
                <a id="notifications" class="list-group-item ${active === 'notifications' ? 'active' : ''}" onclick="return NavigationSidebar('notifications')">
                    <i class="fas fa-bell"></i>
                    <span class="d-none d-xl-inline">Notifications</span></a>
                <a id="messages" class="list-group-item ${active === 'messages' ? 'active' : ''}" href="#">
                    <i class="fas fa-envelope"></i>
                    <span class="d-none d-xl-inline">Messages</span></a>
                <a id="bookmarks" class="list-group-item ${active === 'bookmarks' ? 'active' : ''}"  href="#">
                    <i class="fas fa-bookmark"></i>
                    <span class="d-none d-xl-inline">Bookmarks</span></a>
                <a id ="lists" class="list-group-item ${active === 'lists' ? 'active' : ''}" href="#">
                    <i class="fas fa-list"></i>
                    <span class="d-none d-xl-inline">Lists</span></a>
                <a id="profile" class="list-group-item ${active === 'profile' ? 'active' : ''}" href="#">
                    <i class="fas fa-user"></i>
                    <span class="d-none d-xl-inline">Profile</span></a>
                <a id="more" class="list-group-item ${active === 'more' ? 'active' : ''}" href="#">
                    <i class="fas fa-ellipsis-h"></i>
                    <span class="d-none d-xl-inline">More</span></a>   
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}

//originally from geeks for geeks
$(document).ready(function() {
    $('a').click(function() {
        $('a.list-group-item.active').removeClass("active");
        $(this).addClass("active");
    });
});


export default NavigationSidebar;
