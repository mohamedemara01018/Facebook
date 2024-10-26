import { Link } from "react-router-dom"
import { post_footer_data } from "../../../homeData"



function Post_footer({ id }: { id: number }) {
    return (
        <div className="post-footer">
            {
                post_footer_data().map((item) => {
                    return <div key={item.id}>
                        <Link to={`/post/${id}`} style={{color:'black'}}><p>{item.data}</p></Link>
                        <i className={item.icon}></i>
                    </div>
                })
            }
        </div>
    )
}

export default Post_footer