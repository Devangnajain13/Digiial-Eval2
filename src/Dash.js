import React,{Component} from "react";
import Axios from "axios";
class Dash extends Component{
    constructor(){
        super();
        this.state={
            kalu:[],
        };
    }
    componentDidMount(){
        Axios.get("http://localhost/select.php").then(response=>{
            this.setState({kalu:response.data});
        })
        .catch((err)=>{
            console.log("Failed");
        });
    }
    render()
    {
        return(
            <div>
            {this.state.kalu.map((ag,key)=>(<div key={key+ag.Name}>{key},{ag.Name},{ag.age},{ag.sal}</div>
            ))}
            </div>
        );
    }
}
export default Dash;