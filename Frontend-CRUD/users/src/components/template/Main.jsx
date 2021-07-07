import './Main.css'
import React from 'react'
import Header from './Header'

export default props =>
    <React.Fragment>{/*fazendo a tag não  aparecer no inspecionar do navegador*/}
    <Header {...props}/>  {/*clonando propriedade do Header está vindo por Main*/ }
    <main className="content container-fluid"> {/* css boostrap*/}
        <div className= "p-3 mt-3">
            {props.children} {/*tags filhos:a lista tanto do inicio como do usuario*/} 
        </div>
    </main>
    </React.Fragment>