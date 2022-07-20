import { Component } from "react";
import axios from "axios";
import './Login.css';
class Answer_Sheet extends Component{
    constructor() {
        super()
        this.state = {
          year: '',
          branch: '',
          subject: '',
          add_file:'',
          message:'',
          isloggedin: false,
          kalu:[],
    
        };
        this.handleChangeFields = this.handleChangeFields.bind(this)
      }
      componentDidMount(){
        axios.get("http://localhost/selecta.php").then(response=>{
            this.setState({kalu:response.data});
        })
        .catch((err)=>{
            console.log("Failed");
        });
      }
      handleDemo = () => {
        const year = this.state.year;
        const branch = this.state.branch;
        const subject = this.state.subject;
        const add_file = this.state.add_file;
        const data = { year,branch,subject,add_file}
        axios.get('http://localhost/answer.php', { params: data }).then(kalu => {
            console.log(kalu);
            this.setState({
                message: kalu.data.response,
            })
        }).catch(err => {
            console.log('failed')
        })
        // if (this.state.Year && this.state.Branch) {
        //   this.setState({ isloggedin: true })
        // }
        // else {
        //   alert("not logged in")
        // }
        // alert(this.state.Year)
        // alert(this.state.Branch)
        // alert(this.state.Subject)
        // alert(this.state.Add_file)
        // console.log(this.state.Year)
        // console.log(this.state.Branch)
        // console.log(this.state.Subject)
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
              <form  onSubmit={this.handleDemo} encType="multipart/form-data">
                  <label for="chk" aria-hidden="true">Answer Sheet Upload</label>
                  <select name="year" value={this.state.year} onChange={this.handleChangeFields}  required="">
                        <option>Select Year</option>
                        <option>First Year</option>
                        <option>Second Year</option>
                        <option>Third Year</option>
                        <option>Final Year</option>
                    </select>
                    <select name="branch" value={this.state.branch} onChange={this.handleChangeFields}  required="">
                        <option>Select Branch</option>
                        <option>CS</option>
                        <option>EE</option>
                        <option>CE</option>
                        <option>EL</option>
                    </select>
                    <select name="subject" value={this.state.subject} onChange={this.handleChangeFields}  required="">
                        <option>Select Subject</option>
                        <option>Compiler Design</option>
                        <option>DBMS</option>
                        <option>DAA</option>
                        <option>Computer Graphics</option>
                        <option>Machine Learning</option>
                    </select>
                    <input type="file" name="add_file" value={this.state.add_file} onChange={this.handleChangeFields} required="" />    
                    <button>Submit</button>
                  </form>
                  {this.state.kalu.map((ag,key)=>(<div key={key+ag.year}>{key},{ag.year},{ag.branch},{ag.subject},{ag.add_file},{ag.message}</div>))}
                  {
                        this.state.message
                        }
    
              </div>
              <div class="login"/>	
	</div>
              
            </div>
            
        
        );
      }
    }
export default Answer_Sheet;
