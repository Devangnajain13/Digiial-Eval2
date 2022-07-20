import {Component} from "react";
import './Login.css';
import Adashboard from "./Adashboard";
import Fprofile from"./Fprofile";
// import { useHistory } from "react-router-dom";
class Navdash2 extends Component{
        constructor()
        {
            super()
            this.state={
                'Email':'',
                'Password':'',
                'Role':'',
                'isloggedin':false

            };
            this.handleChangeFields=this.handleChangeFields.bind(this)
        }
        handleDemo=()=>{
            if(this.state.Role==='Admin'){
                this.setState({isloggedin:true})
            }
            else if(this.state.Role==='Teacher')
            {
                this.setState({isloggedin:true})
            }
            else {
                alert("not logged in")
            }
            // alert(this.state.email)
            // alert(this.state.password)
            // alert(this.state.Role)
            // console.log(this.state.email)
            // console.log(this.state.password)
            // console.log(this.state.Role)
        }
        handleChangeFields=(event)=>{
            this.setState({
                ...this.state,
                [event.target.name]:event.target.value
            })
            console.log(this.state,"formFilled")
        } 
    render(){
        return (this.state.isloggedin?(this.state.Role==='Teacher'?<Fprofile/>:<Adashboard/>):
            <div>
               
                <div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div class="signup">
				    
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required="" value={this.state.Email}
                    onChange={this.change}/>
					<input type="password" name="pswd" placeholder="Password" required="" value={this.state.Password}
                    onChange={this.change2}/>
                    <form onSubmit={this.fun}>
                    <input type="text" name="Role" placeholder="Role" required=""
                     value={this.state.Role}
                    onChange={this.change3}/> 
                    {/* <input type="text" name="Role" placeholder="Role" required=""/> */}
                    {/* <input type="submit" value="submit"/> */}
                    <button>Login</button>
                    </form>
					
			
				
			</div>
            <div class="login"/>	
	</div>
  
            </div>
        )
    }
};
export default Navdash2;