import { Component } from "react";
import './marks.css';
class Marks extends Component{
    constructor(){
        super()
        this.state={

            a:0
        }
    }
    render(){
        return (
 
    <div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div class="marks">
                <table>
                    <thead>
                        <tr>
                            <th>Marks</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                       <tr>
                        <td><th><button>0</button></th></td>
                        <td><th><button>1/4</button></th></td>
                            </tr> 
                            <tr>
                            <td><button>1/2</button></td>
                            <td><button>1</button></td>
                            </tr>
                            <tr>
                            <td><button>2</button></td>
                            <td><button>3</button></td>
                            </tr>
                            <tr>
                            <td><button>4</button></td>
                            <td><button>5</button></td>
                            </tr>
                            <tr>
                            <td><button>6</button></td>
                            <td><button>7</button></td>
                            </tr>
                            <tr>
                            <td><button>8</button></td>
                            <td><button>9</button></td>
                            </tr>
                            <tr>
                            <td><button>10</button></td>
                            <td><button>NA</button></td>
                            </tr>
                            <tr>
                            <td><button>corr</button></td>
                            <td><button>incorr</button></td>
                            </tr>
                            <tr>
                            <td><button>undo</button></td>
                            <td><button>del</button></td>
                            </tr>
                    </tbody>
                </table>		
		
	</div>

        
</div>
        );
    }
};
export default Marks;
