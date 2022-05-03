import "./sidebar.css"
import {GetApp, CreditCardOff, AccountBalance, Tour, School, AccountCircle, ManageAccounts,} from "@mui/icons-material"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebartop">
        <img src="https://wallpapercave.com/dwp1x/wp9635141.jpg" alt="" className="topbarimg1"/>
       <div className="sidebarname"><h3>WELCOME!</h3>
        <p>admin</p>
        </div> 
        </div>
        <div className="categories">
          <>
          <div className="general">PARTENERS</div>
          <div className="app" >
            <GetApp className="genraliocon"/> 
            <span className="generaltext">App</span>
          </div>
          <div className="app">
            <CreditCardOff className="genraliocon"/>
            <span className="generaltext">CRED</span>
          </div>
          <div className="app" >
            <AccountBalance className="genraliocon"/>  
            <span className="generaltext">ICICI</span>
          </div>
          <div className="app" >
            <Tour className="genraliocon"/>  
            <span className="generaltext">TRAVEL XP</span>  
          </div>
          <div className="app">
            <School className="genraliocon"/> 
            <span className="generaltext">EDUCATION</span>
          </div>
          </>
          <>
          <div className="management">MANAGEMENT</div>
          <div className="app">
            <AccountCircle className="genraliocon"/> 
            <span className="managementtext">USER</span>
          </div>
          <div className="app">
            <ManageAccounts  className="genraliocon"/>  
            <span className="managementtext">SUPERVISOR</span>
          </div>
          <div className="app">
            <AccountBalance className="genraliocon"/>  
            <span className="managementtext">ACCOUNTS</span>
          </div>
         
          </>
        </div>
    </div>
  )
}
