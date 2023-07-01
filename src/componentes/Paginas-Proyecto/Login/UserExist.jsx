import  { useEffect, useState } from 'react';
import { Dominio, ApiUserExist } from '../../Tools/var';
import { useDispatch } from 'react-redux';
import { setUserExist } from '../../../Store/userLogin/userExist';


const apiUrl = `${Dominio}/${ApiUserExist}`;

const UserExist = () => {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  
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
  
        const responseData = await response.json();
        setData(responseData);
  
        if (responseData.url) {
          console.log("data-url=" + responseData.url);
          window.location.href = responseData.url;
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataFromApi();
  }, []);

  console.log(data);

  if (data && typeof data.isSuccess === 'boolean') {
    console.log("variable que busco=" + data.isSuccess);
   
    if (data.isSuccess) {
     dispatch(setUserExist(true));
    } else {
      dispatch(setUserExist(false))
    }
  } 
};

export default UserExist;