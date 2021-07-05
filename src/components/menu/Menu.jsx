import "./menu.scss"
import {Folder,Person,GitHub,LinkedIn} from "@material-ui/icons"

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio<Folder className="icon" id="portfolioIcon"/></a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">About<Person className="icon" id="userIcon"/></a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="https://github.com/jasoncfleebcit">GitHub<GitHub className="icon" id="githubIcon"/></a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="https://www.linkedin.com/in/jasoncflee">LinkedIn<LinkedIn className="icon" id="linkedinIcon"/></a>
                </li>
            </ul>
        </div>
    )
}