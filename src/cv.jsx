import myimg from './adilmalik.jpg'
import { ArrowRight } from 'react-bootstrap-icons';
import './cv.css'

let Cv = () => {

    return (

        <div className='main'>
            <div className="leftside">
                <div className="imgDivMain">
                    <div className="imgDiv">
                        <img src={myimg} alt="" />
                    </div>
                    <h1>Muhammad Adil</h1>
                </div>

                <div className="contactDiv">
                    <h1>Contact</h1>
                    <p> <span>Email</span> <br /> <a target='blank' href="https://madilsmit6@gmail.com">madilsmit6@gmail.com</a> </p>
                    <p> <span>Phone</span> <br /> 0313-619-6041</p>
                    <p> <span>Address </span> <br />Gulshan e Tayyabi <br /> Malir,Karachi</p>
                </div>
                <div className="medialinks">
                    <h1>Socail Media</h1>
                    <div className="btn">
                       <a target='blank' href="https://github.com/adil5679">Github</a>
                       <a target='blank' href="https://www.linkedin.com/in/adil-malik-4b2926268/">Linked In</a>
                       <a target='blank' href="https://github.com/adil5679">Facebook</a>
                       <a target='blank' href="https://www.instagram.com/_.itx_adiii/">Instagram</a>

                      
                    </div>

                </div>

            </div>




            <div className="rightside">
                <div className="aboutmeDiv">
                    <h1>About Me</h1>
                    <p>
                        Hey there! I'm Muhammad Adil, a passionate learner and a student pursuing Intermediate from Jammia millia Degree Collage.
                        Currently, I'm on an exciting journey, honing my skills in the MERN stack through a course at Saylani Welfare International Trust.
                        As a dedicated learner, I've successfully completed modules on Firebase, HTML, CSS, MongoDB, and Express, NodeJS bringing
                        me one step closer to becoming a proficient full-stack developer.
                    </p>
                </div>



                <div className="education">
                    <h1>Education</h1>
                    <p>
                        <p>  <span>Matric In Science</span> </p>

                        <p>  <span>Matric From Jammia Millia pilot Govt Boys School</span> </p>

                        <p>  <span>Intermediate I Science</span> </p>

                        <p> <span>Intermediate continue from Goverment Degree Science & Commerce College</span>  </p>

                        <p>  <span>Web And App development Continue In Saylani Welfare.</span> </p>
                    </p>
                </div>





                <div className="exp">
                    <h1>EXPERIENCE</h1>

                    <p>
                        <li>
                            Web developer experience
                            9 months experience
                            as a web developer
                        </li>
                    </p>
                    <p>
                        <li>
                            Web developer experience
                            9 months experience
                            as a web developer
                        </li>
                    </p>
                    <p>
                        <li>
                            Web developer experience
                            9 months experience
                            as a web developer
                        </li>
                    </p>

                </div>


                <div className="skills">

                    <h1>SKILLS</h1>
            
                    <table>
                        <tr>
                            <th>Front-end</th>
                            <th>Back-end</th>
                        </tr>
                        <tr>
                            <td>HTML 5</td>
                            <td>Firebase</td>
                        </tr>
                        <tr>
                            <td>Css</td>
                            <td>Mongodb</td>
                        </tr>
                        <tr>
                            <td>JavaScript</td>
                            <td>Node.js</td>
                        </tr>
                        <tr>
                            <td>React</td>
                            <td>express.js</td>
                        </tr>
                    </table>



                </div>


            </div>
        </div>

    )

}

export { Cv }
