import React from 'react'
import './css/SidebarOptions.css'
import { Add } from "@material-ui/icons";
function SidebarOptions() {
  return (
    <div className='siebarOptions'>
      <div className="sidebarOption">
        <img
          src="https://cdn.pixabay.com/photo/2018/02/10/19/19/goal-3144351_640.jpg"
          alt=""
        />
        <p>History</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://img.freepik.com/free-photo/business-people-shaking-hands-together_53876-30568.jpg"
          alt=""
        />

        <p>Business</p>
      </div>
      <div className="sidebarOption">
        <img
          src="https://cdn.pixabay.com/photo/2019/01/05/10/01/knowledge-3914811_640.jpg"
          alt=""
        />
        <p>Psychology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://cdn.pixabay.com/photo/2015/08/25/03/50/background-906135_640.jpg"
          alt=""
        />
        <p>Cooking</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://cdn.pixabay.com/photo/2016/03/16/23/55/flea-market-1262036_640.jpg"
          alt=""
        />
        <p>Music</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://cdn.pixabay.com/photo/2017/07/17/23/51/wormhole-2514312_640.jpg"
          alt=""
        />
        <p>Science</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://cdn.pixabay.com/photo/2020/05/23/17/52/strawberries-5210753_640.jpg"
          alt=""
        />
        <p>Health</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://cdn.pixabay.com/photo/2014/10/22/18/13/donald-duck-498512_640.jpg"
          alt=""
        />
        <p>Movies</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://cdn.pixabay.com/photo/2017/04/23/19/30/earth-2254769_640.jpg"
          alt=""
        />
        <p>Technology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://cdn.pixabay.com/photo/2018/01/18/20/43/literature-3091212_640.jpg"
          alt=""
        />
        <p>Education</p>
      </div>
      <div className="sidebarOption">
        <Add />
        <p className="text">Discover Spaces</p>
      </div>
    </div>
  )
}

export default SidebarOptions
