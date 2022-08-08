import { useState } from "react"
import { useNavigate } from "react-router-dom"
import authService from "../services/authService"

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState<string>('')
    const [triedSubmit, setTriedSubmit] = useState(false)
    const [spinner, setSpinner] = useState<boolean>(false)

    const register = (event: any) => {

        setTriedSubmit(true)

        event.preventDefault()

        if(email){
            setSpinner(true)

            authService.auth(email).then(() => {
                setSpinner(false)
                navigate('/')
            })
        }

    }

    return (
        <div className="container mx-auto login">
            <form className="container-fluid form-login" onSubmit={register} method="post">
                <h3 className="text-center py-2">Digite o Email </h3>
                <div className="d-flex">
                    <div className="input-group px-2">
                        <span className="input-group-text" id="basic-addon1">@</span>
                        <input onChange={({target}) => setEmail(target.value)} type="email" name="email" className="form-control" />
                    </div>
                    <button className="btn btn-outline-success">Enviar</button>
                </div>
                {!email && triedSubmit && <div className="text-center text-danger py-2">
                    Informe o email
                </div>}
                {spinner &&<div className="text-center py-4">
                    <div className="spinner-border text-success text-center" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div> }
            </form>
        </div>
    ) 
}

export default Login