import React from 'react'
import useClima from '../hooks/useClima'
import Formulario from './Formulario'
import RespFormulario from './RespFormulario'
import RespGeo from './RespGeo'


const AppClima = () => {
    const {resultadoclima,resultadogeo} = useClima()
    return (
        <>
            <header className='text-center text-white font-bold text-4xl p-8 bg-cyan-600'>Consultar Clima</header>
            <main className='md:grid grid-cols-2 gap-2 mx-auto container '>
                <Formulario />
                {resultadoclima&&  <RespFormulario />}
                {resultadogeo&& <RespGeo/>}
            </main>
        </>
    )
}

export default AppClima