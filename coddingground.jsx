import '../css/coddingground.css'
import html from '../img/html.jpg'
import css from '../img/css.jpg'
import js from '../img/js.jpg'
import react from '../img/react.jpg'
import node from '../img/node.png'
import mongo from '../img/mongo.png'
import {Link} from 'react-router-dom';



export function Code(){
    return(
        <>
        
        <div id='head'><h1 >Select Codding Ground </h1></div>
        <div id='container'><br />
        <div ><center><h1 id='text'>Basic For Mern Stack</h1></center></div><br />

           <nav id='f'>
            <Link to='/html' id='links'><img src={html} alt="" id='cl' className='cl1'/></Link>
            <Link to='/css' id='links'><img src={css} alt="" id='cl'/></Link>
            <Link to='/js' id='links'><img src={js} alt="" id='cl'/></Link>
            </nav>
            <div id='mn'><center><h1 id='text'>Mern Stack</h1></center></div><br />
            <ul id='s'>
            <Link to='/react' id='links'><img src={react} alt="" id='cl'/></Link>
            <Link to='/node' id='links'><img src={node} alt="" id='cl'/></Link>
            <Link to='/mongo' id='links'><img src={mongo} alt="" id='cl'/></Link>

            
            </ul>
            </div>
        </>
    )
}
