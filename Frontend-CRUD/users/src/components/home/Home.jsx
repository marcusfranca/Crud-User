import React from 'react'
import Main from '../template/Main'

export default props =>
    <Main icon="home" title="Início" /*icone da casa e o titulo*/
        subtitle="Segundo Projeto de React."> {/*subtitulo*/}
        <div className='display-4'> Bem Vindo!</div> {/*Tag div com um css do bootstrap, nome benvindo*/}
        <hr /> {/* representa uma quebra temática entre elementos de nível de parágrafo*/}
        <p className="mb-0"> Sistema para Exemplificar a cosntrução de um cadastro
                Desenvolvido em React</p> {/*um P para colocar uma descrição a baixo de bem vindo com um css do boststrap que faz a bordar ficar perto do nome*/}
    </Main>