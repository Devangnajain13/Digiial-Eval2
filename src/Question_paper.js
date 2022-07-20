import { Component } from "react";
import axios from "axios";
import './Login.css';
class Question_paper extends Component{
    constructor() {
        super()
        this.state = {
          year: '',
          branch: '',
          subject: '',
          add_file:'',
          isloggedin: false,
          kalu:[],
    
        };
        this.handleChangeFields = this.handleChangeFields.bind(this)
      }
      componentDidMount(){
        axios.get("http://localhost/insertq.php").then(response=>{
            this.setState({kalu:response.data});
        })
        .catch((err)=>{
            console.log("Failed");
        });
    }
      handleDemo = () => {
        const t1 = this.state.year;
        const t2 = this.state.branch;
        const t3 = this.state.subject;
        const t4 = this.state.add_file;
        const data = { t1, t2, t3, t4 }
        axios.get('http://localhost/question_paper.php', { params: data }).then(kalu => {
            console.log(kalu);
            this.setState({
                message: kalu.data.response,
            })
        }).catch(err => {
            console.log('failed')
        })
       
      }
      handleChangeFields = (event) => {
        this.setState({
          ...this.state,
          [event.target.name]: event.target.value
        })
        console.log(this.state, "formFilled")
      }
      render() {
        return (
          <div>
    
            <div class="main">
              <input type="checkbox" id="chk" aria-hidden="true" />
    
              <div class="signup">
                <form onSubmit={this.handleDemo}>
                  <label for="chk" aria-hidden="true">Question Sheet Upload</label>
                  <select name="year" value={this.state.year} onChange={this.handleChangeFields} placeholder='year' required="">
                        <option>Select Year</option>
                        <option>First Year</option>
                        <option>Second Year</option>
                        <option>Third Year</option>
                        <option>Final Year</option>
                    </select>
                    <select name="branch" value={this.state.branch} onChange={this.handleChangeFields} placeholder='branch' required="">
                        <option>Select Branch</option>
                        <option>CS</option>
                        <option>EE</option>
                        <option>CE</option>
                        <option>EL</option>
                    </select>
                    <select name="subject" value={this.state.subject} onChange={this.handleChangeFields} placeholder='subject' required="">
                        <option>Select Subject</option>
                        <option>Compiler Design</option>
                        <option>DBMS</option>
                        <option>DAA</option>
                        <option>Computer Graphics</option>
                        <option>Machine Learning</option>
                    </select>
                    <input type="file" name="Add_file" value={this.state.Add_file} onChange={this.handleChangeFields} required="" />    
                    <button onClick={this.handleChangeFields}>Submit</button>
                   </form>

            {this.state.kalu.map((ag,key)=>(<div key={key+ag.year}>{key},{ag.year},{ag.branch},{ag.subject},{ag.add_file}</div>))}
                {
                  this.state.message
                }
              </div>
              {/* <div class="login"/>	 */}
	</div>
            
          </div>
        );
      }
    }
export default Question_paper;
