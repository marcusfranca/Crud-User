import './Header.css'
import React from 'react'

export default props =>
    <header className="header d-none d-sm-flex  flex-column"> {/*para celulares o header não vai aparecer, qualquer dispositivel acima de sm ele vai usar flex */}
        <h1 className="mt-3">{/*margin top 3*/ }
            <i className={`fa fa-${props.icon}`}></i> {props.title}{/*utilizando fa fa- para pegar o icone da clase que está utilizanddo ele, mesma coisa pro title*/}
        </h1>
        <p className="lead text-muted"> {props.subtitle}</p>{/*mesmo para o subtitle*/}
    </header>