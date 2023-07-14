import React, { useEffect, useState } from "react";
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
        const response = await fetch('https://nodejs-restapi-airsoft-warrior-production-8daf.up.railway.app/api/auth/Logout', {
          method: 'GET',
          credentials: 'include',
        
        });
          console.log('1');


        if (response.ok) {
          console.log('2');
           console.log('response: '+response.ok);
          throw new Error(`Request failed with status ${response.status}`);
        }


       
        const responseData = await response.json();
        setData(responseData);
        console.log('3');
        if (responseData.url) {
          console.log("data-url=" + responseData.url);
          window.location.href = responseData.url;
        }
      } catch (error) {
        console.log('4');
        console.log(error);
      }
    };
    console.log('5');
    fetchDataFromApi();
  }, []);

  if (data && typeof data.isSuccess === 'boolean') {
    console.log('6');
    if (data.isSuccess) {
      console.log('7');
      dispatch(setUserExist(true));
    } else {
      console.log('8');
      dispatch(setUserExist(false))
    }
  }

  return null; // Devuelve un componente vacío o puedes reemplazarlo con otro elemento JSX si es necesario.
};

export default CerrarSesion;
