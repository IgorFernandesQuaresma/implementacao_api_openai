import React, { useContext } from "react"
import './Menu.css'
import { OpenContext } from "../../context/ContextOpen"



function SideMenu() {
    
    const {open, toggleOpen} = useContext(OpenContext)


    function abrirFecharChat () {
        toggleOpen()
        console.log(open)
    }

   

    return (
        <>
        
        <aside className="sidemenu">
            <div className="sidemenu-button" onClick={abrirFecharChat}>
                <span>+</span>
                Fale com Goku
            </div>
        </aside>

        </>
      )

}

export default SideMenu