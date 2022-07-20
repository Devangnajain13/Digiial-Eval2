import { Component } from "react";
// import Admindash from "./Admindash";
import Adashboard from "./Adashboard";
import './Login.css';
import Fprofile from "./Fprofile";
class Login extends Component{
    constructor()
    {
        super()
        this.state={
            email:'',
            password:'',
            Role:'',
            isloggedin:false

        }
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
				    <form onSubmit={this.handleDemo}>
					<label for="chk" aria-hidden="true">LOGIN</label>
					<input type="email" name="email" value={this.state.email} onChange={this.handleChangeFields} placeholder="Email" required=""/>
					<input type="password" name="password" value={this.state.password} onChange={this.handleChangeFields}  placeholder="Password" required=""/>
                     <input type="text" name="Role" value={this.state.Role} onChange={this.handleChangeFields} placeholder="Role" required=""/> 
                    {/* <div classname="signup1"> */}
                    {/* <select name="Role" value={this.state.Year} onChange={this.handleChangeFields}  required=""> */}
                        {/* <option>Admin</option> */}
                        {/* <option>Teacher</option> */}
                        {/* </select> */}
                        {/* </div> */}
                    {/* <select name="Role"> */}
                    {/* <option value="Admin">Admin</option> */}
                    {/* <option value="Faculty">Faculty</option> */}
                {/* </select> */}
					<button>Login</button>
                    </form>
			    </div>
            <div class="login"/>	
	</div>
  
            </div>
        )
    }
};
export default Login;
