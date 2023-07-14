import  { useEffect, useState } from "react";
import { Dominio, ApiLogout } from "../../Tools/var";
import { setUserExist } from "../../../Store/userLogin/userExist";
import { useDispatch } from "react-redux";

const apiUrl = `${Dominio}/${ApiLogout}`;

const CerrarSesion = () => {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const response = await fetch(apiUrl, {
          method: 'GET',
          credentials: 'include',      
        }); 
        if (response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const responseData = await response.json();
        setData(responseData);
  
        if (responseData.url) {
      
          window.location.href = responseData.url;
          dispatch(setUserExist(false))
        }
      } catch (error) {
      
        console.log(error);
      }
    };

    fetchDataFromApi();
  }, []);

  if (data && typeof data.isSuccess === 'boolean') {

    if (data.isSuccess) {
        console.log('verdadero')
        dispatch(setUserExist(true));
      } else {
        console.log('falso')
        
      dispatch(setUserExist(false))
    }
  }

  return null; // Devuelve un componente vacío o puedes reemplazarlo con otro elemento JSX si es necesario.
};

export default CerrarSesion;
