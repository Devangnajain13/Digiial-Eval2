// import React,{Component} from "react";
import './Login.css';
import React from "react";
import Adashboard from "./Adashboard";
import Faculty from "./Faculty";
// import { useHistory } from "react-router-dom";
class Navdemo extends React.Component{
        constructor(props)
        {
            super(props)
            this.state={
                'userName':'',
                'password':'',
                'Role':''
            };
            this.fun=this.fun.bind(this);
        }
        fun=(e)=>{
            let i=this.state.userName;
            let j=this.state.password;
            let k=this.state.Role;
            this.setState({userName:i});
            this.setState({password:j});
             this.setState({Role:k});
            
            alert(i);
            alert(j);
            alert(k);
            if(this.state.Role==='Admin')
             {
                <Adashboard/>
             }
             else if(this.state.Role==='Faculty'){
                <Faculty/>
             }
             else{
                <Navdemo/>
             }
            // e.preventDefault();
        }
    /* change=(event)=>{
            this.setState({
                ...this.state,
                [event.target.name]:event.target.value
            })
            console.log(this.state,"formFilled")*/
        change=(e1)=>{
            this.setState({userName:e1.target.value});
            
        }
        change2=(e2)=>{
            this.setState({password:e2.target.value});
            
        }
        change3=(e3)=>{
            this.setState({Role:e3.target.value});
            
        }
    
    render(){
        return (//this.state.Role?<Adashboard/>:<Faculty/>
           <div>
               
                <div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div class="signup">
				    
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required="" value={this.state.userName}
                    onChange={this.change}/>
					<input type="password" name="pswd" placeholder="Password" required="" value={this.state.password}
                    onChange={this.change2}/>
                    <form onSubmit={this.fun}>
                    <input type="text" name="Role" placeholder="Role" required=""
                     value={this.state.Role}
                    onChange={this.change3}/> 
                    {/* <input type="text" name="Role" placeholder="Role" required=""/> */ }
                    {/* /* <input type="submit" value="submit"/>  */}
                    <button>Login</button>
                    </form>
					 
			
				
			</div>
            <div class="login"/>	
           
	</div>
       
  
            </div>);
            
    }
}this.state.Role?<Adashboard/>:<Faculty/>
        
export default Navdemo;