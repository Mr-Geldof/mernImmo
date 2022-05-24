import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
import img2 from '../components/img/img2.jpg';
import Fin from './Fin';
const Home =()=>{
    return(
        <div>
        <nav className="navBar">
                <h1 className="titre"></h1>
            <ul>
                <Link className="lien" to="/location">Location</Link>
                <Link className="lien" to="/locataire" >Locataire</Link>
            </ul>
        </nav>
        <div className="partie1">
            <img src={img2} alt="img2"/>
            <h2>Tomi Batela</h2>
            <div class="divider"></div>
        </div>
            <h2 className="trite2">Pourqoui l'immobolier ?</h2>
            <div className="main">
                <p className="phrase1">
                    La loi n°32-2012 du 11 octobre 2012 portant création de la société de promotion immobilière. Avec mise en application de cette loi a soufflé un nouvel air dans le paysage immobilier de la ville de Brazzaville et plus généralement dans l’ensemble du territoire national. Ces derniers se sont trouvés placé sous la tutelle du Ministre en charge de l’habitat. Ces sociétés en pour objet d’assurer :
                    <ul>
                        <br></br>
                        <li>La promotion immobilière</li>
                        <li>Assurez les ventes et les locations des biens</li>
                        <li>Assurez l’entretiens du bien</li>
                        <li>Assurez la bonne gestion locative </li>
                    </ul>  
                </p>
                <img className="img1" src="https://i.pinimg.com/564x/67/90/91/679091aebc9eec2557411ae1378f2002.jpg"/>
            </div>
            <div className="main2">
                <div className="img">
                    <img className="" src="https://i.pinimg.com/564x/d6/d6/d8/d6d6d80f8e6d9aa33ef88eb4196ea204.jpg"/>
                    <img className="" src="https://i.pinimg.com/564x/aa/fd/09/aafd09dfaf7e5c29e38886d9b8d956ee.jpg"/>
                    <img className="" src="https://i.pinimg.com/564x/86/ea/21/86ea21e5ee8384557d18966c31ee8322.jpg"/>
                </div>
            </div>
            <Fin/>
        </div>
    )
};
export default Home;