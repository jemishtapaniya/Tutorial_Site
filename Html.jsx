import {Link} from 'react-router-dom';
import '../css/Html.css'
import ex1 from '../img/image.png'
import ex2 from '../img/html1.jpg'
import ex3 from '../img/Screenshot 2024-06-15 164207.png'
import ex4 from '../img/Screenshot 2024-06-17 142453.png'
import ex5 from '../img/Screenshot 2024-06-17 142423.png'
import ex6 from '../img/Screenshot 2024-06-17 143924.png'
import ex7 from '../img/Screenshot 2024-06-17 162653.png'
import ex8 from '../img/html/basic/Screenshot 2024-06-17 170506.png'
import ex9 from '../img/html/basic/Screenshot 2024-06-17 170527.png'
import ex10 from '../img/html/basic/Screenshot 2024-06-17 170550.png'
import ex11 from '../img/html/basic/Screenshot 2024-06-17 170616.png'
import ex12 from '../img/html/basic/Screenshot 2024-06-17 170655.png'
import ex13 from '../img/html/basic/Screenshot 2024-06-17 170723.png'
import ex14 from '../img/html/basic/Capture1.PNG'
import ex15 from '../img/html/basic/Capture2.PNG'
import ex16 from '../img/html/basic/Capture3.PNG'
import ex17 from '../img/html/basic/Capture4.PNG'
import ex18 from '../img/html/basic/Capture5.PNG'
import ex19 from '../img/html/basic/Capture6.PNG'
import ex20 from '../img/html/basic/Capture7.PNG' 
import ex21 from '../img/html/basic/Capture8.PNG' 
import ex22 from '../img/html/basic/Capture9.PNG' 
import ex23 from '../img/html/basic/Capture10.PNG' 
import ex24 from '../img/html/basic/Capture11.PNG' 



export function Sidehtml(){
    return(
        <>
        <div id='side'>
            <Link to='/first' id='shtml'>HTML HOME</Link>
            <Link to='/second' id='shtml'>HTML Introduction</Link>
            <Link to='/third' id='shtml'>HTML Editor</Link>
            <Link to='/four' id='shtml'>HTML Basic</Link>
            <Link to='/five' id='shtml'>HTML Links & Image</Link>
            <Link to='/six' id='shtml'>HTML Page Title</Link>
            <Link to='/seven' id='shtml'>HTML Tables</Link>
            <Link to='/eight' id='shtml'>HTML Lists</Link>
            <Link to='/nine' id='shtml'>HTML Block & Inline</Link>
            <Link to='/ten' id='shtml'>HTML Iframes</Link>
            
        </div>
        
        </>
    );


}

export function First({children}){
    return(
        <>
        <h1 id='head1'><b>HTML HOME</b></h1>
        <div id='first'>
        <div id='f1'>HTML is the standard markup language for Web pages.<br></br><br></br>With HTML you can create your own Website.<br></br><br></br>HTML is easy to learn - You will enjoy it!</div>
            </div>
            <h1 id="head1">Easy Learning with HTML "Try it Yourself"</h1>
            <h3 id="head2">With our "Try it Yourself" editor, you can edit the HTML code and view the result:</h3>
            <div id='one'>
                <h3>Example:</h3>
                <div id='two'>
                         <img src={ex1} alt="Example 1" id='ex1' />
                </div>
            </div>
            <div id='quote'>
                <p>"Any fool can write code that a computer can understand. <br></br>Good programmers write code that humans can understand." <br></br>― Martin Fowler</p>
            </div><div id='footer'>
              <br />
            <br />
            {children}
            </div>

            </>
    );
}
export function Second({children}){
    return(
        <>
<h1 id='head1'><b>HTML Introduction</b></h1><br></br>
            <hr></hr>
            <h4 id='s1'>HTML is the standard markup language for creating Web pages.</h4>
            <hr />
             <h2 id='s2'>What is HTML?</h2>
                  <ul id='s3'>
                    <li>HTML stands for Hyper Text Markup Language</li>
                    <li>HTML is the standard markup language for creating Web pages</li>
                    <li>HTML describes the structure of a Web page</li>
                    <li>HTML consists of a series of elements</li>
                    <li>HTML elements tell the browser how to display the content</li>
                    <li>HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.</li>
                  </ul>
                  <br />
            <hr></hr>
            <h2 id='s2'>A Simple HTML Document</h2>
            <div id='one'>
                <h3>Example:</h3>
                <div id='two'>
                         <img src={ex1} alt="Example 1" id='ex1' />
                </div>
            </div>
            <br></br>
            <h2 id='s2'>Example Explained</h2>
                      <ul id='s3'>
                        <li>The &lt;!DOCTYPE html&gt; declaration defines that this document is an HTML5 document</li>
                        <li>The &lt;html&gt; element is the root element of an HTML page</li>
                        <li>The &lt;head&gt; element contains meta information about the HTML page</li>
                        <li>The &lt;title&gt; element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)</li>
                        <li>The &lt;body&gt; element defines the document's body, and is a container for all the visible contents, such as headings,
                             paragraphs, images, hyperlinks, tables, lists, etc.</li>
                        <li>The &lt;h1&gt; element defines a large heading</li>
                        <li>The &lt;p&gt; element defines a paragraph</li>
                      </ul>
<br></br>
<hr />
                      <h2 id='s2'>What is an HTML Element?</h2>

                      <p id='s4'>
                     <b> An HTML element is defined by a start tag, some content, and an end tag </b> <br />
&lt;tagname&gt; Content goes here... &lt;/tagname&gt;  <br></br><br />
<b>
The HTML element is everything from the start tag to the end tag</b> <br></br>
&lt;h1&gt; My First Heading&lt;/h1&gt; <br />
&lt;p&gt;My first paragraph.&lt;/p&gt;
                      </p>
                      <br>
                      </br>
                      <hr />
                      <br />
                      <h2 id='s2'>HTML History</h2>
                      <p id="s4">Since the early days of the World Wide Web, there have been many versions of HTML:</p><br />
                      <img src={ex3} alt="Example 1" id='ex3' />
            <div id='quote'>
                <p>"Any fool can write code that a computer can understand. <br></br>Good programmers write code that humans can understand." <br></br>― Martin Fowler</p>
            </div><div id='footer'>
              <br />
            <br />
            {children}
            </div>
            </>
    );
}

export function Third({children}){
    return(

        <>
        <h1 id='head1'><b>HTML Editors</b></h1><br></br>
        <br />
        <hr />
        <br />
        <p id='t1'>A simple text editor is all you need to learn HTML.</p>
        <br />
        <hr />
        <br />
        <h2 id='t2'><b>Learn HTML Using Notepad or TextEdit</b></h2>
        <br />
        <p id='t3'>Web pages can be created and modified by using professional HTML editors.</p>
        <p id='t3'>However, for learning HTML we recommend a simple text editor like Notepad (PC) or TextEdit (Mac).</p>
        <p id='t3'>We believe that using a simple text editor is a good way to learn HTML.</p>
        <p id='t3'>Follow the steps below to create your first web page with Notepad or TextEdit.</p>
        <br />
        <hr />
        <h2 id="s2">Step 1: Open Notepad (PC)</h2><br />
        <p id='t3'> <h2>Windows 8 or later:</h2><br />

Open the Start Screen (the window symbol at the bottom left on your screen). Type Notepad. <br /><br />

<h2>Windows 7 or earlier: </h2><br />

Open Start &gt; Programs &lt; Accessories &gt; Notepad</p>
<br />
    <hr />
    <br />
    <h2 id="s2">Step 2: Write Some HTML</h2><br />
    <p id='t3'>Write or copy the following HTML code into Notepad:</p>
    <div id="one">
        <div id="t4">
            <img src={ex5} alt="" id='t6'/>
            </div>
        <br />
        <img src={ex4} alt="" id="t5" />
    </div>
    <br />
    <hr />
    <br />
    <h2 id="s2">Step 3: Save the HTML Page</h2><br />
    <p id='t2'>Save the file on your computer. Select  <b>File &gt;  Save as</b> in the Notepad menu. <br />

Name the file <b>"index.htm"</b> and set the encoding to  <b>UTF-8</b> (which is the preferred encoding for HTML files).</p> <br />
  <div id="one">
  <img src={ex6} alt="" id='t5' />
    </div> 
    <br />
    <hr />
    <br />
    <h2 id="s2">Step 4: View the HTML Page in Your Browser</h2><br /><br />
    <p id="t2">Open the saved HTML file in your favorite browser (double click on the file, or right-click - and choose "Open with").<br/><br/>

The result will look much like this:

</p>
<br />
 <img src={ex7} alt="" id='t5' />
<br />
<hr />

<div id='quote'>
                <p>"Any fool can write code that a computer can understand. <br></br>Good programmers write code that humans can understand." <br></br>― Martin Fowler</p>
            </div>
            <div id='footer'>
              <br />
            <br />
            {children}
            </div>

        </>

    );
}
export function Four({children}){
    return(<>
    <h1 id="head1">HTML Basic Examples</h1><br /><hr /><br />
    <p id="t2">In this chapter we will show some basic HTML examples.<br/>

Don't worry if we use tags you have not learned about yet.</p>
<br />
<hr />
     <h2 id="s2">HTML Documents</h2> <br />
     <p id="t2">All HTML documents must start with a document type declaration: &lt;!DOCTYPE html&gt;. <br />

The HTML document itself begins with &lt;html&gt; and ends with &lt;/html&gt;. <br />

The visible part of the HTML document is between &lt;body&gt; and &lt;/body&gt;.</p><br />
<div id='one'><h3>Example:</h3> <div >
    <img src={ex8} alt="" id='ex1' />
    </div></div>
    <br />
    <hr />
    <br />
    <h2 id="s2">The &lt;!DOCTYPE&gt; Declaration</h2><br />
    <p id='t2'>The <i id='redf'>&lt;!DOCTYPE&gt;</i> declaration represents the document type, and helps browsers to display web pages correctly. <br />

It must only appear once, at the top of the page (before any HTML tags). <br></br>

The <i id='redf'>&lt;!DOCTYPE&gt;</i> declaration is not case sensitive. <br />

The <i id='redf'>&lt;!DOCTYPE&gt;</i> declaration for HTML5 is:</p> <br />
 <div id="one"><div>

    <img src={ex9} alt="" id='ex1'  />
    </div></div>

    <h2 id="s2">HTML Headings</h2><br />
    <p id="t2">HTML headings are defined with the &lt;h1&gt; to &lt;h6&gt; tags.</p>
    <p id="t2">&lt;h1&gt; defines the most important heading. &lt;h6&gt; defines the least important heading: </p>
    <br />
    <div id="one">
        <div>
            <img src={ex10} alt="" id="ex1" />
        </div>
    </div>
    <br />
    <hr />
    <br />
    <h2 id="s2">HTML Paragraphs</h2><br />
    <p id="t2">HTML paragraphs are defined with the &lt;p&gt; tag:</p><br />
    <div id="one">
        <div>
            <img src={ex11} alt="" id="ex1" />
        </div>
    </div>
      <br />
      <hr />
      <div id='quote'>
                <p>"Any fool can write code that a computer can understand. <br></br>Good programmers write code that humans can understand." <br></br>― Martin Fowler</p>
            </div>
            <div id='footer'>
              <br />
            <br />
            {children}
            </div>
    </>);
}
export function Five({children}){
    return(
        <>
        <h1 id="head1">HTML Link And Image</h1>
        <br />
        <hr />
        <h2 id="s2">HTML Links</h2><br />
        <p id="t2">HTML links are defined with the &lt;a&gt; tag:</p><br />
        <div id="one">
            <h1 id=''>Example</h1>
            <div id="two"><img src={ex12} alt="" id='ex1'/></div><br />
        </div>
        <br />
        <p id="t2">The link's destination is specified in the <jemish>href</jemish> attribute. </p><br />
        <p id="t2">Attributes are used to provide additional information about HTML elements.</p><br />
        <p id="t2">You will learn more about attributes in a later chapter.</p><br />
        <hr />
        <h2 id="s2">HTML Images</h2><br />
        <p id="t2">HTML images are defined with the <jemish >&lt;img &gt;</jemish> tag.</p>
        <p id="t2">        The source file <jemish>(src)</jemish>, alternative text <jemish>(alt)</jemish>, <jemish>width</jemish> , and <jemish>height</jemish> are provided as attributes:</p>
        <br />
        <div id="one">
            <h1 id=''>Example</h1>
            <div id="two"><img src={ex13} alt="" id='ex1'/></div><br />
        </div>
        <br />
        <hr />
        <br />
        <div id='quote'>
                <p>"Any fool can write code that a computer can understand. <br></br>Good programmers write code that humans can understand." <br></br>― Martin Fowler</p>
              </div>
              <div id='footer'>
              <br />
            <br />
            {children}
            </div>
            

        </>
    );
}
export function Six({children}){
    return(
        <>
        
        <h1 id="head1">HTML Page Title</h1>
  <br />
  <hr />
  <p id="t2">
    Every web page should have a page title to describe the meaning of the page.
  </p>
  <br />
  <br />
  <div id="one">
    <h2 id="s2">Example</h2>
    <div id="two">
      <img src={ex14} alt="" id="ex1" />
    </div>
    {/* src="Capture1.PNG"  */}
  </div>
  <br />
  <br />
  <hr /><br /><br />
  <p id="t2">
    The title should describe the content and the meaning of the page.
  </p> <br />
  <p id="t2">
    The page title is very important for search engine optimization (SEO). The
    text is used by search engine algorithms to decide the order when listing
    pages in search results.
  </p><br />
  <p id="t2">
    The <jemish>&lt;titile &gt;</jemish> element:
  </p><br />
  <ul id='t2'>
    <li>defines a title in the browser toolbar</li>
    <li>provides a title for the page when it is added to favorites</li>
    <li>displays a title for the page in search engine-results</li>
  </ul><br />
  <p id="t2">
    So, try to make the title as accurate and meaningful as possible!
  </p><br />
 
  <div id="one">
    <h2 id="s2">HTML Title Tag</h2>
    <div id="two">
      <img src={ex15} alt="" id="ex1" />
    </div>
    <br />
    {/* Capture2.PNG */}
  </div>
  <p id="t2">
    For a complete list of all available HTML tags, visit our HTML Tag
    Reference.
  </p>
<div id='quote'>
                <p>"Any fool can write code that a computer can understand. <br></br>Good programmers write code that humans can understand." <br></br>― Martin Fowler</p>
              </div>
              <div id='footer'>
              <br />
            <br />
            {children}
            </div></>
    )
}
export function Seven({children}){
   return( <>
    <h1 id="head1">HTML Tables</h1>
  <br />
  <hr />
  <p id="t2">
    HTML tables allow web developers to arrange data into rows and columns.
  </p> <br />
  <div id="one">
    <h2 id="s2">Example</h2>
    <div id="two">
      <img src={ex16} alt="" id="ex1" />
    </div>
    <br />
    {/* src="Capture3.PNG"  */}
  </div> <br /><br />
  <hr />
  <h2 id="s2">Define an HTML Table</h2><br />
  <p id="t2">
    A table in HTML consists of table cells inside rows and columns.
  </p><br />
  <div id="one">
    <h2 id="s2">Example</h2>
    <div id="two">
      <img src={ex17} alt="" id="ex1" />
    </div>
    <br />
    {/* src="Capture4.PNG"  */}
  </div> <br /><br />
  <hr /><br />
  <h2 id="s2">Table Cells</h2>
  <p id="t2">
    Each table cell is defined by a <jemish>&lt;td &gt;</jemish> and a{" "}
    <jemish>&lt;/td &gt;</jemish> tag.
  </p>
  <p id="t2">
    Everything between <jemish>&lt;td &gt;</jemish> and{" "}
    <jemish>&lt;/td &gt;</jemish> are the content of the table cell.
  </p><br />
  <div id="one">
    <h2 id="s2">Example</h2>
    <div id="two">
      <img src={ex18} alt="" id="ex1" />
    </div>
    <br />
    {/* src="Capture5.PNG"  */}
  </div><br /><br />
    <div id='quote'>
                <p>"Any fool can write code that a computer can understand. <br></br>Good programmers write code that humans can understand." <br></br>― Martin Fowler</p>
              </div>
              <div id='footer'>
              <br />
            <br />
            {children}
            </div>
    </>)
}
export function Eight({children}){
   return( <>
   <h1 id="head1">HTML Lists</h1>
  <br />
  <hr /><br /><br />
  <p id="t2">
    HTML lists allow web developers to group a set of related items in lists.
  </p>
  <br />
  <br />
  <div id="one">
    <h2 id="s2">Example</h2>
    <div id="two">
      <img src={ex19} alt="" id="ex1" />
    </div>
    <br />
    {/* src="Capture6.PNG"  */}
  </div>
  <br />
  <br />
  <hr />
  <br />
  <div id="one">
    <h2 id="s2">HTML List Tags</h2>
    <div id="two">
      <img src={ex20} alt="" id="ex1" />
    </div>
    <br />
    {/* src="Capture7.PNG"  */}
  </div>
  <br />
  <br />
  <hr />
    <div id='quote'>
                <p>"Any fool can write code that a computer can understand. <br></br>Good programmers write code that humans can understand." <br></br>― Martin Fowler</p>
              </div>
              <div id='footer'>
              <br />
            <br />
            {children}
            </div>
    </>);
}
export function Nine({children}){
   return( <>
     <h1 id="head1">HTML Block and Inline Elements</h1>
  <br />
  <hr /><br />
  <p id="t2">
    Every HTML element has a default display value, depending on what type of
    element it is.
  </p>
  <br />
  <p id="t2">The two most common display values are block and inline.</p>
  <br />
  <hr />
  <br />
  <h2 id="s2">Block-level Elements</h2>
  <br />
  <br />
  <p id="t2">
    A block-level element always starts on a new line, and the browsers
    automatically add some space (a margin) before and after the element.
  </p>
  <br />
  <p id="t2">
    A block-level element always takes up the full width available (stretches
    out to the left and right as far as it can).
  </p>
  <br />
  <p id="t2">
    Two commonly used block elements are: <jemish>&lt;p &gt;</jemish> and{" "}
    <jemish>&lt;div &gt;</jemish>.{" "}
  </p>
  <br />
  <p id="t2">
    The <jemish>&lt;p &gt;</jemish> element defines a paragraph in an HTML
    document.
  </p>
  <br />
  <p id="t2">
    The <jemish>&lt;div &gt;</jemish> element defines a division or a section in
    an HTML document.
  </p>
  <br />
  <div id="one">
    <h2 id="s2">Example</h2>
    <div id="two">
      <img src={ex21} alt="" id="ex1" />
    </div>
    {/* src="Capture8.PNG"  */}
  </div>
  <br />
  <br />
  <hr />
  <br />
  <h2 id="s2">Chapter Summary</h2>
  <br />
  <br />
  <ul id='t2'>
    <li>
      A block-level element always starts on a new line and takes up the full
      width available{" "}
    </li>
    <br />
    <li>
      An inline element does not start on a new line and it only takes up as
      much width as necessary
    </li>
    <br />
    <li>
      The <jemish>&lt;div &gt;</jemish> element is a block-level and is often
      used as a container for other HTML elements
    </li>
    <br />
    <li>
      The <jemish>&lt;span &gt;</jemish> element is an inline container used to
      mark up a part of a text, or a part of a document
    </li>
    <br />
  </ul>
  <br />
  <br />
    <div id='quote'>
                <p>"Any fool can write code that a computer can understand. <br></br>Good programmers write code that humans can understand." <br></br>― Martin Fowler</p>
              </div>
              <div id='footer'>
              <br />
            <br />
            {children}
            </div>
    </>);
}
export function Ten({children}){
   return( <>
   <h1 id="head1">HTML Iframes</h1>
  <br />
  <br />
  <hr />
  <br />
  <br />
  <p id="t2">An HTML iframe is used to display a web page within a web page.</p>
  <br />
  <div id="one">
    <div id="two">
      <img src={ex22} alt="" id="ex1" />
    </div>
    {/* src="Capture9.PNG"  */}
  </div>
  <br />
  <hr />
  <br />
  <h2 id="s2">HTML Iframe Syntax</h2>
  <br />
  <br />
  <p id="t2">
    The HTML <jemish>&lt;iframe &gt;</jemish> tag specifies an inline frame.
  </p>
  <br />
  <p id="t2">
    An inline frame is used to embed another document within the current HTML
    document.
  </p>
  <br />
  <div id="one">
    <h2 id="s2">Syntax</h2>
    <div id="two">
      <img src={ex23} alt="" id="ex1" />
    </div>
    {/* src="Capture10.PNG"  */}
  </div>
  <br />
  <br />
  <p id="t2">
    Tip: It is a good practice to always include a <jemish>title</jemish>{" "}
    attribute for the <jemish>&lt;iframe &gt;</jemish>. This is used by screen
    readers to read out what the content of the iframe is.
  </p>
  <br /><br />
  <div id="one">
    <h2 id="s2">HTML iframe Tag</h2>
    <div id="two">
      <img src={ex24} alt="" id="ex1" />
    </div>
    {/* src="Capture11.PNG"  */}
  </div>
    <div id='quote'>
                <p>"Any fool can write code that a computer can understand. <br></br>Good programmers write code that humans can understand." <br></br>― Martin Fowler</p>
              </div>
              <div id='footer'>
              <br />
            <br />
            {children}
            </div>
    </>)
}