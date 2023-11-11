import Closefriend from "../closefriends/Closefriend"
import "./sidebar.css"
import {Bookmark, HelpOutline, RssFeed, School, WorkOutline,Event, PlayCircleFilledOutlined, Group, Chat} from "@mui/icons-material"
import { Users } from "../../dummyData"

export default function Sidebar() {
    return (
        <div className="sidebar">
           <div className="sidebarRaper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <RssFeed className="sidebarIcon" />
                    <span className="sidebarListItemText">Feed</span>
                </li>
                <li className="sidebarListItem">
                    <Chat className="sidebarIcon" />
                    <span className="sidebarListItemText">Chates</span>
                </li>
                <li className="sidebarListItem">
                    <PlayCircleFilledOutlined className="sidebarIcon" />
                    <span className="sidebarListItemText">Video</span>
                </li>
                <li className="sidebarListItem">
                    <Group className="sidebarIcon" />
                    <span className="sidebarListItemText">Group</span>
                </li>
                <li className="sidebarListItem">
                    <Bookmark className="sidebarIcon" />
                    <span className="sidebarListItemText">Bookmark</span>
                </li>
                <li className="sidebarListItem">
                    <HelpOutline className="sidebarIcon" />
                    <span className="sidebarListItemText">Quetion</span>
                </li>
                <li className="sidebarListItem">
                    <WorkOutline className="sidebarIcon" />
                    <span className="sidebarListItemText">Jobs</span>
                </li>
                <li className="sidebarListItem">
                    <Event className="sidebarIcon" />
                    <span className="sidebarListItemText">Eventes</span>
                </li>
                <li className="sidebarListItem">
                    <School className="sidebarIcon" />
                    <span className="sidebarListItemText">Courses</span>
                </li>
            </ul>
            <button className="sidebarButton">Show more</button>
            <hr className="sidebarHr"/>
            <ul className="sidebarFriendList">
                {Users.map((u) => (
                    <Closefriend key={u.id} user={u}/>
                ))}
            </ul>
           </div>
        </div>
    )
}
