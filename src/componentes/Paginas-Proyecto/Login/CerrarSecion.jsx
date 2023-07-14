import { useEffect, useState } from "react";
import { Dominio, ApiLogout } from "../../Tools/var";
import { setUserExist } from "../../../Store/userLogin/userExist";
import { useDispatch } from "react-redux";
const apiUrl = `${Dominio}/${ApiLogout}`;

const CerrarSesion = () => {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
 console.log('pase')

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          redirect: 'follow',
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        console.log('pase2')
        const responseData = await response.json();
        setData(responseData);
        console.log('res:'+responseData);
        if (responseData && responseData.url) {
          console.log(responseData.url)
          window.location.href = responseData.url;
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataFromApi();
  }, []);

console.log("data tiene "+data );
console.log('sali del fetch')
  if (data && typeof data.isSuccess === 'boolean') {

      console.log('entre aqui')
    if (data.isSuccess) {

      dispatch(setUserExist(false));

      console.log('entre aqui2')



    } else {
      dispatch(setUserExist(true))
      console.log('entre aqui 3')

    }
  }
};

export default CerrarSesion;