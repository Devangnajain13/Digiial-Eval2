import { Component } from "react";
import './Login.css';
class Dashbord extends Component{
    constructor(){
        super()
        this.state={
            'ADMIN':'',
            'TEACHER':''   
        }
    }
    render(){
        return (
            <div>

                     
<div class="main">  	


			<div class="signup">
				    
					<label for="chk" aria-hidden="true">Dashbord</label>
					
					<button>ADMIN</button>
					<button>TEACHER</button>
			
				
			</div>
            <div class="login"/>

		
	</div>
            </div>
        )
    }
};
export default Dashbord;
