import { Component } from "react";

class Pagination extends Component{
    constructor(props){
        super(props);

        this.state = {
            addresses: ["https://hellorobotron.com", "https://hellorobotron.com", "https://hellorobotron.com", "https://hellorobotron.com", "https://hellorobotron.com", "https://hellorobotron.com", "https://hellorobotron.com", "https://hellorobotron.com", "https://hellorobotron.com", "https://hellorobotron.com"],
        }
    }
    render(){
        return(
            <div className="third left">
                <h1>Pagination Component</h1>
                <div className="card">
                    <h4>Navigate to a page</h4>
                    
                    <div className="page left">&#x3C;&#x3C;</div>
                    <div className="page left">&#x3C;</div>
                    {this.state.addresses.map((addresses, index) => (
                        <div className="page left"><a href={addresses}>{index}</a></div>
                    ))}

                    <div className="page left">&#x3E;</div>
                    <div className="page left">&#x3E;&#x3E;</div>

                    <div className="clearall"></div>
                </div>
            </div>
        );
    }
}

export default Pagination;