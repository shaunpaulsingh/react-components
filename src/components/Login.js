import { Component } from "react";

class Login extends Component{

    render(){
        return(
            <div className="third left">
                <h1>Login Component</h1>
                <div className="card">
                    <img className="card_img" alt="test" src="./cat.jpg" />
                    <h3>Please Login</h3>
                    <form>
                        <label className="label_form">Username</label>
                        <input type="text" className="input_form"></input><br></br>
                        <label className="label_form">Password</label>
                        <input type="password" className="input_form"></input><br></br>
                        <button className="form_btn cancel">Forgot Password</button>
                        <button className="form_btn">Log In</button>
                    </form>
                </div>
                
            </div>
        );
    }
}

export default Login;