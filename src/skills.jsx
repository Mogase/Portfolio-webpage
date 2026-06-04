import "./skills.css"


function Skills(){
    return(
            <div className="skills">
            <h1 className="ss">Soft Skills</h1>
            <div className="skill-item">
                <h4 data-percent="90%">Communication</h4>
                <div className="bar-fill fill-90"></div>
            </div>
            <div className="skill-item">
                <h4 data-percent="80%">Time Management</h4>
                <div className="bar-fill fill-80"></div>
            </div>
            <div className="skill-item">
                <h4 data-percent="85%">Problem-Solving</h4>
                <div className="bar-fill fill-85"></div>
            </div>
            <div className="skill-item">
                <h4 data-percent="75%">Teamwork and Collaboration</h4>
                <div className="bar-fill fill-75"></div>
            </div>
            <div className="skill-item">
                <h4 data-percent="70%">Adaptability</h4>
                <div className="bar-fill fill-70"></div>
            </div>
            <div className="skill-item">
                <h4 data-percent="65%">Creativity</h4>
                <div className="bar-fill fill-65"></div>
            </div>
            </div>
    )
}
export default Skills 