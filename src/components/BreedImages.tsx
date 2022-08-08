import { useState } from "react"
import { BreedProps } from "../types"
import { ModalImages } from "./ModalImages"

const BreedImages = ({images, title}: BreedProps) => {
    const [imageSelected, setImageSelected] = useState<string>("")

    return <>
    <h3 className="text-center py-4"> {title} </h3>
    <div className="row container mx-auto">
        {images?.map((x, i) => {
            return(
                <div key={i} className="card col-sm-12 col-md-6 col-lg-4 mx-auto">
                    <div className="image" id="image" onClick={() => setImageSelected(x)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <img src={x} className="card-img-top m-1" alt={title} />
                    </div>
                </div>
            )
        })}
    </div>
    <ModalImages imageSelected={imageSelected} />
    </>
}

export default BreedImages