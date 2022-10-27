import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import TableLista from '../../componentes/table/tableLista';
const CliFeminino = () => {
    var dados = [
        {
            Nome: 'Maria Conceição',
            Nome_Social:'Maria',
            Tel:'(XX) X XXXX-XXXX',
            Gênero: "F"
        },
        {
            Nome: 'Raquel Silva',
            Nome_Social:'Raquel',
            Tel:'(XX) X XXXX-XXXX',
            Gênero: "F"
        },
        {
            Nome: 'Joana Brito',
            Nome_Social:'Joana',
            Tel:'(XX) X XXXX-XXXX',
            Gênero: "F"
        },
        {
            Nome: 'Renata Lemos',
            Nome_Social:'Renata',
            Tel:'(XX) X XXXX-XXXX',
            Gênero: "F"
        },
        {
            Nome: 'Eleni Xavier',
            Nome_Social:'Eleni',
            Tel:'(XX) X XXXX-XXXX',
            Gênero: "F"
        }
    ];
    return (
        <div className="container" >
            <a href="/Consulta"><FontAwesomeIcon icon={faArrowLeft} /></a>
            <div id="logoWb">WB</div> 
            <div className="titulo">Clientes feminino</div>
            <form action="#">
                <div className="details">
                    <TableLista dados={dados}></TableLista>
                </div>
            </form>
        </div>
    );

}
export default CliFeminino;