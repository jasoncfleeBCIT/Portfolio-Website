import "./topbar.scss"
import {GitHub,LinkedIn} from "@material-ui/icons"

export default function topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper"> 
                <div className="left">
                    <a href="#intro" className="logo">Jason Lee.</a>
                </div>
                <div className="right">
                        <div className="itemContainer">
                            <a href="https://github.com/jasoncfleebcit"><GitHub className="icon" id="githubIcon"/></a>
                        </div>
                        <div className="itemContainer">
                            <a href="https://www.linkedin.com/in/jasoncflee"><LinkedIn className="icon" id="linkedinIcon"/></a>
                        </div>
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
