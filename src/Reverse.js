import { Component } from "react";
class Reverse extends Component{
    constructor(props){
        super(props)
        this.state={
            a:0,
        };
        // this.fun=this.fun.bind(this);
        // this.change=this.change.bind(this);
    }
    fun=(e)=>{
        let k=this.state.a;
       let d;
        let s=0;
        while(k>0)
        {
           
            d=k%10;
            s=s*10+d;
            k=Math.floor(k/10);
            
        }
        this.setState({a:s});
        alert(s);
        e.preventDefault();
    }
    change=(e1)=>{
        this.setState({a:e1.target.value});
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
                    <input type="Submit" value="submit"/>
                </form>
                     </div>
                     
        )
    }
};
export default Reverse;