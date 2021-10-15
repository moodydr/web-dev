import PostItem from "./PostItem.js";
import post from "./post.js";
const PostList = () => {
    return (`
            <div class="row wd-lr-border ms-1 me-1 pt-2">
                ${
        post.map(post => {
            return(PostItem(post));
        }).join('')
    }

            </div>
`); }
export default PostList;