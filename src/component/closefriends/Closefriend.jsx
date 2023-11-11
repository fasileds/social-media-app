import "./closeFRined.css"

export default function Closefriend({user}) {
    return (
        <div>
            <li className="sidebarFriend">
                    <img src={user.profilePicture} alt="" className="sidebarFirendImage" />
                    <span className="sidebarFriendNme">{user.username}</span>
                </li>
        </div>
    )
}
