import {createContext,useState} from 'react'
import axios from 'axios'

const ClimaContext = createContext()

const ClimaProvider = ({children}) => {
    //Inicializo el State del campo Seleccionar del Formulario
    const [seleccion,setSeleccion] = useState('')
    //Funcion para setear el estado al seleccionar ciudad en Formulario
    const buscar = (e) => {
        setSeleccion(e.target.value)
    }
    //Estado que devuelve el lugar de donde se consulta el clima
    const [lugarClima,setLugarClima] = useState()
    //Estado que devuelve el resultado del clima de la funcion Consultar Clima
    const [resultadoclima,setResultadoClima] = useState()
    //Resultado Geolocalizacion aqui almaceno el objeto que da latitud y
    const [resultadogeo,setResultadoGeo] = useState()
    //Necesito esta variable para setear la ciudad en el componente de RespGeo
    const [ciudadgeo,setCiudadGeo] = useState()
    //Funcion para consultar a la API que toma los datos que envia seleccion
    const consultarClima = async (datos) => {
        try {
            const appId = import.meta.env.VITE_API_KEY
            const url= `http://api.openweathermap.org/geo/1.0/direct?q=${datos}&limit=1&appid=${appId}`
    //Axios devuelve en objeto de Data la peticion en formato JSON
            const {data} = await axios(url)
    //En la posicion 0 del arreglo estan los datos que necesito.
            console.log(data[0]);
            const {lat,lon,name} = data[0]
            console.log(lat,lon,name);
   //Aqui seteo el estado del lugar clima con el objeto name
            setLugarClima(name)

            const urlClima=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${appId}`
            //Estoy obligado a renombrar el objeto de Axios porque fue declarado como constante.
            const {data:clima} = await axios(urlClima)
            // console.log(urlClima);
            setResultadoClima(clima)
            // console.log(clima);
        } catch (error) {
            console.log(error);
        }
    }
  //Funcion para consultar a la API la geolocalizacion desde donde estoy
  const consultarGeo = async () => {
    try {
        const appId = import.meta.env.VITE_API_KEY
        const appIdGeo = import.meta.env.VITE_API_IP_KEY
        const urlGeo= `http://api.ipapi.com/check?access_key=${appIdGeo}` 
//Axios devuelve en objeto de Data la peticion en formato JSON
        const {data:geo} = await axios(urlGeo)
      
//Extraigo latitud y longitud y nombreCiudad de la geolocalizacion de ipAPI
        const {latitude,longitude,city} = geo
        //Establezco la ciudad para luego mostrarla en componente de RespGeo
        setCiudadGeo(city)

        const urlClima=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly&appid=${appId}`
        const {data:climaGeo} = await axios(urlClima)
        // console.log(urlClima);
        setResultadoGeo(climaGeo)
       
      
    } catch (error) {
        console.log(error);
    }
    }

    return (
    <ClimaContext.Provider 
    
    value={{
        seleccion,
        buscar,
        consultarClima,
        setResultadoClima,
        resultadoclima,
        lugarClima,
        consultarGeo,
        setResultadoGeo,
        resultadogeo,
        ciudadgeo
    }}>

        {children}
    </ClimaContext.Provider>
)
}
export {ClimaProvider}
export default ClimaContext