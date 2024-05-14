import React from "react";
import './works.css';
import portfolio1 from '../../assets/portfolio-1.png';
import portfolio2 from '../../assets/portfolio-2.png';
import portfolio3 from '../../assets/portfolio-3.png';
import portfolio4 from '../../assets/portfolio-4.png';
import portfolio5 from '../../assets/portfolio-5.png';
import portfolio6 from '../../assets/portfolio-6.png';

const Works=()=>{
    return(
        <section id="works">
            <h2 className="workTitle">My Portfolio</h2>
            <span className="worksDesc">As a skilled MERN stack developer, I am proficient in crafting dynamic and responsive web applications, seamlessly blending frontend creativity with backend robustness. Leveraging my expertise in React.js for frontend design and Node.js/Express.js for server-side logic, I engineer efficient and scalable solutions.</span>
            <div className="worksImgs">
                <img src={portfolio1} alt="" className="worksImg"/>
                <img src={portfolio2} alt="" className="worksImg"/>
                <img src={portfolio3} alt="" className="worksImg"/>
                <img src={portfolio4} alt="" className="worksImg"/>
                <img src={portfolio5}alt="" className="worksImg"/>
                <img src={portfolio6} alt="" className="worksImg"/>
            </div>
            <button className="worksbtn">See more</button>
        </section>
    );
}

export default Works;