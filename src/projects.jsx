import bcIMG from './images/bc-cafe.jpg'


function Projects(){
    return(
        <div className="projects">
            <div className="pb">1
                <img className='projimg' src={bcIMG} alt="" />
                <p> This C# console application helps Belgium Campus Cafeteria determine whether students qualify for a high-performing student discount. The application captures student details such as name, residence status, years on campus, monthly allowance, and average marks, then evaluates if they meet the criteria for a discount.</p>
                <a className='txt' href='https://github.com/Mogase/BC_Cafeteria' target='_blank' rel='noopener noreferrer'>GitHub Repo</a>
                </div>
            <div className="pb">2
           
            </div>
            <div className="pb">3
            
            </div>
            <div className="pb">4
            
            </div>
        </div>
    )
}
export default Projects