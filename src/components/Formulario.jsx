import {useState} from 'react'
import useClima from '../hooks/useClima'

const Formulario = () => {
//Utilizo el hook para importar rapidamente funciones
const {seleccion,buscar,consultarClima,consultarGeo,setResultadoClima,setResultadoGeo} = useClima()
//Validacion para el boton enviar
const [alerta, setAlerta] = useState(false)
//Enviar Boton Buscar Clima
const handleSubmit = (e) => {
    e.preventDefault()
    setResultadoGeo()
    if ([seleccion].includes("")) {
        setAlerta(true)
        setTimeout(() => {
            setAlerta(false)
        }, 3000);
        return
    }
    console.log('formulario enviado');
    consultarClima(seleccion)
    setAlerta(false)
}

//GeolocalizarClima 
const handleGeo = (e) => {
    e.preventDefault()
    setResultadoClima()
    consultarGeo()
   
}

    return (
        <div className='bg-white shadow-md border-2 mt-10'>
            <form onSubmit={handleGeo}>
                <div className=''>
                    <label className='text-2xl block text-center mt-5'>Geolocalizame</label>
                    <input
                        className='block bg-cyan-800 w-3/4 mx-auto text-white cursor-pointer hover:bg-cyan-600 transition-all font-semibold uppercase text-lg p-4 mt-4 rounded-md'
                        type='submit'
                        value='Consultar Clima'
                    />
                </div>
            </form>
            {alerta&& <p className='mx-auto w-3/4 text-center mt-3 bg-red-800 animate__bounceIn  font-semibold text-white uppercase rounded-sm p-1'>Debes Seleccionar una Ciudad</p>}
            <form onSubmit={handleSubmit}>
                
                <div>
                    <label 
                    htmlFor='ciudad'
                    className='text-2xl block text-center my-5'>Buscar Ciudad</label>
                    <select 
                    name='ciudad'
                    id='ciudad'
                    value={seleccion}
                    onChange={buscar}
                    className='w-3/4 mx-auto block border-2 p-2'>Seleccionar
                    <option value=''>Seleccione una Ciudad</option>
                    <option value='BuenosAires'>Buenos Aires</option>
                    <option value='New York'>Nueva York</option>
                    <option value='Misiones'>Misiones</option>
                    <option value='Bariloche'>Bariloche</option>
                    <option value='Salta'>Salta</option>
                    
                    </select>
                  
                </div>
                <input
                        className='block bg-cyan-800 hover:bg-cyan-600 transition-all text-white font-semibold mx-auto uppercase w-3/4 text-lg p-4 cursor-pointer my-4 rounded-md '
                        type='submit'
                        value='Buscar Clima'
                    />
            </form>


        </div>
    )
}

export default Formulario