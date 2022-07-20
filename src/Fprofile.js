import React, { Component } from "react";
import './Fprofile.css';
// import img1 from'./C:\Users\ASUS\bhalu\src\OIP.jpeg'
class Fprofile extends Component{
    constructor(){
        super()
        this.state={
            'Name':'',
            'Specialization':'',
            'Bundles':'',
            'Evaluation_screen':''
        }
    }
    render(){
        return (
            <body>

                     
<div class="container">  	


			<div class="main">
				    <div className="topbar">
                        <a href=""><button>Logout</button></a>
                        {/* <a href=""><button><h2>Support</h2></button></a> */}
                        {/* <a href=""><button><h2>Work</h2></button></a> */}
                        {/* <a href=""><button><h2>Home</h2></button></a> */}

                    </div>
                    <div className="row">
                        <div className="col-md-4 mt-1">
                            <div className="card text-center sidebar">
                                <div className="card-body">
                                    <img src="/image.jpeg" className="rounded-circle" width="150"/>
                                    <div className="mt-3">
                                        <h1>DEVANGNA JAIN</h1>
                                        <h2>B.tech CSE</h2>
                                        
                                        {/* <a href=""><button>Home</button></a>  */}
                                        <a href=""><button>Bundles</button></a>  
                                        {/* <a href=""><button>Settings</button></a> */}
                                        {/* <a href=""><button>Log Out</button></a> */}
                                       
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-8 mt-1">
                            <div className="card mb-3 content">
                                <h1 className="m-3 pt-3">ABOUT</h1>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <h3>FULL NAME</h3>
                                        </div>
                                        <div className="col-md-9 text-secondary">
                                        <h4>Devangna Jain</h4>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <div classNAme="col-md-3">
                                            <h3>EMAIL</h3>
                                        </div>
                                        <div className="col-md-9 text-secondary">
                                            <h4>abc@gmail.com</h4>
                                        </div>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <h3>PHONE</h3></div>
                                                <div className="col-md-9 text-secondary">
                                                    <h4>0098574843</h4>
                                                </div>
                                                </div>
                                                <hr/>
                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <h3>ADDRESS</h3>
                                                    </div>
                                                    <div className="col-md-9 text-secondary">
                                                        <h4>xyz</h4>
                                                    </div>
                                                </div>
                                                <hr/>
                                </div>
                            </div>
                            {/* <div className=" card mb-3 content"> */}
                                {/* <h1 className="m-3">ACTIVITIES</h1> */}
                                {/* <div className="card-body"> */}
                                    {/* <div className="row"> */}
                                        {/* <div className="col-md-3"> */}
                                        {/* <button>Bundles</button> */}
                                        {/* </div> */}
                                        {/* <div className="col-md-9 text-secondary"> */}
                                            {/* <button>Evaluation Screen</button> */}
                                        {/* </div>   */}
                            {/* </div> */}
                        </div>
                    </div>
					{/* <label for="chk" aria-hidden="true">Admin</label> */}
                    {/* <button>Faculty_Details</button> */}
                    {/* <button>Upload_Question_paper</button> */}
                    {/* <button>Upload_Answer_sheets</button> */}
				
			{/* </div> */}
            {/* <div class="login"/> */}

		
	{/* </div>  */}
            </body>
        )
    }
};
export default Fprofile;
