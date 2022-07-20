import { Component } from "react";
// import './Evaluation.css';
import './Question.css';
class Evaluation extends Component{
    constructor(){
        super()
        this.state={
            'Subject':'',
            'Page_No':'',
            'Marks':'',
            'More_Tools':''
        }
    }
    render(){
        return (
            <div>

    <table border="2" width="100%">
        <tr>
            <td><button>BACK</button> <pre class="tab1">ID : 00</pre>  <pre class="tab1">SUBJECT :XX</pre> <pre class="tab1">TIME : 00.00</pre> </td>
        </tr>
    </table>
    <table align="left
    ">
          <tr >
            <th colspan="2">Answers</th>
          </tr>
          <tr>
            <td>
              <button>Masks 1</button>
            </td>
            <td>
              <button>Marks 2</button>
            </td>
          </tr>
          <tr>
            <td>
              <button>Masks 3</button>
            </td>
            <td>
              <button>Marks 4</button>
            </td>
          </tr>
          <tr>
            <td>
              <button>Masks 5</button>
            </td>
            <td>
              <button>Marks 6</button>
            </td>
          </tr>
          <tr>
            <td>
              <button>Masks 7</button>
            </td>
            <td>
              <button>Marks 8</button>
            </td>
          </tr>
          <tr>
            <td>
              <button>Masks 9</button>
            </td>
            <td>
              <button>Marks 10</button>
            </td>
          </tr>
          <tr>
            <td>
              <button>Right</button>
            </td>
            <td>
              <button>Wrong</button>
            </td>
          </tr>
          <tr>
            <td>
              <button>Masks 1</button>
            </td>
            <td>
              <button>Marks 2</button>
            </td>
          </tr>
          <tr>
            <td>
              <button>Masks 3</button>
            </td>
            <td>
              <button>Marks 4</button>
            </td>
          </tr>
          <tr>
            <td>
              <button>Masks 5</button>
            </td>
            <td>
              <button>Marks 6</button>
            </td>
          </tr>
         
        </table>
        
    <table align="right">
          <tr>
            <th>Questions</th>
            <th>Out of</th>
            <th>Score</th>
          </tr>
          <tr>
            <td><button>Question 1</button></td>
            <td>10</td>
            <td></td>
          </tr>
          
          <tr>
            <td><button>Question 2</button></td>
            <td>10</td>
            <td></td>
          </tr>
          <tr>
            <td><button>Question 3</button></td>
            <td>10</td>
            <td></td>
          </tr>
          <tr>
            <td><button>Question 4</button></td>
            <td>10</td>
            <td></td>
          </tr>
          <tr>
            <td><button>Question 5</button></td>
            <td>10</td>
            <td></td>
          </tr>
          <tr>
            <td><button>Question 6</button></td>
            <td>10</td>
            <td></td>
          </tr>
          <tr>
            <td><button>Question 7</button></td>
            <td>10</td>
            <td></td>
          </tr>
          <tr>
            <td><button>Question 8</button></td>
            <td>10</td>
            <td></td>
          </tr>
          <tr>
            <td><button>Question 9</button></td>
            <td>10</td>
            <td></td>
          </tr>
          <tr>
            <td><button>Question 10</button></td>
            <td>10</td>
            <td></td>
          </tr>
        </table>
    {/* <table align="left" border="2" width="15%">
    
       
        <tr>
            <th>1/2</th>
            <th>1</th>
        </tr>
        <tr>
            <th>2</th>
            <th>3</th>
        </tr>
        <tr>
            <th>4</th>
            <th>5</th>
        </tr>
        <tr>
            <th>6</th>
            <th>7</th>
        </tr>
        <tr>
            <th>8</th>
            <th>9</th>
        </tr>
        <tr>
            <th>10</th>
            <th>NA</th>
        </tr>
        <tr>
            <th></th>
            <th>X</th>
        </tr>
        <tr>
            <th>back</th>
            <th>delete</th>
        </tr>
    </table>
    <table  border="2" width="%">
        <tr>
            <th>Question</th>
            <th>Out Of</th>
            <th>Score</th>
        </tr>
        <tr>
            <td>Q1</td>
            <td>10</td>
            <td>5</td>
        </tr>
        <tr>
            <td>Q2</td>
            <td>10</td>
            <td>7</td>
        </tr>
        <tr>
            <td>Q3</td>
            <td>5</td>
            <td>5</td>
        </tr>
        <tr>
            <td>Q4</td>
            <td>5</td>
            <td>3</td>
        </tr>
        <tr >
            <th colspan="3">TOTAL SCORE</th>
        </tr>
    </table>
    <table class="table" border="2" rules="no">
        <tr>
            <th colspan="5"><button>Page NO.</button></th>
        </tr>
        <tr class="tab2" rowspan="10" colspan="10">
            <th class="span" >ANSWER SHEET</th>
        </tr>


    </table> */}
    

            </div>
        )
    }
};
export default Evaluation;
