import './face.css';
import { Component } from "react";

class Facebook extends Component {
  

    render() {
        return (
            <header>

         <div className="header"><h1>facebook</h1>
         <div className="email"><label>Email</label><br></br><input type="text" name="email"/>
       
          <div className="password"><label>Password</label><br></br><input type="password" name="password"/>
         <a href="#">forgot account</a>
          </div>
            
          <div className="login-button">
            <input type="submit" value="log in"/>
          </div>
          </div>
          </div>
          <div className="content clearfix">
            <div className="f-connect">

            
            <h2>Facebook helps you connect and share with the people in your life</h2>
            </div>
            <div className="create-acc">
            <h2>Create an account</h2>
            <p>It's free and always will be</p>
            <div className="account">
                <form>
                    <input type="text" name="firstname" placeholder="First Name"/>
                    <input type="text" name="surname" placeholder="Surname"/><br></br>
                    <input type="text" name="mobile no. or email address" placeholder="mobile or email"/><br></br>
                    <input type="text" name="Re-enter mobile or email address" placeholder="Re-enter mobile or email address"/><br></br>
                    <input type="text" name="new password" placeholder="new password"/><br></br>
                </form>
            </div>
            </div>
          </div>
         </header> 
        );
    }
}
export default Facebook;