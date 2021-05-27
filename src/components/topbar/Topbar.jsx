import "./topbar.scss"
import {GitHub,LinkedIn} from "@material-ui/icons"

export default function topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper"> 
                <div className="left">
                    <a href="#intro" className="logo">Jason Lee.</a>
                    <div className="itemContainer">
                        <GitHub className="icon"/>
                        <span>https://github.com/jasoncfleebcit</span>
                    </div>
                    <div className="itemContainer">
                        <LinkedIn className="icon"/>
                        <span>www.linkedin.com/in/jasoncflee</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}
