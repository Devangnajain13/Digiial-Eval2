import React, { Component } from "react";
import './Login.css';
import Question_paper from "./Question_paper";
import Faculty from "./Faculty";
class Adashboard extends Component{
    constructor(){
        super()
        this.state={
            'Faculty_details':'',
            'Question_paper':'',
            'Answer_sheet':''
        }
    }

    
 /* this.fun=this.fun.bind(this);
    }
    fun=(e)=>{
        let i=this.state.Faculty_details;
        let j=this.state.Question_paper;
        let k=this.state.Answer_sheet;
        this.setState({Faculty_details:i});
        this.setState({Question_paper:j});
         this.setState({Answer_sheet:k});
        //this.setState({a:s});
        alert(i);
        alert(j);
        alert(k);
        // e.preventDefault();
    }
    change=(e1)=>{
        this.setState({Faculty_details:e1.target.value});
        
    }
    change2=(e2)=>{
        this.setState({Question_paper:e2.target.value});
        
    }
    change3=(e3)=>{
        this.setState({Answer_sheet:e3.target.value});
        
    }*/
    
            /*<div class="main">
            <div className="topbar1">
                <div className="logo"><h1>ADMIN</h1>
           <ul>
            
             
                <div className="row1">
              <a href="/faculty"><button1>Faculty</button1></a>
            
            
              <a href="/question"><button1>Question paper</button1></a> 
          </div> <li>
              <a href="/answer"><button1>Answer_sheet</button1></a>
            </li>
            {/* <li>
              <a href="/result">View Result</a>
            </li> */
            /*<li>
              <a href="/logout"><button1>Log out</button1></a>
           </li>
            
            </ul>*/ 
              //</div> 
        
       render()
       {
        return (  
             <div>
               <div class="main">  	 
       <input type="checkbox" id="chk" aria-hidden="true"/>

           <div class="signup">
                   
                   <label for="chk" aria-hidden="true">ADMIN</label>
                   {/* <input type=" Faculty_details" name="Faculty_details" placeholder="Faculty_details" required="" value={this.state.Faculty_details} 
                   onChange={this.change}/>
                   <input type="Question_paper" name="Question_paper" placeholder="Question_paper" required="" value={this.state.Question_paper}
                   onChange={this.change2}/>
        <form onSubmit={this.fun}>*/}
        <div className="row1">
                <button>Faculty Details</button>  
                   <button>Question_paper</button>  
                   <button>Answer_sheet</button>  
                   {/* <input type="Answer_sheet" name="Answer_sheet" placeholder="Answer_sheet" required=""  */}
                    {/* value={this.state.Answer_sheet} */}
                   {/* onChange={this.change3}/>  */}
                   {/* <input type="text" name="Role" placeholder="Role" required=""/>  */}
                   {/* <input type="submit" value="submit"/>  */}
                   {/* </form>  */}
                   
           
               
           </div>
           <div class="Admin"/>	
        </div>
        </div>
         </div>
        // </div>
         )
           }
        };
        
        
export default Adashboard;
