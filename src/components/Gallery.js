import { Component } from "react";
import {pics} from "./gallerydata"
import GalleryItem from "./GalleryItem"

class Gallery extends Component{

    render(){
        return(
            <div className="third left">
                <h1>Gallery Component</h1>
                <div className="card">
                    <ul className="zero">
                    {pics.map((pics, index) => (
                        <GalleryItem pics={pics} key={index}/>
                    ))}
                    <div className="clearall"></div>

                    </ul>
                </div>
                
            </div>
        )
    }
}

export default Gallery;