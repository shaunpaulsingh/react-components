import { Component } from "react";

class Settings extends Component{

    render(){
        return(
            <div className="third left">
                <h1>Settings Component</h1>
                <div className="form_component settings">
                    <h3>Settings Widget</h3>
                    <form>
                        <label>Enter your name</label>
                        <input type="text" className="input_form"></input><br></br>
                        <label>What do you use this machine for</label>
                        <input type="checkbox"></input>
                        <label>Work</label>
                        <input type="checkbox"></input>
                        <label>School</label>
                        <input type="checkbox"></input>
                        <label>General</label><br></br>
                        <label>Set local time and date</label>
                        <input className="input_form" type="datetime-local" id="meeting-time" name="meeting-time" value="2018-06-12T19:30" min="2018-06-07T00:00" max="2018-06-14T00:00"></input><br></br>
                        <label>Choose a window color</label>
                        <input className="input_form" type="color" id="head" name="head" value="#e66465"></input><br></br>
                        <label>Volume</label>
                        <input type="range" id="volume" name="volume" min="0" max="11"></input><br></br>
                        <label>Choose a pet:</label>

                        <select className="input_form" name="pets" id="pet-select">
                            <option value="">--Please choose an option--</option>
                            <option value="dog">Dog</option>
                            <option value="cat">Cat</option>
                            <option value="hamster">Hamster</option>
                            <option value="parrot">Parrot</option>
                            <option value="spider">Spider</option>
                            <option value="goldfish">Goldfish</option>
                        </select>
                        
                    </form>
                </div>
            </div>
        );
    }
}

export default Settings;