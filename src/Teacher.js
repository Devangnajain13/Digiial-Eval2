import { Component } from "react";
import "./Login.css";
class Teacher extends Component {
  constructor() {
    super();
    this.state = {
      Login: "",
      Registration: "",
      Result: "",
      Upload: "",
      Evalution: "",
    };
  }
  render() {
    return (
      <div>
        <div class="main">
          <div class="signup">
            <label for="chk" aria-hidden="true">
              Teacher
            </label>

            <button>Login</button>
            <button>Registration</button>
            <button>Upload</button>
            <button>Evaluation</button>
            <button>Result</button>
          </div>
          <div class="login"/>
        </div>
        
      </div>
    );
  }
}
export default Teacher;
