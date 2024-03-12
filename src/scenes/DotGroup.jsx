import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const DotGroup = ({selectedPage, setSelectedPage}) => {
 const selectedStyles =`relative bg-yellow before:absolute before:w-6 before:h-6
 before:rounded-full before:border-2 before:border-yellow before:left-[-50%]
 before:top-[-50%]`
    return (
    <div className='flex flex-col gap-6 fixed top-[60%] right-7'>
            <AnchorLink
      className={`${
        selectedPage === 'inicio' ? selectedStyles : "bg-dark-grey"
      } w-3 h-3 rounded-full`}
      href="#inicio"
      onClick={() => setSelectedPage("inicio")}
    />
            <AnchorLink
      className={`${
        selectedPage === 'habilidades' ? selectedStyles : "bg-dark-grey"
      } w-3 h-3 rounded-full`}
      href="#habilidades"
      onClick={() => setSelectedPage("habilidades")}
    />
            <AnchorLink
      className={`${
        selectedPage === 'proyectos' ? selectedStyles : "bg-dark-grey"
      } w-3 h-3 rounded-full`}
      href="#proyectos"
      onClick={() => setSelectedPage("proyectos")}
    />
            <AnchorLink
      className={`${
        selectedPage === 'contacto' ? selectedStyles : "bg-dark-grey"
      } w-3 h-3 rounded-full`}
      href="#contacto"
      onClick={() => setSelectedPage("contacto")}
    />
    
    </div>
  )
}

export default DotGroup