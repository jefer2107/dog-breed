export interface BreedProps {
    title: string,
    images?: string[]
}

export interface ExternalBreed {
    breed: string
    list?: string[]
}

export interface Breed {
    name: string
    images: string[]
}

export class BreedNotFound extends Error {
    constructor(message: string) {
        super(message)
    }
}