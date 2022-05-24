import React, {useEffect,useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";




const ShowLocation = () =>{

    const {id} = useParams();
    const [bien, setUser] = useState([]);

    const fetchData = async () => {
        const result = await axios.get(`http://localhost:8080/api/show-bien/${id}`);
        setUser(result.data);
    };
    useEffect(() => {
         fetchData();
    }, []);
    return(
        <>
            <h1> {bien.proprietaire} </h1>
        </>

    )
}
export default ShowLocation;