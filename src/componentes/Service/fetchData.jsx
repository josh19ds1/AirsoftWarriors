
const getSuspender = (promise) =>{
    let status = "pending";
    let response;


        //En caso de que este suspendido
    const suspender = promise.then(

        (res) => {
            status = "success";
            response = res;

        },
        (err) => {

            status = "error";
            response = err;

        }
    )

    //funcion de lectura
    const read = ()=>{

        switch(status){
            case "pending":
                throw suspender;
                
            case "error":
                throw new Error(
                
                "ocurrio un error al cargar los datos"
                
                );
                
            default:
               return response;
        }

    };
    return {read};
};



export function fetchData(url) {

    const promise = fetch(url)
        .then((response) => response.json())
        .then((data) => data)
       console.log('pase por la funcion')
       
    return getSuspender(promise)
}
