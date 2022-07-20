import { Component } from "react";
import './Login.css';
import axios from "axios";
class Registration2 extends Component {
  constructor()
  {
      super()
      this.state={
          'email':'',
          'password':'',
          'cpassword':'',
          'role':'',
          'message':'',
          'isloggedin':true

      }
      this.handleChangeFields=this.handleChangeFields.bind(this)
  }
  handleDemo = () => {
    const t1 = this.state.email;
    const t2 = this.state.password;
    const t3 = this.state.cpassword;
    const t4 = this.state.role;
    const data = { t1, t2, t3, t4 }
    axios.get('http://localhost/registration.php', { params: data }).then(kalu => {
        console.log(kalu);
        this.setState({
            message: kalu.data.response,
        })
    }).catch(err => {
        console.log('failed')
    })
    //   if(this.state.email&&this.state.password){
    //       this.setState({isloggedin:true})
    //   }
    //   else{
    //       alert("not logged in")
    //   }
    //   alert(this.state.email)
    //   alert(this.state.password)
    //   alert(this.state.Role)
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
      return (
          <div>
             
              <div class="main">  	
  <input type="checkbox" id="chk" aria-hidden="true"/>

    <div class="signup">
          <form onSubmit={this.handleDemo}>
        <label for="chk" aria-hidden="true">Registration</label>
        <input type="email" name="email" value={this.state.email} onChange={this.handleChangeFields} placeholder="Email" required=""/>
        <input type="password" name="password" value={this.state.password} onChange={this.handleChangeFields} placeholder="Password" required=""/>
        <input type="password" name="cpassword" value={this.state.cpassword} onChange={this.handleChangeFields}  placeholder="Confirm Password" required=""/>
                  <input type="text" name="role" value={this.state.role} onChange={this.handleChangeFields} placeholder="Role" required=""/>
        <button>Login</button>
                  </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Registration2;
