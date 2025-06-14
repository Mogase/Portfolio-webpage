import bcIMG from './images/bc-cafe.jpg'
import stdReg from './images/student.jpg'
import EMPS from './images/emps.jpg'
import "./projects.css"


function Projects(){
    return(
        <div>
            <h1 className="PROJ">Projects</h1>
             <div className="projects">
            <div className="pb">
                <img className='projimg' src={bcIMG} alt="" />
                <p> This C# console application helps Belgium Campus Cafeteria determine whether students qualify for a high-performing student discount. The application captures student details such as name, residence status, years on campus, monthly allowance, and average marks, then evaluates if they meet the criteria for a discount.</p>
                <a className='txt' href='https://github.com/Mogase/BC_Cafeteria' target='_blank' rel='noopener noreferrer'>GitHub Repo</a>
                </div>
            <div className="pb">
                <img className='projimg' src={stdReg} alt="" />
                <p> This project focuses on software testing for a Windows-based student management application developed by BelgiumCampusPRG282 Software Dev. The system captures and manages student and module data, with all records stored in an SQL Server database using a multi-layered architecture.</p>

                <a className='txt' href='https://github.com/Clayton1773/StudentRegisterApp' target='_blank' rel='noopener noreferrer'>GitHub Repo</a>

            </div>

            <div className="pb">
                <img className='projimg' src={EMPS} alt="" />
                <p> This is an Employee Management application built in react.js, it's purpose is to manage employee data</p>

                <a className='txt' href='' target='_blank' rel='noopener noreferrer'>GitHub Repo</a>

            </div>
           
            <div className="pb">
            <p>stay tuned for more projects</p>
            </div>



        </div>

        </div>
       
    )
}
export default Projects