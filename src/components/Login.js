import { Component } from "react";

class Login extends Component{

    render(){
        return(
            <div className="third left">
                <h1>Login Component</h1>
                <div className="card">
                    <img className="card_img" src="./cat.jpg" />
                    <h3>Please Login</h3>
                    <form>
                        <label>Username</label>
                        <input type="text"></input><br></br>
                        <label>Password</label>
                        <input type="password"></input><br></br>
                        <button>Log In</button>
                    </form>
                </div>
                
            </div>
        );
    }
}

export default Login;