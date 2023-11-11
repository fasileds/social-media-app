import "./topbar.css"
import {Search,Person,Chat,Notifications} from "@mui/icons-material"

export default function Toupbar() {
    return (
        <div className="topbar-cointener">
            <div className="topbarLeft">
                <span className="logo">fasilsocial</span>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                    <Search className="searchIcon"/>
                    <input type="text" className="searchInput" placeholder="search for friend or image" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="tobarLink">
                    <span className="topbarLink">Home</span>
                    <span className="topbarLink">TimeLine</span>
                </div>
            </div>
            <div className="topbarIcons">
                <div className="topbarItemIcon">
                    <Person/>
                    <span className="topbarIconBage">1</span>
                </div>
                <div className="topbarItemIcon">
                    <Chat/>
                    <span className="topbarIconBage">1</span>
                </div>
                <div className="topbarItemIcon">
                    <Notifications/>
                    <span className="topbarIconBage">1</span>
                </div>
                <img src="/Assets/person/1.jpeg" alt="" className="topbarImage" />
            </div>
        </div>
    )
}
