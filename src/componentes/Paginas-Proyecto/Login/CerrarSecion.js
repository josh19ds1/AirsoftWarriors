
import { Dominio,ApiLogout } from "../../Tools/var";

const apiUrl=`${Dominio}/${ApiLogout}`


function CerrarSecion() {

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



  if (data && typeof data.isSuccess === 'boolean') {
   
   
    if (data.isSuccess) {
      dispatch(setUserExist(false))
    } else {
       dispatch(setUserExist(true));
    }
  } 
  }