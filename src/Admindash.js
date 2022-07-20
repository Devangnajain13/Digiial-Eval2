import { Component } from "react";
import "./Dashbord.css";
class Admindash extends Component {
  render() {
    return (
      <div>
        <nav>
          <div class="logo">Admin</div>
          <ul>
            <li>
              <a href="/faculty">Facultydetails</a>
            </li>
            <li>
              <a href="/question">Question Paper</a>
            </li>
            <li>
              <a href="/answer">Answer Sheet</a>
            </li>
            {/* <li>
              <a href="/result">View Result</a>
            </li> */}
            <li>
              <a href="/logout">Log Out</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Admindash;
