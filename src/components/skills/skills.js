import React from "react";
import './skills.css';
import frontend from '../../assets/frontend.jpg';
import backend from '../../assets/backend.jpeg';
import database from '../../assets/database management.png';
import deploy from '../../assets/deployment and maintanence.jpg';
const Skills=()=>{
    return(
      <section id='skills'>
        <span className="skillTitle">What I Do</span>
        <span className="skillDesc">As a skilled MERN stack developer, I adeptly craft dynamic and responsive web applications, seamlessly blending frontend creativity with backend robustness. With expertise in React.js for frontend design and Node.js/Express.js for server-side logic, I engineer efficient and scalable solutions. My proficiency extends to MongoDB, ensuring seamless database management and optimal application performance, making me a valuable asset in modern web development projects.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={frontend} alt="frontend" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>Frontend Development</h2>
                    <p>In MERN stack development, frontend work involves utilizing React.js to design and implement engaging user interfaces that seamlessly interact with the backend components of the application.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={backend} alt="backend" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>Backend Development</h2>
                    <p>In MERN stack development, backend work involves leveraging technologies like Node.js and Express.js to architect robust server-side solutions, facilitating seamless communication between the frontend and the database.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={database}alt="database" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>DataBase management</h2>
                    <p>
In MERN stack development, I proficiently handle database operations using MongoDB, ensuring seamless data storage, retrieval, and management for scalable and efficient web applications.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={deploy} alt="deploy" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>Deployment & Maintanence</h2>
                    <p>
In MERN stack development, deploying work involves configuring servers, managing deployment pipelines, and ensuring smooth transition of web applications to production environments for optimal performance and accessibility.</p>
                </div>
            </div>
        </div>
        
      </section>
    );
}

export default Skills;