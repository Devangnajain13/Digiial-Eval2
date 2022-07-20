import { Component } from "react";
import './Login.css';
class Admin extends Component{
    constructor(){
        super()
        this.state={
            'Login':'',
            'Registration':'',
            'faculty Details':''
        }
    }
    render(){
        return (
            <div>

                     
<div class="main">  	


			<div class="signup">
				    
					<label for="chk" aria-hidden="true">Admin</label>
                    <button>Faculty_Details</button>
                    <button>Upload_Question_paper</button>
                    <button>Upload_Answer_sheets</button>
				
			</div>
            <div class="login"/>

		
	</div>
            </div>
        )
    }
};
export default Admin;
