import React, {Component} from 'react';
import BotaoMenu from './botaomenu'
import BotaoChamada from './botaochamada'
import { Superior } from './styled';

export default class menusuperior extends Component {
    render(){
        return(
            <React.Fragment>
                 <Superior>
                    <h1>U D A C I T Y</h1>
                    <BotaoMenu/>
                    <BotaoChamada/>
                </Superior>
            </React.Fragment>
           
        )
    }
}