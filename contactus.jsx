import BB from '../img/5000712_gmail_google_network_online_social media_icon.png'
import CC from '../img/2697655_apple_phone_call_cell_emergency_icon.png'
import '../css/contact.css'
import { Link } from 'react-router-dom';




export function Contactus(){
    return(
        <>
        <div id='mains'>

<div id='Association'>
    
 <li>
 <h1 id='tion'>Meeting</h1>
 <h4 id='tion'>For partnering with us</h4>

     <div>
     <a href="mailto:jemishtapaniya@gmail.com"><img id='asso' src={BB} ></img></a>
     </div>

     <div id='upp'>
     <a href="mailto:jemishtapaniya@gmail.com" id='mail' >jemishtapaniya@gmail.com</a>    
     </div>

     <div id='pho'>
     <a href="tel:916354249873"><img id='asso1' src={CC} ></img></a>
     </div>

     <div id='upp'>
     <a href="tel:+916354249873" id='mail' >+91 6354249873</a>    
     </div>

     <div id='de' >    
     <a href='https://wa.me/qr/RSPLXLSBYLHWL1' target='_blank'>                  
           <button id='book'>BOOK A Metting</button></a>
     </div>
 </li>
 </div>  

 <div id='support'>
    
 <li>
 <h1 id='tion'>Support</h1>
 <h4 id='tion'>For Developer queries</h4>

     <div>
     <a href="mailto:jemishtapaniya@gmail.com"><img id='asso' src={BB} ></img></a>
     </div>

     <div id='upp'>
     <a href="mailto:jemishtapaniya@gmail.com" id='mail' >jemishtapaniya@gmail.com</a>    
     </div>

     <div id='pho'>
     <a href="mailto:jemishtapaniya@gmail.com"><img id='asso1' src={CC} ></img></a>
     </div>

     <div id='upp'>
     <a href="tel:+916354249873" id='mail' >+91 6354249873</a>    
     </div>

     <div id='de' >  
     <a href='https://wa.me/qr/RSPLXLSBYLHWL1' target='_blank'>                    
           <button id='book'>WHATSAPP</button></a>
     </div>
 </li>
 </div>  

 <div id='Sales'>
    
 <li>
 <h1 id='tion'>OTHER</h1>
 <h4 id='tion'>For Other Purpose</h4>

     <div>
     <a href="mailto:jemishtapaniya@gmail.com"><img id='asso' src={BB} ></img></a>
     </div>

     <div id='upp'>
     <a href="mailto:jemishtapaniya@gmail.com" id='mail' >jemishtapaniya@gmail.com</a>    
     </div>

     <div id='pho'>
     <a href="mailto:jemishtapaniya@gmail.com"><img id='asso1' src={CC} ></img></a>
     </div>

     <div id='upp'>
     <a href="tel:+916354249873" id='mail' >+91 6354249873</a>    
     </div>

     <div id='de' >  
        <a href='https://wa.me/qr/RSPLXLSBYLHWL1' target='_blank'>        
           <button id='book' >REACH OUT</button></a>
     </div>
 </li>
 </div>  


</div>  


 <div id='we' ><br/><br/><br/>
     <center >
     <p id='want'> We want you to Grow With Us!   </p>
     <p id='at'>At TechyProgramming, we are building a culture where passionate people (like you) can grow.</p>
     </center>

     <div id='see'>
     <center> <Link to='/jobs'><button id='open'>SEE ALL OPEN POSITION</button></Link>  </center> 
     </div> 
 </div>  

 <div id='brts'>
    <center id='dabholi'><p id='kbc'> 501-504 KBC, Dabholi Road, Katargam, Surat - 395004 (Opposite Dabholi Brts) </p></center> 
 </div>
        </>

    );
}