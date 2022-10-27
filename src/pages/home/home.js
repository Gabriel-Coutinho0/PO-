import React from 'react';
import BotaoHome from "./botaoHome";
import "./home.css"



const Home = () => {
    return (
        <div className=" form">
              <div id="logoWb">WB</div>
            <div className="tituloHome">Home</div>
            
            <form action="#">
                <div className="Home">
                    <BotaoHome home="Cliente">Clientes</BotaoHome>
                    <BotaoHome home="Servico">Serviços</BotaoHome>
                    <BotaoHome home="Produto">Produtos</BotaoHome>
                    <BotaoHome home="Consulta">Consultas</BotaoHome>
                </div>
            </form>

        </div>
    );
}

export default Home;