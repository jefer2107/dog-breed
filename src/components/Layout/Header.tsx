import { Link, useNavigate, useParams } from "react-router-dom";
import authService from "../../services/authService";
const Header = () => {
    const navigate = useNavigate()
    let {name} = useParams()
    const logoff = async () => {
      await authService.logout()
      navigate('/login')
    }

    const disabledLink = (breedName: String) => breedName === name

    return(
      <>
      <div className="container-fluid bg-light header">
        <div className="header-content container mx-auto">
          <h5 className="title">Dog Breed</h5>
          <div>
            <button onClick={logoff} className="btn btn-sm btn-primary">Logout</button>
          </div>
        </div>

      </div>
      <div className="menu mx-auto container">
          <ul className="">
            <li><Link className={`${disabledLink("chihuahua") && "disabled-link"}`} to={`/breeds/chihuahua`}>Chihuahua</Link></li>
            <li><Link className={`${disabledLink("husky") && "disabled-link"}`} to={`/breeds/husky`}>Husky</Link></li>
            <li><Link className={`${disabledLink("labrador") && "disabled-link"}`} to={`/breeds/labrador`}>Labrador</Link></li>
            <li><Link className={`${disabledLink("pug") && "disabled-link"}`} to={`/breeds/pug`}>Pug</Link></li>
          </ul>
        </div>
      </>

      
    ) 
}

export default Header
