import { useEffect, useState } from "react";
import { Dominio, ApiLogout } from "../../Tools/var";
import { useDispatch } from "react-redux";
import { setUserExist } from "../../../Store/userLogin/userExist";

const apiUrl = `${Dominio}/${ApiLogout}`;

const CerrarSesion = () => {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          redirect: "follow",
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

  useEffect(() => {
    if (data && typeof data.isSuccess === "boolean") {
      dispatch(setUserExist(!data.isSuccess));
    }
  }, [data, dispatch]);

  return null; // No se muestra ningún elemento visualmente en este componente
};

export default CerrarSesion;
