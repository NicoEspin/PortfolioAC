import React from 'react'
import SocialMedia from '../components/SocialMedia'

const Footer = () => {
  return (
    <footer className='h-60 bg-red pt-10'>
        <div className='flex flex-col w-5/6 mx-auto justify-center text-center items-center'>
            <SocialMedia/>
            <h2 className='font-playfair text-yellow text-2xl'>ANTONELLA CATALANO</h2>
            <p className='font-opensans'>©2023 Catalano. Todos los derechos reservados.</p>
        </div>

    </footer>
  )
}

export default Footer