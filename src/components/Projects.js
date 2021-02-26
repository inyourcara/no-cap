import React from 'react'
import '../index.css';
import TitleAnimation from './TitleAnimation';

function Projects() {
    return (
        <div>
          <TitleAnimation />
          <br></br>
            <div>
  <h1 >Aninmated overlay with project info on hover</h1>
  <div className="projContainer">
    <img src="https://static.vecteezy.com/system/resources/previews/000/190/061/original/vector-white-room-with-light-and-coming-soon-text.jpg" height="50%" width="50%"/>
    <div className="projInfoContainer">
      <h2>Project 1</h2>
      <p className="projCat">Category</p>
      <p className="projSpec">Stuff about this project.<br />More stuff about it, too</p>
    </div>
  </div>
  <div className="projContainer">
    <img src="https://static.vecteezy.com/system/resources/previews/000/190/061/original/vector-white-room-with-light-and-coming-soon-text.jpg"height="50%" width="50%" />
    <div className="projInfoContainer">
      <h2>Project 2</h2>
      <p className="projCat">Category</p>
      <p className="projSpec">Stuff about this project.<br />More stuff about it, too</p>
    </div>
  </div>
  <div className="projContainer">
    <img src="https://static.vecteezy.com/system/resources/previews/000/190/061/original/vector-white-room-with-light-and-coming-soon-text.jpg"height="50%" width="50%"/>
    <div className="projInfoContainer">
      <h2>Project 3</h2>
      <p className="projCat">Category</p>
      <p className="projSpec">Stuff about this project.<br />More stuff about it, too</p>
    </div>
  </div>

</div>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
        </div>
    )
}

export default Projects
