import { Breed, BreedNotFound, ExternalBreed } from "../types"
import axios from 'axios'
import authService from "./authService"

const getByName = async (name: string): Promise<Breed> => {

    const breedApiFormat: ExternalBreed = await axios.get(`${process.env.REACT_APP_APIHOST}/list?breed=${name}`, {
        headers: {
            "Authorization": authService.getToken()
        }
    }).then(x => x.data)


    if(!breedApiFormat.list) throw new BreedNotFound(`breed ${name} not found`)

    return {
        name: breedApiFormat.breed,
        images: !breedApiFormat.list ? []: [...breedApiFormat.list]
    }
}

export default {
    getByName
}