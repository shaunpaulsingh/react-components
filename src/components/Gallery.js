import { Component } from "react";
import {pics} from "./gallerydata"
import GalleryItem from "./GalleryItem"

class Gallery extends Component{

    render(){
        return(
            <div className="third left">
                <h1>Gallery Component</h1>
                <div className="card">
                    <ul>
                    {pics.map((pics, index) => (
                        <GalleryItem pics={pics} key={index}/>
                    ))}
                    </ul>
                    <div className="clearall"></div>
                </div>
                
            </div>
        )
    }
}

export default Gallery;