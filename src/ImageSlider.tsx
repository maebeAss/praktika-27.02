import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import "./imageSlider.css"

type ImageSliderProps = {
    imageUrls: string[]
}

export function ImageSlider({ imageUrls } : ImageSliderProps) {
    const [imageIndex, setImageIndex] = useState(0)

    function showPrevImage() {
        setImageIndex(index => {
            if (index === 0) return imageUrls.length - 1
            return index - 1
        })
    }

    function showNextImage() {
        setImageIndex(index => {
            if (index === imageUrls.length - 1) return 0
            return index + 1
        })
    }

    return <div style={{width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
        {/* <div>
            {imageUrls.map(url => (
                <img key={url} src={url} className="img-slider-img"/>
            ))}
        </div> */}
        <button onClick={showPrevImage} className="img-slider-butt" style={{left: 0}}>
            <ChevronLeft/>
        </button>
        <div className="img-sec">
            <img src={imageUrls[imageIndex]} className="img-slider-img"/>
        </div>
        <button onClick={showNextImage} className="img-slider-butt" style={{right: 0}}>
            <ChevronRight/>
        </button>
    </div>
}