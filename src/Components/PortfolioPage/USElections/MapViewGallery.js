import { useState } from "react";
import "./USElections.css";


const MapViewGallery = ({imagesTopRaw, imagesBottomRaw, mainImageRaw }) => {

  const [imagesTop, setImagesTop] = useState(imagesTopRaw)  
  const [imagesBottom, setImagesBottom] = useState(imagesBottomRaw)  
  const [mainImage, setMainImage] = useState(mainImageRaw)

  return (
    <div id='us-elections-container' >
        <h1>The page</h1>
        <div className="grid-container">
            {
                imagesTop.map((img, idx) => (
                    <div 
                        className="grid-item" 
                        style={{ transform: `rotate(${img.rotate}deg)` }}
                        onMouseEnter={() =>{             
                            const imagesCopy = [...imagesTop] 
                            imagesCopy[imagesCopy.findIndex(element => element.id === img.id)].rotate = 0
                            setImagesTop(imagesCopy)
                        }} 
                        onMouseLeave={() => {
                            const imagesCopy = [...imagesTop] 
                            // imagesCopy[idx].rotate =  Math.random()*20 - 10 
                            imagesCopy[imagesCopy.findIndex(element => element.id === img.id)].rotate = Math.random()*20 - 10 
                            setImagesTop(imagesCopy)
                        }} 
                        onClick={() => {
                            // Swap the main image and the clicked on image on top
                            const imagesCopy = [...imagesTop] 
                            imagesCopy[idx] = mainImage
                            setImagesTop(imagesCopy)
                            setMainImage(img)
                        }}
                    >
                        <img src={img.src} alt={img.alt} />
                    </div>
                ))
            }
        </div>
        <div className="main-image-container">
            <img src={mainImage.src} alt={mainImage.alt} />
        </div>
        <div className="grid-container">
            {
                imagesBottom.map((img, idx) => (
                    <div 
                        className="grid-item" 
                        style={{ transform: `rotate(${img.rotate}deg)` }}
                        onMouseEnter={() =>{             
                            const imagesCopy = [...imagesBottom] 
                            imagesCopy[idx].rotate = 0
                            setImagesBottom(imagesCopy)
                        }} 
                        onMouseLeave={() => {
                            const imagesCopy = [...imagesBottom] 
                            imagesCopy[idx].rotate =  Math.random()*20 - 10 // imagesRaw[idx].rotate
                            setImagesBottom(imagesCopy)
                        }} 
                        onClick={() => {
                            // Swap the main image and the clicked on image on top
                            const imagesCopy = [...imagesBottom] 
                            imagesCopy[idx] = mainImage
                            setImagesBottom(imagesCopy)
                            setMainImage(img)
                        }}
                    >
                        <img src={img.src} alt={img.alt} />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default MapViewGallery;