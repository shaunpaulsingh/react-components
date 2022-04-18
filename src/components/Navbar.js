import { Component } from "react";

class Navbar extends Component{

    render(){
        return(
            <div className="padding">
                <h1>Navbar Component</h1>
                <div className="navbar">
                    <p className="left logo">COMPANY LOGO</p>
                    <ul className="right logo">
                        <li className="right v_space">HOME</li>
                        <li className="right v_space">ABOUT</li>
                        <li className="right v_space">CONTACT</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Navbar;