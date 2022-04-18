import { Component } from "react";

class Gallery extends Component{

    render(){
        return(
            <div className="third left">
                <h1>Gallery Component</h1>
                <div className="card">
                    <div className="gallery_item">
                        <h3>Image Label</h3>
                        <img className="gallery_img" src="./cat.jpg" />
                    </div>
                    <div className="gallery_item">
                        <h3>Image Label</h3>
                        <img className="gallery_img" src="./cat.jpg" />
                    </div>
                    <div className="gallery_item">
                        <h3>Image Label</h3>
                        <img className="gallery_img" src="./cat.jpg" />
                    </div>
                    <div className="gallery_item">
                        <h3>Image Label</h3>
                        <img className="gallery_img" src="./cat.jpg" />
                    </div>
                    <div className="gallery_item">
                        <h3>Image Label</h3>
                        <img className="gallery_img" src="./cat.jpg" />
                    </div>
                    <div className="gallery_item">
                        <h3>Image Label</h3>
                        <img className="gallery_img" src="./cat.jpg" />
                    </div>
                    <div className="clearall"></div>
                </div>
                
            </div>
        );
    }
}

export default Gallery;