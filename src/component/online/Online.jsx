import "./online.css"

export default function Online({user}) {
    return (
        <div>
                    <li className="rightBarFirend">
                        <div className="rightBarProfileImageContiner">
                            <img src={user.profilePicture} alt="" className="righibarprofileimage" />
                            <span className="rightBarOnline"></span>
                        </div>
                        <span className="rightBrUserName"> {user.username} </span>
                    </li>
        </div>
    )
}
