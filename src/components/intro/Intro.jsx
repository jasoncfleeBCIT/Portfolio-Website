import "./intro.scss"

export default function intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/RevisedJason_bg.png" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h1>Hi, I'm <span>Jason</span></h1>
                    <h3>A software developer from Vancouver, BC</h3>
                    <br/>
                    <a href="#portfolio" className="buttonPortfolio">
                        My Porfolio
                    </a>
                </div>
                

            </div>
            
        </div>
    )
}
