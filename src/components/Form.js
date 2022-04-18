import { Component } from "react";

class Form extends Component{

    render(){
        return(
            <div className="third left">
                <h1>Form Component</h1>
                <form className="form_component">
                    <label className="label_form">This is a text label</label>
                    <input type="text" className="input_form"></input><br></br>
                    <label className="label_form">This is a text label</label>
                    <input type="textarea" className="input_form"></input><br></br>
                    <label className="label_form">This is a text label</label>
                    <input type="checkbox" className="input_form"></input><br></br>
                    <button className="form_btn cancel">This is a cancel button.</button>
                    <button className="form_btn">This is a button.</button>
                </form>
            </div>
        );
    }
}

export default Form;