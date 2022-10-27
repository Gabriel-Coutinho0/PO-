import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import TableConsult from '../../componentes/table/table';
import './consultaCli.css'

const ConsultarCli = () => {
    var dados = [
        {
        Nome: "Antonio Marcelo",
        Nome_Social: "Marcelo",
        Gênero: "M",
        RG: "54666321-3",
        DataRG:'13/04/1998',
        CPF:'444555854-3',
        DataCPF:'13/04/1998',
        Tel:'(12) 9 8888-8888'


      },
      {
        Nome: "Raquel Silva",
        Nome_Social: "Raquel",
        Gênero: "F",
        RG: "000000-0",
        DataRG:'20/06/2005',
        CPF:'000000-00',
        DataCPF:'25/08/2005',
        Tel:'(12) 9 8888-0000'       

      },
      {
        Nome: "Gabriel Coutinho",
        Nome_Social: "Gabriel",
        Gênero: "M",
        RG: "XXXXXXXX-0",
        DataRG:'30/08/2008',
        CPF:'XXXXXXX-00',
        DataCPF:'17/10/2010',
        Tel:'(12) 9 XXXX-0000'       

      }
    ];
    return (
        <div className="container" id='Cont' >
            <a href="/Cliente"><FontAwesomeIcon icon={faArrowLeft} /></a>
            <div id="logoWb">WB</div> 
            <div className="titulo">Clientes</div>
            <form action="#">
                <div className="details">
                    <TableConsult dados={dados}></TableConsult>
                </div>
            </form>
        </div>
    );

}
export default ConsultarCli;