const fetchData = async (url) => {
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('An error occurred:', error.message);
      // Puedes realizar acciones adicionales en caso de error, como mostrar una notificación o realizar un fallback.
      // Aquí simplemente se devuelve null para indicar que no se pudieron obtener los datos.
      return null;
    }
  };
  
  export default fetchData;
  