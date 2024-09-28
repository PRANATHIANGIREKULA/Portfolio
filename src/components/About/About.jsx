import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.svg'

const About = () => {

return (

<div  id='about' className='about'>

            <div className="about-title">

              <h1>About me</h1>

              <img src={theme_pattern} alt="" />

           </div> 

   <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
       </div>
       <div className="about-right">
          <div className="about-para">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam beatae dolor at,
                 minus, incidunt quisquam ipsa deleniti aperiam ullam nulla quidem possimus accusamus   
                 distinctio! Culpa, laborum iusto. Odio in ipsum repellendus ab commodi ullam?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque expedita inventore voluptas 
                quibusdam corrupti tempore ipsum laboriosam aperiam ab earum quidem est a, in rem, rerum porro
                 consectetur, sapiente quia voluptatum! Nihil numquam inventore soluta facere, debitis alias
                  laudantium, ex amet adipisci, animi ipsa! Quam eligendi non impedit reiciendis optio illo
                   nihil est eos nobis aliquam!</p>
           </div>
          <div className="about-skills">
                <div className="about-skill"><p>HTML&CSS</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>ReactJS</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>AngularJs</p><hr style={{width:"50%"}}/></div>
          </div>
        </div>
    </div>
    <div className="about-achievements">
        <div className="about-achievement">
            <h1>10+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>90+</h1>
            <p>Projects</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>15+</h1>
            <p>Happy Clients</p>
        </div>
        <hr/>

    </div>

</div>
)
}
export default About