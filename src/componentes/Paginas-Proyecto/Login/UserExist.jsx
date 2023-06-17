import React, { useEffect, useState } from 'react'
import { Dominio,ApiUserExist } from '../../Tools/var'
import fetchData from '../../Service/feetchApi'

const apiUrl=`${Dominio}/${ApiUserExist}`


const UserExist = () => {
const [data,setData] = useState(null);

    useEffect(() => {
        const fetchDataFromApi = async () => {
            const responseData = await fetchData(apiUrl);
            setData(responseData);
        };

        fetchDataFromApi();
    }, []);

    if (!data || data.length === false) {
        return null;
    }else{
  return (
   <h1>Existe</h1>
  )
}}

export default UserExist