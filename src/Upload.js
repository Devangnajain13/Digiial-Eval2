import { Component } from "react";
class Upload extends Component{
    constructor(){
        super()
        this.state={
            'Scan':'',
            'Upload':''
        }
    }
    render(){
        return (
            <div>
                     
<div class="main">  	
			<div class="signup">
				    
					<label for="chk" aria-hidden="true">Upload</label>
					
					<button>SCAN</button>
                    <button>UPLOAD</button>
                
			
				
			</div>

			<div class="login"/>
				
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
					<button>Login</button>
			
		
	</div>
            </div>
        )
    }
};
export default Upload;
