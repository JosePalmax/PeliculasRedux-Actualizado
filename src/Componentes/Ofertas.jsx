import React from 'react'
import of1 from '../imgs/of1.jpeg'
import of2 from '../imgs/of2.jpg'
import of3 from '../imgs/of3.jpeg'

const Ofertas = () => {
    return (
        <>
        <p className='text-white text-3xl font-bold m-10'>OFERTAS PARA ESTA PELÍCULA</p>
            <div className='flex flex-row justify-center flex-wrap gap-4 mb-4'>
                <img src={of1} alt="" className='w-1/5' />
                <img src={of2} alt="" className='w-1/5' />
                <img src={of3} alt="" className='w-1/5' />
            </div>
        </>
    )
}

export default Ofertas