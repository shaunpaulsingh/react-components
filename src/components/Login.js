import { Component } from "react";

class Login extends Component{

    render(){
        return(
            <div id="Group_7">
                <svg class="Rectangle_3">
                    <rect id="Rectangle_3" rx="15" ry="15" x="0" y="0" width="486" height="577">
                    </rect>
                </svg>

                <img id="cat_ca" alt="img" src={process.env.PUBLIC_URL + '/cat.jpg'}></img>
                    
                <div id="Login__Sign_Up">
                    <span>Login / Sign Up</span>
                </div>
                <div id="This_is_a_title_ca">
                    <span>This is a title</span>
                </div>
                <div id="LOG_IN">
                    <span>LOG IN</span>
                </div>
                <div id="REGISTER">
                    <span>REGISTER</span>
                </div>
                <div id="username">
                    <span>username</span>
                </div>
                <div id="password">
                    <span>password</span>
                </div>
                <svg class="Rectangle_4">
                    <rect id="Rectangle_4" rx="0" ry="0" x="0" y="0" width="345" height="26">
                    </rect>
                </svg>
                <svg class="Rectangle_5">
                    <rect id="Rectangle_5" rx="0" ry="0" x="0" y="0" width="345" height="26">
                    </rect>
                </svg>
                <div id="Forgot_Password">
                    <span>Forgot Password?</span>
                </div>
                <div id="Trouble_Logging_In">
                    <span>Trouble Logging In?</span>
                </div>
                <svg class="Line_1" viewBox="0 0 1 13.5">
                    <path id="Line_1" d="M 0 0 L 0 13.5">
                    </path>
                </svg>
            </div>
        );
    }
}

export default Login;