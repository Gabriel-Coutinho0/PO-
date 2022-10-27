import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import TableLista from '../../componentes/table/tableLista';
const DezMaisConsumo = () => {
    var dados = [
        {
            Nome: 'Antonio Marcelo',
            Nome_Social: 'Marcelo',
            Tel: '(XX) X XXXX-XXXX',
            Prod_Serv_Consumidos:'12'
        },
        {
            Nome: 'Renata Lemos',
            Nome_Social:'Renata',
            Tel:'(XX) X XXXX-XXXX',
            Prod_Serv_Consumidos:'11'
        },
        {
            Nome: 'Eleni Xavier',
            Nome_Social:'Eleni',
            Tel:'(XX) X XXXX-XXXX',
            Prod_Serv_Consumidos:'10'
        },
        {
            Nome: 'Gabriel Coutinho',
            Nome_Social: 'Gabriel',
            Tel: '(XX) X XXXX-XXXX',
            Prod_Serv_Consumidos:'9'
        },
        {
            Nome: 'Raquel Silva',
            Nome_Social:'Raquel',
            Tel:'(XX) X XXXX-XXXX',
            Prod_Serv_Consumidos:'8'
        },
        {
            Nome: 'Jonas Santos',
            Nome_Social: 'Jonas',
            Tel: '(XX) X XXXX-XXXX',
            Prod_Serv_Consumidos:'8'
        },
        {
            Nome: 'Felipe Medeiros',
            Nome_Social: 'Felipe',
            Tel: '(XX) X XXXX-XXXX',
            Prod_Serv_Consumidos:'7'
        },
        {
            Nome: 'Joana Brito',
            Nome_Social:'Joana',
            Tel:'(XX) X XXXX-XXXX',
            Prod_Serv_Consumidos:'6'
        },
        {
            Nome: 'Marcos Brito',
            Nome_Social: 'Marcos',
            Tel: '(XX) X XXXX-XXXX',
            Prod_Serv_Consumidos:'5'
        }
    ];
    return (
        <div className="container" >
            <a href="/Consulta"><FontAwesomeIcon icon={faArrowLeft} /></a>
            <div id="logoWb">WB</div> 
            <div className="titulo">Dez mais em consumo</div>
            <form action="#">
                <div className="details">
                    <TableLista dados={dados}></TableLista>
                </div>
            </form>
        </div>
    );

}
export default DezMaisConsumo;