import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import TableLista from '../../componentes/table/tableLista';
const CliMasculino = () => {
    var dados = [
        {
            Nome: 'Antonio Marcelo',
            Nome_Social:'Marcelo',
            Tel:'(XX) X XXXX-XXXX',
            Gênero: "F"
        },
        {
            Nome: 'Gabriel Coutinho',
            Nome_Social:'Gabriel',
            Tel:'(XX) X XXXX-XXXX',
            Gênero: "F"
        },
        {
            Nome: 'Jonas Santos',
            Nome_Social:'Jonas',
            Tel:'(XX) X XXXX-XXXX',
            Gênero: "F"
        },
        {
            Nome: 'Felipe Medeiros',
            Nome_Social:'Felipe',
            Tel:'(XX) X XXXX-XXXX',
            Gênero: "F"
        },
        {
            Nome: 'Marcos Brito',
            Nome_Social:'Marcos',
            Tel:'(XX) X XXXX-XXXX',
            Gênero: "F"
        }
    ];
    return (
        <div className="container" >
            <a href="/Consulta"><FontAwesomeIcon icon={faArrowLeft} /></a>
            <div id="logoWb">WB</div> 
            <div className="titulo">Clientes masculinos</div>
            <form action="#">
                <div className="details">
                    <TableLista dados={dados}></TableLista>
                </div>
            </form>
        </div>
    );

}
export default CliMasculino;