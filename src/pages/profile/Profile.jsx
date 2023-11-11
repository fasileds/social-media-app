import "./profile.css"
import Toupbar from '../../component/topbar/Toupbar'
import Sidebar from '../../component/sidebar/Sidebar'
import Feed from '../../component/feed/Feed'
import Rightbar from '../../component/rightbar/Rightbar'
export default function Profile() {
    return (
        <div>
          <Toupbar/>
          <div className="profile">
          <Sidebar/>
          <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                <img src="/Assets/post/3.jpeg" alt="" className="profileCoverImge" />
                <img src="/Assets/person/1.jpeg" alt="" className="profileUserImge" />
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">fasiledes shimelis</h4>
                    <span className="profileInfoDesc">hello may firends</span>
                </div>
                
            </div>
          <div className="profileRightBottom">
          <Feed/>
          <Rightbar profile />
          </div>
        </div>
          </div>
        </div>
    )
}
