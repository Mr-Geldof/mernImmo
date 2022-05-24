import AllLocation from "./AllLocation";
import { Link, Outlet } from "react-router-dom";
const Location = () => {
    return (
        <div className="location">
            <h1 className="titre">Liste de Location</h1>
            <Link to="/location/addLocation"><button type="button" class="btn btn-primary">Add Location</button></Link>
            <Link className="btn2" to="/"><button className="btn2" type="button" class="btn btn-success">Retour</button></Link>
            <AllLocation />
            <Outlet />
        </div>
    )
};
export default Location;