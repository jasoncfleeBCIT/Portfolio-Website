import { useEffect, useState} from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"
import {
    featuredPortfolio,
    personalPortfolio,
    practicumPortfolio,
    // designPortfolio,
    // contentPortfolio,
} from "../../data";

export default function Portfolio() {
        const [selected, setSelected] = useState("personal");
        const [data, setData] = useState([]);
        const list = [
            // {
            //     id: "featured",
            //     title: "Featured",
            // },
            {
                id:"personal",
                title: "Personal Project",
            },
            {
                id: "practicum",
                title: "Practicum Project",
            },
            // {
            //     id: "design",
            //     title: "Design",
            // },
            // {
            //     id: "content",
            //     title: "Content",
            // },
        ];

        useEffect(()=>{
            switch(selected){
                // case "featured":
                //     setData(featuredPortfolio);
                //     break;
                case "personal":
                    setData(personalPortfolio);
                    break;
                case "practicum":
                    setData(practicumPortfolio);
                    break;
                // case "design":
                //     setData(designPortfolio);
                //     break;
                // case "content":
                //     setData(contentPortfolio);
                //     break;
                default:
                    setData(personalPortfolio);
            }
        },[selected])
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item=>(
                    <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="item">
                        <img src={d.img} alt=""/>
                        <a href={d.link} className="porfoliolink">
                            {d.title}
                        </a>
                    </div>
                ))}
                
            </div>
        </div>
    )
}
