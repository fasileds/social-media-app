import Post from "../post/Post"
import Share from "../share/Share"
import "./ffeed.css"
import {Posts} from "../../dummyData.js"
export default function Feed() {
    return (
        <div className="feed">
            <div className="feedraper">
                <Share/>
                {Posts.map(p=>(
                    <Post key={p.id} post={p}/>
                ))}
                
            </div>
        </div>
    )
}
