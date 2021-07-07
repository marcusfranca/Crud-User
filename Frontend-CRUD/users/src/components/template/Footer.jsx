import './Footer.css'
import React from 'react'

export default props =>
    <footer className="footer"> {/*classename para se usar no css*/}
        <span>{/*utilizado para colocar algo menor dentro de uma linha saindo um pouco de dentro do  escopo da div*/}
            Desenvolvido com <i className="fa fa-heart"></i> por {/*palavra que quero colocar no footer com um css que faz um coração*/}
            <strong> Vini<span className="text-danger">S2</span></strong> {/*span utilizado para colocar uma pequena linha de palavra com um css para ficar vermelho ao colocar*/}
        </span>
    </footer>