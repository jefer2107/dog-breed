import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import breedsApi from "../services/breedsApi"
import { Breed as BreedModel, BreedNotFound } from "../types"
import BreedImages from "./BreedImages"

const Breed = () => {

    const navigate = useNavigate()
    const params = useParams()
    const [breedSelected, setBreedSelected] = useState<BreedModel | undefined>()
    const [error, setError] = useState<boolean>(false)
    const [spinner, setSpinner] = useState<boolean>(false)

    useEffect(() => {

        setSpinner(true)
        setError(false)
        setBreedSelected(undefined)

        if(params.name)
            breedsApi.getByName(params.name)
            .then((x) => {
                setSpinner(false)
                setError(false)
                setBreedSelected(x)
            })
            .catch((x) => {
                if(x instanceof BreedNotFound) 
                    navigate('/breeds/chihuahua', {
                        replace: true
                    })
                else 
                    setError(true)
            })
    }, [params.name])

    return <>
            {error && <div>Erro inesperado ocorreu.</div>}
            {spinner &&
            <div className="text-center breed-spinner">
                <div className="spinner-border text-primary text-center" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>}
            {breedSelected?.images && !spinner && <BreedImages images={breedSelected.images} title={breedSelected.name}/>}
        </>
}

export default Breed