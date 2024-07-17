import {  Up,Topnav,Topnav1,Home,Langbars,Content,Adv ,Foot,Funnypic,Div} from './jsx/Home.jsx';
import {Code} from './jsx/coddingground.jsx'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {Jobs} from './jsx/Jobs.jsx'
import * as All from './jsx/Html.jsx'
import * as Allcss from './jsx/css.jsx';
import { Contactus } from './jsx/contactus.jsx';

function App() {
  return (
    <Router>
    <Routes>
    <Route path='/' element={<><Topnav/><Home/><Langbars/><Up/><Content><Adv /></ Content><Div></Div><Code /><Funnypic/><Foot/></>}/>
    <Route path='Home' element={<><Topnav/><Home/><Langbars/><Up/><Content><Adv /></Content><Div/><Code /><Funnypic/><Foot/></>}/>
    <Route path="Codingground" element={<><Topnav1/><Home/><Code /><Foot/></>}/>
                                      <Route path='html' element={<><Topnav1/><All.Sidehtml/><All.First><Foot/></All.First></>}/>
                                                                                           <Route path='first' element={<><Topnav1/><All.Sidehtml/><All.First><Foot/></All.First></>}/>
                                                           
                                                                                           <Route path='second' element={<><Topnav1/><All.Sidehtml/><All.Second><Foot/></All.Second></>}/>
                                                                                           <Route path='third' element={<><Topnav1/><All.Sidehtml/><All.Third><Foot/></All.Third></>}/>
                                                                                           <Route path='four' element={<><Topnav1/><All.Sidehtml/><All.Four><Foot/></All.Four></>}/>
                                                                                           <Route path='five' element={<><Topnav1/><All.Sidehtml/><All.Five><Foot/></All.Five></>}/>
                                                                                           <Route path='six' element={<><Topnav1/><All.Sidehtml/><All.Six><Foot/></All.Six></>}/>
                                                                                           <Route path='seven' element={<><Topnav1/><All.Sidehtml/><All.Seven><Foot/></All.Seven></>}/>
                                                                                           <Route path='eight' element={<><Topnav1/><All.Sidehtml/><All.Eight><Foot/></All.Eight></>}/>
                                                                                           <Route path='nine' element={<><Topnav1/><All.Sidehtml/><All.Nine><Foot/></All.Nine></>}/>
                                                                                           <Route path='ten' element={<><Topnav1/><All.Sidehtml/><All.Ten><Foot/></All.Ten></>}/>
                                      <Route path='css' element={<><Topnav1/><Allcss.Sidecss/></>}/>
                                      <Route path='js' element={<><Topnav1/><Home/><Langbars/></>}/>
                                      <Route path='react' element={<><Topnav1/><Home/><Langbars/></>}/>
                                      <Route path='node' element={<><Topnav1/><Home/><Langbars/></>}/>
                                      <Route path='mongo' element={<><Topnav1/><Home/><Langbars/></>}/>
     <Route path="Jobs" element={<><Topnav1/><Home/><Jobs><Foot/></Jobs></>}/>
     <Route path='contus' element={<><Topnav1/><Contactus/></>}/>

         </Routes>
         </Router>
    
    
  );
}


export default App;


