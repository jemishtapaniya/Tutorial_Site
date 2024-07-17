import '../css/Jobs.css'
import html from '../img/html.jpg'
import css from '../img/css.jpg'
import js from '../img/js.jpg'
import react from '../img/react.jpg'
import node from '../img/node.png'
import mongo from '../img/mongo.png'
import { useState } from 'react'


export function Jobs({children}){
    const[isactive,setIsactive]=useState(0)
   return(<>
   <div id='jobtop'><center><h2>JOBS INFORMATION</h2></center></div>
   <div id='container1'>
     <Panal isactive={isactive==1} onshow={()=>setIsactive(1)} onClose={()=>setIsactive(0)} title={'In-Demand HTML Jobs'}>HTML Jobs is a career page dedicated to gathering exclusive HTML job roles from around the world for users to explore and apply for. Being part of the Tutorials Point Jobs page, the HTML Jobs page gives users quick access to the latest HTML job requirements. With a sophisticated search feature, users can filter job roles based on their location preferences and start applying to the relevant roles.<br/><br/>According to Stack Overflow Developer’s Survey 2023, HTML stands among CSS and JavaScript as the most popular programming languages. 52.97% of developers in the survey stated that they have used HTML/CSS extensively and plan to use it in the coming years.  </Panal>
     <Panal isactive={isactive==3} onshow={()=>setIsactive(3)} onClose={()=>setIsactive(0)} title={'In-Demand javascript Jobs'}>JavaScript is considered a core web technology alongside HTML and CSS. According to the Stack Overflow Developer’s Survey, it has been ranked as the most commonly used programming language for 12 consecutive years as of 2024.<br/><br /> you can master JavaScript and other core web technologies and become a high-paid professional by exploring thousands of job opportunities in India, the USA, the UK, Canada, and the rest of the world.</Panal>
     <Panal isactive={isactive==4} onshow={()=>setIsactive(4)} onClose={()=>setIsactive(0)} title={'In-Demand REACTjs Jobs'}>React JS is a valuable skill in web development and ReactJS Developers are in high demand. ReactJS enables developers to build compelling and engaging user experiences that contribute to the growth of businesses and start-ups in particular. Learning this one skill can lead to promising careers for aspiring software developers.<br/><br />If you are planning on building a successful career as a ReactJS Developer, you need to take the advantage of ReactJS Developer Jobs page by Tutorials Point. The dedicated page is designed to bring the right opportunity to the right person.</Panal>
     <Panal isactive={isactive==5} onshow={()=>setIsactive(5)} onClose={()=>setIsactive(0)} title={'In-Demand NODEjs Jobs'}>Node.js is a popular open-source runtime environment that is based on JavaScript. As more organizations are relying on Node.js to create efficient programs, there is a steady rise in the demand for skilled Node.js developers. Node.js Developer Jobs is a dedicated space that is designed to bridge the gap between talent and demand.<br/><br />If you wish to kick-start a successful career in Node.js, make the most of Tutorials Point where you can learn relevant technologies and skills, explore job opportunities, apply for suitable ones, and land your dream job, all in one place.</Panal>
     <Panal isactive={isactive==6} onshow={()=>setIsactive(6)} onClose={()=>setIsactive(0)} title={'In-Demand MONGODB Jobs'}>Browse the Best Jobs in MongoDB on Tutorials Point.<br/><br /></Panal>
     {children}</div></>
   );
}

function Panal({isactive,title,onshow,children,onClose}){
   return(<>
   <div id='jobinfo'>
      <h2 id='title'>{title}</h2>
      {isactive?<> <p>{children}</p><button onClick={onClose} id='close'>close</button></>: <button id='details' onClick={onshow}>DETAILS</button>}
      </div>
   </>)
}