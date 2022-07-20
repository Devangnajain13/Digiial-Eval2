import { Component } from "react";
// const Axios = require('axios');
import axios from "axios";
import './Login.css';
class Faculty extends Component {
    constructor() {
        super()
        this.state = {
            Name: '',
            Phone: '',
            Address: '',
            Specialization: '',
            message: '',
            isloggedin: false,
            kalu:[],

        };
        this.handleChangeFields = this.handleChangeFields.bind(this)
    }
    componentDidMount(){
        axios.get("http://localhost/selectf.php").then(response=>{
            this.setState({kalu:response.data});
        })
        .catch((err)=>{
            console.log("Failed");
        });
    }
    handleDemo = () => {
        const t1 = this.state.Name;
        const t2 = this.state.Phone;
        const t3 = this.state.Address;
        const t4 = this.state.Specialization;
        const data = { t1, t2, t3, t4 }
        axios.get('http://localhost/faculty.php', { params: data }).then(kalu => {
            console.log(kalu);
            this.setState({
                message: kalu.data.response,
            })
        }).catch(err => {
            console.log('failed')
        })

        // if (this.state.Address && this.state.Phone) {
        //     this.setState({ isloggedin: true })
        // }
        // else {
        //     alert("not logged in")
        // }
        // alert(this.state.Name)
        // alert(this.state.Phone)
        // alert(this.state.Address)
        // alert(this.state.Specialization)
        // console.log(this.state.Address)
        // console.log(this.state.Phone)
        // console.log(this.state.Address)
    }
    handleChangeFields = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
        // console.log(this.state, "formFilled")
    }
    render() {
        return (
            <div>

                <div class="main">
                    <input type="checkbox" id="chk" aria-hidden="true" />

                    <div class="signup">
                    {this.state.kalu.map((ag,key)=>
                        <form onSubmit={this.handleDemo}>
                            
                            <label for="chk" aria-hidden="true">Faculty</label>
                            <input type="text" name="Name" value={this.state.Name} onChange={this.handleChangeFields} placeholder={ag.name} required="" />
                            <input type="text" name="Phone" value={this.state.Phone} onChange={this.handleChangeFields} placeholder={ag.phone} required="" />
                            <input type="text" name="Address" value={this.state.Address} onChange={this.handleChangeFields} placeholder={ag.address} required="" />
                            <select name="Specialization" value={this.state.Specialization} onChange={this.handleChangeFields} placeholder={ag.specialization} required="" >
                                <option>Select Specialization</option>
                                <option>Compiler Design</option>
                                <option>DBMS</option>
                                <option>DAA</option>
                                <option>Computer Graphics</option>
                                <option>Machine Learning</option>
                            </select>
                            <button onClick={this.handleChangeFields}>Submit</button>
                        </form>
                    )}
                        {/* {this.state.kalu.map((ag,key)=>(<div key={key+ag.Name}>{key},{ag.Name},{ag.Phone},{ag.Address},{ag.Specialization}</div>))} */}
                        {
                        this.state.message
                        }

                    </div>
                </div>
            </div>
        )
    }
};
export default Faculty;
