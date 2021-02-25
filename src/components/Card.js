import React from 'react'
import '../index.css';

function Card() {
  return (
    <div>
     <div className="resume">

  <div className="resume_right">
    <div className="resume_item resume_about">
      <div className="title">
        <p className="bold">About us</p>
      </div>
      <p>Self-motivated humbly looking forward a role in the tech industry finding solutions and design problems.</p>
    </div>
    <div className="resume_item resume_work">
      <div className="title">
        <p className="bold">Work Experience</p>
      </div>
      <ul>
        <li>
          <div className="date">2013 - 2015</div> 
          <div className="info">
            <p className="semi-bold">Lorem ipsum dolor sit amet.</p> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
          </div>
        </li>
        <li>
          <div className="date">2015 - 2017</div>
          <div className="info">
            <p className="semi-bold">Lorem ipsum dolor sit amet.</p> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
          </div>
        </li>
        <li>
          <div className="date">2017 - Present</div>
          <div className="info">
            <p className="semi-bold">Lorem ipsum dolor sit amet.</p> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
          </div>
        </li>
      </ul>
    </div>
    <div className="resume_item resume_education">
      <div className="title">
        <p className="bold">Education</p>
      </div>
      <ul>
        <li>
          <div className="date">2010 - 2013</div> 
          <div className="info">
            <p className="semi-bold">Web Designing (Texas University)</p> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
          </div>
        </li>
        <li>
          <div className="date">2000 - 2010</div>
          <div className="info">
            <p className="semi-bold">Texas International School</p> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
          </div>
        </li>
      </ul>
    </div>
    <div className="resume_item resume_hobby">
   
  
    </div>
  </div>
</div>
    </div>
  )
}

export default Card
