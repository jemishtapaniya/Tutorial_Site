import { useState } from 'react';
import {Link} from 'react-router-dom';
import '../css/Home.css'
import house from '../img/106243_home_house_icon.png';
import code from '../img/2867880_code_icon.png'
import jobs from '../img/4903903_and_card_id_jobs_loupe_icon.png'
import daynight from '../img/day-and-night.png'
import content1 from '../img/mern-removebg-preview.png'
import sidequote from '../img/sidequ-transformed.png'
import {imgList,funnylist} from '../jsx/slidedata.jsx'
import up from '../img/9055011_bx_up_arrow_circle_icon.png'
import insta from '../img/4202852_instagram_icon.png'
import face from '../img/4202870_facebook_icon.png'
import about from '../img/5402388_information_about_support_accessibility_info_icon.png'
import contact from '../img/communicate.png'
import contact1 from '../img/2024660_call_contact us_contacts_phone_support_icon.png'


export  function Topnav(){
    return(
    
        <>
        <div id="top">
            <nav id='topn'>
                <a href='#log' id='lefts'><img src={house} height={15} width={15}/>Home</a>
                <a href="#div" id='lefts'><img src={code} height={20} width={20} />Coding Ground</a>
                <Link to='/Jobs' id='lefts'><img src={jobs} height={20} width={20}/>Jobs</Link>
                <Link to='/contus' id='lefts'><img src={contact} height={20} width={20}/>Contact Us</Link>
                <a href="#footer1" id='lefts'><img src={about} height={20} width={20} />About</a>


                <li  id='lefts1'><button id='dn' className='dn' onClick={back}><img src={daynight} height={25} width={30}/></button></li>
            </nav>
            
        </div>

        </>
       
        
    );
}

export  function Topnav1(){
    return(
    
        <>
        <div id="top">
            <nav id='topn'>
                <Link to='/Home' id='lefts'><img src={house} height={15} width={15}/>Home</Link>
                <Link to='/Codingground' id='lefts'><img src={code} height={20} width={20} />Coding Ground</Link> 

                <Link to='/Jobs' id='lefts'><img src={jobs} height={20} width={20}/>Jobs</Link>
                <Link to='/contus' id='lefts'><img src={contact} height={20} width={20}/>Contact Us</Link>

                <li  id='lefts1'><button id='dn' className='dn' onClick={back}><img src={daynight} height={25} width={30}/></button></li>
            </nav>
            
        </div>

        </>
       
        
    );
}

function back(){
    var bac=document.body;
    var lang=document.querySelector('langmain');
    if(bac.style.backgroundColor=='black'){
        bac.style.backgroundColor='white'
        bac.style.color='black'

        
        
    }
    else{
        bac.style.backgroundColor='black'
        bac.style.color='white'
    }
}
export function Home(){
    return(
        <div id='log'>
               <h1 id='heading'><b id='nm1'>Techy</b>Programming</h1>
               <button id='login'>Login</button>
        </div>
    );
}


export function Langbars(){
    return(
            <div id='langmain' className='langmain'>
                <nav>
                    <Link to='/html' id='langli'>HTML</Link>
                    <Link to='/css' id='langli'>CSS</Link>
                    <Link to='/js' id='langli'>JavaScript</Link>
                    <Link to='/react' id='langli'>React js</Link>
                    <Link to='/node' id='langli'>Node js</Link>
                    <Link to='/mongo' id='langli'>MongoDb</Link>
                </nav>
            </div>
    );
}
export function Content({children,children1}){
    return(
        <>
        <nav id='co3'>
           <li id='adv1'>
            {children}
            </li>  
            
            <li id='co1'>
            <p id='enter'>Welcome Dear,</p>
            <p id="para"> You can learn basics of some languages which we define here .Here not define all the imformation only some topics. <b>We are trying to teach you basics of mern-stack webdevlopment <br/>So,we start with What is mernstack</b></p>
            <div id='c1'><img src={content1} id='c12'/></div>
            <p id="para">Mern has 4 letters <br/><h3>M-MongoDb</h3></p>
            <p id="para"><h3>E-Express</h3></p>
            <p id="para"><h3>R-React</h3></p>
            <p id="para"><h3>N-Node</h3></p>
           <p id='para12'>The MERN stack is a collection of technologies that help developers build robust and scalable web applications using JavaScript. The acronym “MERN” stands for MongoDB, Express, React, and Node. js, with each component playing a role in the development process.</p>
           </li></nav><br />{children1}   </>
    );
}

export function Adv(){
    const [index,setIndex]=useState(0)
        function handleclick(){
            if(index<5){
            setIndex(index+1)
            }else{
                setIndex(0)
            }
        }
        function handlepreclick(){
            if(index>0){
                setIndex(index-1)
                }else{
                    setIndex(5)
                }
        }
        setInterval(handleclick,3000)
         let imgList1=imgList[index];
         const mp=imgList1.bestCompany.map(company=><li>{company}</li>)
          return(<>
          {/* <button onClick={handlepreclick} id='advbtn1'><img src={left} alt='previous' width={20} height={20} /></button>
            <button onClick={handleclick} id='advbtn'><img src={right} alt="next" width={20} height={20}/></button> */}
            <p id="adv3"><h2>Mern Tv</h2></p><br />
            
            <img src={imgList1.url} alt={imgList1.Name} id='adv'  /><br /><br />
            <p id='adv3'> <h3>{imgList1.Name}</h3></p><br />
            <p id="adv2"> About:  <br /> <br />{imgList1.discription}</p><br />
            <p id="adv2">bestCompany: <br /><br /><ol>{mp}</ol></p>
             </>);
}
export function Foot(){

    return(
        <>
        <br />
        
           <div id='footer1'>
           <h1 id='heading1'><b id='nm12'>Techy</b>Programming</h1><br />
           <ul id='part'>
            <li id='part1'><li>Top tutorials:</li><li ><Link to='/html' id='dec' >HTML Tutorial</Link><br /><Link to='/css' id='dec'>CSS Tutorial</Link><br /><Link to='/js' id='dec'>JS Tutorial</Link><br /><Link to='/node' id='dec'>NODEjs Tutorial</Link><br /><Link to='/react' id='dec'>REACTjs Tutorial</Link><br /><Link to='/mongo' id='dec'>MONGOdb Tutorial</Link></li></li>
            <li id='part2'><li>Contact:</li><a href='tel:916354249873' id='phoneno' target='_blank'><li id='contact1'><img src={contact1} alt="" id='fphoto'/><span id='social'>+91 63542 49873</span></li></a><a href="https://www.instagram.com/jemishtapaniya021?igsh=aDBocG5qOThoeW16" id='dec' target='_blank'><img src={insta} alt="" id='fphoto'/><span id='social'>techy_programming021</span></a><br /><a href="https://www.facebook.com/jemish.tapaniya.5?mibextid=kFxxJD" id='dec' target='_blank'><img src={face} alt="" id='fphoto'/><span id='social'>techy_programming021</span></a><a href="mailto:jemishtapaniya@gmail.com"  id='dec' target='_blank'> <span id='social'>techyprogramming@gmail.com</span></a></li>
            <li id='part3'><li>Location(HEAD):</li><br />
            <div style={{ width: "100%" }}>
  <iframe
    width="50%"
    height={200}
    
    frameBorder={2}
    scrolling="no"
    marginHeight={0}
    marginWidth={0}
    src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Raj%20Palace,%20Opp.%20Sterlilng%20App.,%20Priya%20Hotel%20Street,%20Behind%20Dhiraj%20Sons,%20Athwa%20Gate,%20Surat,%20Gujarat%20395001+(techy%20programing)&t=h&z=14&ie=UTF8&iwloc=B&output=embed"
  >
    &lt;a href="https://www.gps.ie/"&gt;gps tracker sport&lt;/a&gt;
  </iframe>
</div>
            </li>
           </ul>

           <p id='p1'> TECHY Programming is optimized for learning and training. Examples might be simplified to improve reading and learning.</p>
        <p id='p2'>Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness
            of all content.</p>

           </div>
           
                  </>
    );
}
export function Funnypic(){
    const [index,setIndex] =useState(0)
    function handleclick(){
        if(index<7){
               setIndex(index+1)
        }
        else{
            setIndex(0)
        }
        
    }
    setInterval(handleclick,3000)
    let fl=funnylist[index]
    let f2
    let f3
    let f4
    if(index==funnylist.length-3){
         f2=funnylist[index+1]
     f3=funnylist[index+2]
     f4=funnylist[0]
    }
    else if(index==funnylist.length-2){
         f2=funnylist[index+1]
     f3=funnylist[0]
     f4=funnylist[1]
    }
    else if(index==funnylist.length-1){
         f2=funnylist[0]
     f3=funnylist[1]
     f4=funnylist[2]
    }
    // else if(index==funnylist.length){
    //      f2=funnylist[0]
    //  f3=funnylist[1]
    //  f4=funnylist[2]
    // }
    else{
     f2=funnylist[index+1]
     f3=funnylist[index+2]
     f4=funnylist[index+3]
    }

    return(
        <>
        <br />
        
        <ul id='fm'>
            <li id=''><img src={fl.img}  alt="" /></li>
            <li><img src={f2.img} alt=""  /></li>
            <li><img src={f3.img} alt="" /></li>
            <li><img src={f4.img} alt=""  /></li>
            
        </ul>
       <br /> 
        </>
    )
}
export function Up(){
    return(<a href='#log' ><img src={up} alt="" id='up' /></a>)
}
export function Div(){
    return(<div id='div'></div>)
}

