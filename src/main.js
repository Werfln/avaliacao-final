import React, {Component} from 'react'
import './style.css'
import Newsletter from './componentes/newsletter'
import MenuSuperior from './componentes/menusuperior'
import PainelPrincipal from './componentes/painelprincipal'
import PainelLateral from './componentes/painellateral'
import ChamadaPatrocinadores from './componentes/patrocinadores'

class main extends Component{
    render(){
        return(
            <div className="main">
                <div>
                    <Newsletter/>
                </div>
                <div className="unc">
                    <div>
                        <MenuSuperior/>
                    </div>

                    <div className="principal">
                        <PainelPrincipal/>
                        <PainelLateral/>
                    </div>
                </div>

                <div>
                    <ChamadaPatrocinadores/>
                </div>
            </div>
        )
    }
}

export default main;