import React from "react";
import mobile from "../../images/mobile.png";
import mobile1 from "../../images/mobile1.png";
import mobile2 from "../../images/mobile2.png";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";
const ProductGallery = () => {
  const images = [
    {
      original: `${mobile}`,
    },
    {
      original: `${mobile1}`,
    },
    {
      original: `${mobile2}`,
    },
    {
      original: `${mobile}`,
    },
  ];

  return (
    <div className="product-gallary-card d-flex justfiy-content-center  align-items-center
    pt-2">
      <ImageGallery
        items={images}
        defaultImage={mobile}
        showThumbnails={false}
        isRTL={true}
        showPlayButton={false}
        renderRightNav={RightButton}
        renderLeftNav={LeftButton}
        showFullscreenButton={false}
      />
    </div>
  );
};

export default ProductGallery;
