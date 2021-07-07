import './Nav.css'
import React from 'react'

export default props =>
    <aside className="menu-area"> {/*class para o css*/}
    <nav className="menu"> {/*nav com classname para o  css*/}
        <a href="/">{/*link para a pagina de inicio*/}
            <i className="fa fa-home"></i> Início {/*fa fa-home: icone de uma casa e o nome inicio do lado*/}
        </a>
        <a href="/users"> {/* link para pagina de usuario onde vai ter a lista de create update delete*/}
            <i className=" fa fa-users"></i> Usuários {/*fa fa-users: icone de uns users e o nome Usuário do lado*/}
        </a>
    </nav>
    </aside>