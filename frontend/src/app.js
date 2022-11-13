import { BrowserRouter } from "react-router-dom"
import BarraNavegacao from "./componentes/barraNavegacao"
import AppRoutes from "./componentes/routes/router"

export const App = () => {
    return(
        <BrowserRouter>
            <BarraNavegacao tema="black lighten-2" botoes={['Home','Produtos','Servicos','Clientes', 'Listagens', 'Pedidos']}/>
            <AppRoutes/>
        </BrowserRouter>
    )
}