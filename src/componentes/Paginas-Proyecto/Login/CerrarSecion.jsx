import { useEffect, useState } from "react";
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
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          redirect: 'follow',
        });
  
        if (response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
  
        const responseData = await response.json();
        setData(responseData);
       
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataFromApi();
  }, []);



  if (data && typeof data.isSuccess === 'boolean') {
   
   
    if (data.isSuccess) {
      window.location.href = data.url;
      dispatch(setUserExist(true));
    } else {
      dispatch(setUserExist(false))
    }
  } 
};

export default CerrarSesion;