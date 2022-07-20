import { Component } from "react";
import "./Dashbord.css";
class Teacherdash extends Component {
  render() {
    return (
      <div>
        <nav>
        <div class="logo">Teacher</div>
            <ul>
            <li>
              <a href="/Profile">Profile</a>
            </li>
            <li>
              <a href="/display">Display Bundles</a>
            </li>
            <li>
              <a href="/logout">Log Out</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Teacherdash;
