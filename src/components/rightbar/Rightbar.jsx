import "./rightbar.css"
import cartoon from "../../assets/cartoon.png"
import spiral from "../../assets/spiral.png"
import advertise from "../../assets/advertise.jpg"


import { BarChart, } from "@mui/icons-material"
export default function Rightbar() {
  return (
    
    <div className="container">
      <div className="topcontainer">
        <div className="welcomebox">
        <div className="welcome">
          <h1>WELCOME TO FitPeo !</h1>
          <p>we are the leading service providers for frontend and backend development.</p>
          <button className="more">MORE</button>
          </div>
          <div className="cartoon"> <img  src={cartoon} alt="" /></div>
        
        </div>
        <div className="advertisement">
          <img src={advertise} alt="" width={350} height={220}/>
        </div>
      </div>
      <div className="bottomcontainer">
        <div className="activeuser">
          <div className="activetext">
          <h3>Total Active Users</h3> 
          <p><b>18,765</b></p>
          </div>
         
          <div className="barchart">
            <BarChart/>
          </div>

        </div>
        <div className="totalinstall">
        <div className="activetext">
          <h3>Total installation</h3> 
          <p><b>4,876</b></p>
          </div>
         
          <div className="barchart1">
            <BarChart/>
          </div>
        </div>
        <div className="totaldownload">
        
        <div className="activetext">
          <h3>Total downloads</h3> 
          <p><b>678</b></p>
          </div>
         
          <div className="barchart2">
            <BarChart/>
          </div>
          </div>
      </div>
      <div className="lastbottom">
        <div className="cdownload"><h3>Current Download</h3>
        <img src={spiral} alt="" />
        </div>
        <div className="areadownload">
          <h3>Area Installed</h3 ></div>

      </div>
    </div>
  )
}
