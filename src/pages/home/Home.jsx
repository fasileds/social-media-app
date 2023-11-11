import React from 'react'
import Toupbar from '../../component/topbar/Toupbar'
import Sidebar from '../../component/sidebar/Sidebar'
import Feed from '../../component/feed/Feed'
import Rightbar from '../../component/rightbar/Rightbar'
import "./home.css"
export default function Home() {
    return (
        <div>
          <Toupbar/>
          <div className="homeConteiner">
          <Sidebar/>
          <Feed/>
          <Rightbar/>
          </div>


        </div>
    )
}
