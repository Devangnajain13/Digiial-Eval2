import { Component } from "react";
class Swap extends Component{
    constructor(props){
        super(props)
        this.state={
            a:0,
            b:0,
        };
      //  this.fun=this.fun.bind(this);
        //this.change=this.change.bind(this);
    }
    fun=(e)=>{
        let k=this.state.a;
        let l=this.state.b;
       this.setState({a:l});
       this.setState({b:k});
        //this.setState({a:s});
        
        e.preventDefault();
    }
    change=(e1)=>{
        this.setState({a:e1.target.value});
        
    }
    change1=(e2)=>{
        this.setState({b:e2.target.value});
        
    }
    render(){
        return (
            <div>
                <form onSubmit={this.fun}>
                    <input type="text"
                    value={this.state.a}
                    onChange={this.change}
                    name="t1"
                    /> 
                    <input type="text"
                    value={this.state.b}
                    onChange={this.change1}
                    name="t2"
                    />
                     <input type="Submit" value="submit"/>
                   
                </form>
                     </div>
                     
        )
    }
};
export default Swap;