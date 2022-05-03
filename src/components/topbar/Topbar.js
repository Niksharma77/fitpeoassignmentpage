import "./topbar.css"
import { Search, Notifications, Group, Map } from "@mui/icons-material"
export default function Topbar() {
  return (
   <div className="topbarcontainer">
       <div className="topbarleft">
           <span className="logo">Fitpeo Inc</span>
       </div>
       <div className="topbarcenter">
           <div className="searchbar">
        <Search className="searchicon"/>
        <input placeholder=" search for application pages" className="text"/>
           </div>
       </div>
       <div className="topbarright">
           <div className="topbaricon">
               <div className="topbariconitem">
                   <Map/>

               </div>
               <div className="topbariconitem">
                   <Group/>
                   <span className="topbariconbadge">1</span>

               </div>
               <div className="topbariconitem">
                   <Notifications/>
                   <span className="topbariconbadge">2</span>

               </div>
               <img src="https://wallpapercave.com/dwp1x/wp9635141.jpg" alt="" className="topbarimg"/>
           </div>
          
       </div>
   </div>
  )
}
