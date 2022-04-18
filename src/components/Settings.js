import { Component } from "react";

class Settings extends Component{

    render(){
        return(
            <div className="third left">
                <h1>Settings Component</h1>
                <div className="form_component">
                    <h3>Settings Widget</h3>
                    <form>
                        <label>Label for field</label>
                        <input type="text"></input><br></br>
                        <label>Choose your options</label>
                        <input type="checkbox"></input>
                        <label>Option 1</label>
                        <input type="checkbox"></input>
                        <label>Option 2</label>
                        <input type="checkbox"></input>
                        <label>Option 3</label><br></br>
                        <label for="meeting-time">Choose a time for your appointment:</label>
                        <input type="datetime-local" id="meeting-time" name="meeting-time" value="2018-06-12T19:30" min="2018-06-07T00:00" max="2018-06-14T00:00"></input><br></br>
                        <label for="head">Choose a color</label>
                        <input type="color" id="head" name="head" value="#e66465"></input><br></br>
                        <label for="volume">Volume</label>
                        <input type="range" id="volume" name="volume" min="0" max="11"></input><br></br>
                        <label for="fuel">Fuel level:</label>
                        <meter id="fuel" min="0" max="100" low="33" high="66" optimum="80" value="50">at 50/100</meter><br></br>
                        <label for="pet-select">Choose a pet:</label>

                        <select name="pets" id="pet-select">
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