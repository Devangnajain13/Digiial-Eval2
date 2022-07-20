import React from "react";
import Kaddu from "./Kaddu";
class Demo extends React.Component{
    constructor()
    {
        super()
        this.state={
            'email':'',
            'password':'',
            'isloggedin':true

        }
        this.handleChangeFields=this.handleChangeFields.bind(this)
    }
    handleDemo=()=>{
        if(this.state.email&&this.state.password){
            this.setState({isloggedin:true})
        }
        else{
            alert("not logged in")
        }
    }
    handleChangeFields=(event)=>{
        this.setState({
            ...this.state,
            [event.target.name]:event.target.value
        })
        console.log(this.state,"formFilled")
    }
    render(){
        return(this.state.isloggedin?<Kaddu/>:<div>
                     
        <div class="main">  	
<input type="checkbox" id="chk" aria-hidden="true"/>

<div class="signup">
       
       <label for="chk" aria-hidden="true">Result</label>
       <input type="text" name="email" placeholder="email" required=""/>
       <input type="text" name="password" placeholder="password" required=""/>
       <input type="text" name="isloggedin" placeholder="isloggedin" required=""/>
       <button>Submit</button>

   
</div>
<div class="login"/>


</div>
</div>)
    };
}
export default Demo