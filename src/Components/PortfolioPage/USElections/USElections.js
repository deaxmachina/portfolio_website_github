import "./USElections.css";
import { useState } from 'react'
import MapViewGallery from "./MapViewGallery";
import Summary from './Summary.js'
import Development from "./Development.js";
import Crown from "./Crown.js";
import Accessibility from "./Accessibility.js";
import { 
    imagesRawCalledRacesTop, imageRawCalledRacesBottom, mainImageRawCalledRaces,
    imagesRawStrengthOfLeadTop, imageRawStrengthOfLeadBottom, mainImageRawStrengthOfLead,
    imagesRawVoteCountTop, imageRawVoteCountdBottom, mainImageRawVoteCount
} from './images.js'
import {  useEffect } from 'react'
import { annotate, annotationGroup } from 'rough-notation';



const USElections = ({ project, windowWidth }) => {

  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    const n1 = document.querySelectorAll(".highlight");
    const n2 = document.querySelectorAll(".underline");
    const n3 = document.querySelectorAll(".box");

    const annotatedHighlight = []
    n1.forEach(n => {
        annotatedHighlight.push(annotate(n, { type: "highlight", color: "#d2dde8", padding: 2, strokeWidth: 3 }))
    })

    const annotatedUnderline = []
    n2.forEach(n => {
        annotatedUnderline.push(annotate(n, { type: "underline", color: "#d2dde8", padding: 1, strokeWidth: 3 }))
    })

    const annotatedBox = []
    n3.forEach(n => {
        annotatedBox.push(annotate(n, { type: "box", color: "#d2dde8", padding: 15, strokeWidth: 6 }))
    })

    const ag = annotationGroup([...annotatedHighlight, ...annotatedUnderline, ...annotatedBox]);
    ag.show();
    
    }, [])  

  return (
    <div id='us-elections-container' >
        <Crown />

        <h2 className="section-title">Summary</h2>
        <Summary />

        <h2 className="section-title development">Development</h2>
        <Development>
        <div className="wrapper-map-view-gallery">
            <div className='wrapper-map-rail'>
                <MapViewGallery 
                    title='Called races'
                    imagesTopRaw={imagesRawCalledRacesTop} 
                    imagesBottomRaw={imageRawCalledRacesBottom} 
                    mainImageRaw={mainImageRawCalledRaces} 
                    selectedImage={selectedImage}
                    setSelectedImage={setSelectedImage}
                />
                <MapViewGallery 
                    title='Strength of lead'
                    imagesTopRaw={imagesRawStrengthOfLeadTop} 
                    imagesBottomRaw={imageRawStrengthOfLeadBottom} 
                    mainImageRaw={mainImageRawStrengthOfLead} 
                    selectedImage={selectedImage}
                    setSelectedImage={setSelectedImage}
                />
                <MapViewGallery 
                    title='Vote counts'
                    imagesTopRaw={imagesRawVoteCountTop} 
                    imagesBottomRaw={imageRawVoteCountdBottom} 
                    mainImageRaw={mainImageRawVoteCount} 
                    selectedImage={selectedImage}
                    setSelectedImage={setSelectedImage}
                />
            </div>
            {/* The big image overlay */}
            {
                selectedImage !== null &&
                <div 
                    className="overlay-image-container"
                    onClick={() => { setSelectedImage(null) }}
                >
                    <img src={selectedImage.src} alt={selectedImage.alt} />
                </div>
            }
        </div>
        </Development>

        <h2 className="section-title">Accessibility</h2>
        <Accessibility />
    </div>
  )
}

export default USElections;