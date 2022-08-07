import axios from "axios"

const wait = (seconds: number) => {
    return new Promise((res: any) => {
        setTimeout(() => res(), seconds * 1000)
    })
}

const auth = async (email: string) => {
    const data = await axios.post(`${process.env.REACT_APP_APIHOST}/register`, {email}).then(x => x.data)
    localStorage.setItem('token', data.user.token)
    await wait(1)
}

const logout = async () => {
    localStorage.clear()
    await wait(1)
}

const isLogged = () => !!localStorage.getItem('token')

const getToken = () => localStorage.getItem('token') as string

export default {
    auth,
    isLogged,
    logout,
    getToken
}