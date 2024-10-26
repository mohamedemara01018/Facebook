import { Link } from "react-router-dom"
type postType = {
    id: number,
    body: string,
    author: {
        name: string,
        profile_image: string
    },
    comments_count: number,
    image: string,
    created_at: string
}
function Post_who({ post }: { post: postType }) {
    return (
        <div className="post-who">
            <Link to={'/الصفحة%20الرئسية'}><i className="fa-solid fa-x"></i></Link>
            {post.author && <p dir="rtl">{`منشور ${post.author.name}`}</p>}
            <div></div>
        </div>
    )
}

export default Post_who