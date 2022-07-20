import { Component } from "react";
class Primeno extends Component{
    constructor(props){
        super(props)
        this.state={
            a:0,
        };
        this.fun=this.fun.bind(this);
        this.change=this.change.bind(this);
    }
    fun(e){
        let k=this.state.a;
        let f=0;
        for(let i=2;i<Math.floor(k/2);i++)
        {
            if(k%i===0)
            {
                f=1;
                break;
            }
        }
            if(f===1){
            alert('its not a prime no.');
            }
            else{
                alert('its  a primeno');
            }
        
        //this.setState({a:s});
        
        e.preventDefault();
    }
    change(e1){
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
export default Primeno;