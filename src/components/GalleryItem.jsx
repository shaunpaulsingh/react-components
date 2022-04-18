import { useRef } from "react";

const GalleryItem = ({pics}) => {
  const { headline, image, description} = pics;
  const contentEl = useRef();

  return (
    <li className="left gallery_container" ref={contentEl}>
      <div className="gallery_item">
        <h4>{headline}</h4>
        <img className="gallery_img" src={image}></img>
        <p className="gallery_desc">{description}</p>
      </div>
    </li>
  );
};

export default GalleryItem;