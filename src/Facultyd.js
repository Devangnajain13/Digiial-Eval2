import { Component } from "react";
import './Login.css';
class Faculty extends Component{
    constructor()
    {
        super()
        this.state={
            'Name':'',
            'Phone':'',
            // 'Address':'',
            'Specialization':'',
            'isloggedin':false

        }
        this.handleChangeFields=this.handleChangeFields.bind(this)
    }
    handleDemo=()=>{
        if(this.state.Phone&&this.state.Name&&this.state.Specialization){
            this.setState({isloggedin:true})
        }
        else{
            alert("not logged in")
        }
        alert(this.state.Name)
        alert(this.state.Phone)
        // alert(this.state.Address)
        alert(this.state.Specialization)
        // console.log(this.state.Address)
        // console.log(this.state.Phone)
        // console.log(this.state.Address)
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
					<label for="chk" aria-hidden="true">FACULTY</label>
					<input type="Name" name="Name" value={this.state.Name} onChange={this.handleChangeFields} placeholder="Name" required=""/>
					<input type="Phone" name="Phone" value={this.state.Phone} onChange={this.handleChangeFields}  placeholder="Phone Number" required=""/>
                    {/* <input type="Address" Name="Address" value={this.state.Address} onChange={this.handleChangeFields} placeholder="Address" required=""/> */}
                    <input type="Specialization" name="Specialization" value={this.state.Specialization} onChange={this.handleChangeFields} placeholder="Specialization" required=""/>
					<button>Submit</button>
                    </form>
				
			    </div>
            </div>
        </div>
        )
    }
};
export default Faculty;
