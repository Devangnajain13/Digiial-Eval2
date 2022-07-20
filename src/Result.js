import { Component } from "react";
class Result extends Component{
    constructor(){
        super()
        this.state={
            'Roll number':''
        }
    }
    render(){
        return (
            <div>
                     
                     <div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div class="signup">
				    
					<label for="chk" aria-hidden="true">Result</label>
					<input type="text" name="Rollno" placeholder="Roll Number" required=""/>
					
					<button>Submit</button>
			
				
			</div>
            <div class="login"/>
			
		
	</div>
            </div>
        )
    }
};
export default Result;
