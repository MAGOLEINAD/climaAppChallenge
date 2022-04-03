
import useClima from '../hooks/useClima'
import moment from 'moment';
import 'moment/min/moment-with-locales'
import 'moment/locale/es';
import 'moment/src/locale/es'



const RespFormulario = () => {


const {resultadoclima,lugarClima}= useClima()
const {daily,current} = resultadoclima
// console.log(resultadoclima);
const kelvin = 273.15
moment.locale('es');




  return (
    <>
    <div className='bg-white shadow-md border-2 mt-10'>
   
     <h1 className='text-center text-2xl mt-5'>El Clima en </h1>
     <p className='text-center'><span className='block text-3xl uppercase font-bold text-cyan-600 my-3'>{lugarClima}</span></p>
     <p className='text-4xl font-bold text-center'>{parseInt(current.temp - kelvin)} °C</p>
     <div className='mt-2 p-8 text-center'>
          <p className='uppercase text-2xl mb-3 font-semibold text-blue-700'>Dias Siguientes</p>
          <p className='text-xl'>{moment().add(1,'days').calendar() } {parseInt(daily[0].temp.day - kelvin)}<span>°C</span></p>
          <p className='text-xl'>{moment().add(2,'days').calendar() } {parseInt(daily[1].temp.day - kelvin)}<span>°C</span></p>
          <p className='text-xl'>{moment().add(3,'days').calendar() } {parseInt(daily[2].temp.day - kelvin)}<span>°C</span></p>
          <p className='text-xl'>{moment().add(4,'days').calendar() } {parseInt(daily[3].temp.day - kelvin)}<span>°C</span></p>
          <p className='text-xl'>{moment().add(5,'days').calendar() } {parseInt(daily[4].temp.day - kelvin)}<span>°C</span></p>
     </div>
    
      
    </div>
    </>
  )
}

export default RespFormulario