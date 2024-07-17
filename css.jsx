import {Link} from 'react-router-dom'
import '../css/Html.css'

export function Sidecss(){
    return(
        <>
        <div id='side'>
            <Link to='/firstcss' id='shtml'>HTML HOME</Link>
            <Link to='/secondcss' id='shtml'>HTML Introduction</Link>
            <Link to='/thirdcss' id='shtml'>HTML Editor</Link>
            <Link to='/fourcss' id='shtml'>HTML Basic</Link>
            <Link to='/fivecss' id='shtml'>HTML Links & Image</Link>
            <Link to='/sixcss' id='shtml'>HTML Page Title</Link>
            <Link to='/sevencss' id='shtml'>HTML Tables</Link>
            <Link to='/eightcss' id='shtml'>HTML Lists</Link>
            <Link to='/ninecss' id='shtml'>HTML Block & Inline</Link>
            <Link to='/tencss' id='shtml'>HTML Iframes</Link>
        </div>
        
        </>
    );


}