import { Component } from "react";

class Navbar extends Component{

    render(){
        return(
            <div className="padding">
                <h1>Navbar Component</h1>
                <div className="navbar">
                    <p className="left logo">COMPANY LOGO</p>
                    <ul className="right">
                        <li className="right v_space">Nav 1</li>
                        <li className="right v_space">Nav 2</li>
                        <li className="right v_space">Nav 3</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Navbar;