import "./rightbar.css"
import {Users} from "../../dummyData.js"
import Online from "../online/Online.jsx"

export default function Rightbar({profile}) {
    const HomeRightbar=()=>{
        return(
            <div>
                <div className="birthdayContiner">
                    <img src="/Assets/gift.png" alt="" className="birhdayImage" />
                    <span className="birthdayText"><b>fasiledes</b> and <b>three othe firends</b> have birthday</span>
                </div>
                <img src="/Assets/ad.png" alt="" className="rightBarAdd" />
                <h4 className="rightBarTitle"> onlineFirends</h4>
                <ul className="onlineFirendList">
                    {Users.map(u=>(
                        <Online key={u.id} user={u}/>
                    ))}
                </ul>
            </div>
        )
    }
    const ProfileRigtBar = ()=>{
        return(
            <div>
                <h4 className="rightBraTitle"> user information title</h4>
                <div className="rightBarInfo">
                    <div className="rightBarInfoItem">
                        <span className="RightInfoKey">city:</span>
                        <span className="RightInfoValue">debire birihan</span>
                    </div>
                    <div className="rightBarInfoItem">
                        <span className="RightInfoKey">from:</span>
                        <span className="RightInfoValue">debire birihan</span>
                    </div>
                    <div className="rightBarInfoItem">
                        <span className="RightInfoKey">Relationship:</span>
                        <span className="RightInfoValue">single</span>
                    </div>

                </div>
                <h4 className="rightBraTitle"> user firends</h4>
                <div className="rightBarFollowings">
                    <div className="rightBarFollowing">
                        <img src="/Assets/person/1.jpeg" alt="" className="rightBarFollowingImage" />
                        <span className="rightBarFollowingName">Hlina sisay</span>
                    </div>
                    <div className="rightBarFollowing">
                        <img src="/Assets/person/2.jpeg" alt="" className="rightBarFollowingImage" />
                        <span className="rightBarFollowingName">Hlina sisay</span>
                    </div>
                    <div className="rightBarFollowing">
                        <img src="/Assets/person/3.jpeg" alt="" className="rightBarFollowingImage" />
                        <span className="rightBarFollowingName">Hlina sisay</span>
                    </div>
                    <div className="rightBarFollowing">
                        <img src="/Assets/person/4.jpeg" alt="" className="rightBarFollowingImage" />
                        <span className="rightBarFollowingName">Hlina sisay</span>
                    </div>
                    <div className="rightBarFollowing">
                        <img src="/Assets/person/5.jpeg" alt="" className="rightBarFollowingImage" />
                        <span className="rightBarFollowingName">Hlina sisay</span>
                    </div>
                    <div className="rightBarFollowing">
                        <img src="/Assets/person/6.jpeg" alt="" className="rightBarFollowingImage" />
                        <span className="rightBarFollowingName">Hlina sisay</span>
                    </div>
                    <div className="rightBarFollowing">
                        <img src="/Assets/person/7.jpeg" alt="" className="rightBarFollowingImage" />
                        <span className="rightBarFollowingName">Hlina sisay</span>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="rightbar">
            <div className="rightBarWarper">
                {profile ? <ProfileRigtBar/> :<HomeRightbar/>}

            </div>
        </div>
    )
}
