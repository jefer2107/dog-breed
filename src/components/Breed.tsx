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

    useEffect(() => {

        setError(false)
        setBreedSelected(undefined)

        if(params.name)
            breedsApi.getByName(params.name).
            then(x => setBreedSelected(x)).
            catch((x) => {
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
            {breedSelected?.images && <BreedImages images={breedSelected.images} title={breedSelected.name}/>}
        </>
}

export default Breed