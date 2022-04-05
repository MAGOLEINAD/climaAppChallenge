import dayjs from 'dayjs'
import es from 'dayjs/locale/es'
import useClima from '../hooks/useClima'

const RespFormulario = () => {
//Aqui tomo las variables que necesito para mostrar el clima.
const {resultadoclima,lugarClima}= useClima()
const {daily,current} = resultadoclima
// console.log(resultadoclima);
const kelvin = 273.15
dayjs.locale(es);

  return (
    <>
    <div className='bg-white shadow-md border-2 mt-10'>
     <h1 className='text-center text-2xl mt-5'>El Clima en </h1>
     <p className='text-center'><span className='block text-3xl uppercase font-bold text-cyan-600 my-3'>{lugarClima}</span></p>
     <p className='text-4xl font-bold text-center'>{parseInt(current.temp - kelvin)} °C</p>
     <div className='mt-2 p-8 text-center'>
          <p className='uppercase text-2xl  mb-3 font-semibold text-blue-700'>Dias Siguientes</p>
          <p className='text-xl first-letter:uppercase'>{dayjs().add(1,'day').format('dddd')} {parseInt(daily[0].temp.day - kelvin)}<span>°C</span></p>
          <p className='text-xl first-letter:uppercase'>{dayjs().add(2,'day').format('dddd')} {parseInt(daily[1].temp.day - kelvin)}<span>°C</span></p>
          <p className='text-xl first-letter:uppercase'>{dayjs().add(3,'day').format('dddd')} {parseInt(daily[2].temp.day - kelvin)}<span>°C</span></p>
          <p className='text-xl first-letter:uppercase'>{dayjs().add(4,'day').format('dddd')} {parseInt(daily[3].temp.day - kelvin)}<span>°C</span></p>
          <p className='text-xl first-letter:uppercase'>{dayjs().add(5,'day').format('dddd')} {parseInt(daily[4].temp.day - kelvin)}<span>°C</span></p>
     </div>
    </div>
    </>
  )
}

export default RespFormulario