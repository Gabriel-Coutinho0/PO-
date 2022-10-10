import AlterarCliente from "../empresa/cliente/alterarCliente";
import CadastroCliente from "../empresa/cliente/cadastroCliente";
import DeletarCliente from "../empresa/cliente/deletarCliente";
import ListagemClientes from "../empresa/cliente/listagemClientes";
import ConsumoCliente from "../empresa/consumo/consumoCliente";
import Listar5MaisConsumo from "../empresa/consumo/listar5MaisConsumo";
import ListarConsumoGen from "../empresa/consumo/listarConsumoGen";
import ListaMaiorConsumo from "../empresa/consumo/listarMaiorConsumo";
import ListaMenorConsumo from "../empresa/consumo/listarMenorConsumo";
import ListagemServicoCliente from "../empresa/consumo/listarServicoCliente";
import ListarServMais from "../empresa/consumo/listarServMais";
import ProdMaisConsumido from "../empresa/consumo/prodMaisConsumido";
import ListagemGenero from "../empresa/listarGenero";
import AlterarProduto from "../empresa/produto/altearProduto";
import CadastroProdutos from "../empresa/produto/cadastroProduto";
import ListagemProdutos from "../empresa/produto/listagemProdutos";
import AlterarServico from "../empresa/servico/alterarServico";
import CadastroServico from "../empresa/servico/cadastroServico";
import DeletarServico from "../empresa/servico/deletarServico";
import ListarServicos from "../empresa/servico/listarServico";
import Entrada from "../io/entrada";
import Cliente from "../model/cliente";
import CPF from "../model/cpf";
import Empresa from "../model/empresa";
import Produto from "../model/produto";
import Servico from "../model/servico";

let empresa = new Empresa();
let execucao = true;

let cliente = new Cliente("Antonio Marcelo", "Marcelo", new CPF("0", "13/04/1998"), "M")
let cliente1 = new Cliente("Bruna Dias", "Bruna", new CPF("1", "13/04/1998"), "F")
let cliente2 = new Cliente("Emerton Ribeiro", "Emerton", new CPF("2", "13/04/1998"), "M")
let cliente3 = new Cliente("Raquel Silva", "Raquel", new CPF("3", "13/04/1998"), "F")
let cliente4 = new Cliente("Gabriel Coutinho", "Gabriel", new CPF("4", "13/04/1998"), "M")
let cliente5 = new Cliente("Dionisio Leão", "Dionisio", new CPF("5", "13/04/1998"), "M")
let cliente6 = new Cliente("Carla Brito", "Carla", new CPF("6", "13/04/1998"), "F")
let cliente7 = new Cliente("Leticia Almeida", "Leticia", new CPF("7", "13/04/1998"), "F")
let cliente8 = new Cliente("Andre Ribeiro", "Andre", new CPF("8", "13/04/1998"), "M")
let cliente9 = new Cliente("Rodrigo Ribas", "Rodrigo", new CPF("9", "13/04/1998"), "M")
let cliente10 = new Cliente("Cleber Santos", "Cleber", new CPF("10", '22/02/2012)'), 'M')
let cliente11 = new Cliente("Antonio Marcos", "Marcos", new CPF('11', '11/11/2011'), 'M')
let cliente12 = new Cliente('Conceição Alves', 'Conceição', new CPF('12', '12/12/2012'), 'F')
let cliente13 = new Cliente('Maria Conceição', 'Maria', new CPF('13', '05/06/1998'), 'F')
let cliente14 = new Cliente('Marcos Monroe', 'Marcos', new CPF('14', '23/08/1995'), 'M')
let cliente15 = new Cliente('Renata Lemos', 'Renata', new CPF('15', '29/05/1990'), 'F')
let cliente16 = new Cliente('Vitor Manuel', 'Vitor', new CPF('16', '16/04/2001'), 'M')
let cliente17 = new Cliente('Marcelo Eduardo', 'Marcelo', new CPF('17', '05/05/1995'), 'M')
let cliente18 = new Cliente('Claudia Moreira', 'Claudia', new CPF('18', '18/02/2002'), 'F')
let cliente19 = new Cliente('Maria Aparecida', 'Maria', new CPF('19', '19/07/1887'), 'F')
let cliente20 = new Cliente('Marcio Francisco', 'Marcio', new CPF('20', '20/05/2000'), 'M')
let cliente21 = new Cliente('Lis Silva', 'Lis', new CPF('21', '21/02/2005'), 'F')
let cliente22 = new Cliente('Theo Brito', 'Theo', new CPF('22', '22/06/2006'), 'M')
let cliente23 = new Cliente('Agatha Barbosa', 'Agatha', new CPF('23', '23/08/2007'), 'F')
let cliente24 = new Cliente('Aurora Rodrigues', 'Aurora', new CPF('24', '24/09/2008'), 'F')
let cliente25 = new Cliente('Guilherme Filho', 'Guilherme', new CPF('25', '25/08/2007'), 'M')
let cliente26 = new Cliente('Jose Soares', 'Jose', new CPF('26', '26/08/1880'), 'M')
let cliente27 = new Cliente('Miguel Alves', 'Miguel', new CPF('27', '27/02/2009'), 'M')
let cliente28 = new Cliente('Maria Clara', 'Maria', new CPF('28', '28/10/2010'), 'F')
let cliente29 = new Cliente('Julia Gibim', 'Julia', new CPF('29', '29/02/2001'), 'F')

let servico = new Servico("Corte Feminino", 60, 1)
let servico1 = new Servico("Unha", 15, 2)
let servico2 = new Servico("Chapinha", 18, 3)
let servico3 = new Servico("Progressiva", 200, 4)
let servico4 = new Servico("Tintura capilar", 50, 5)
let servico5 = new Servico("Manicure", 30, 6)
let servico6 = new Servico("Pedicure", 30, 7)
let servico7 = new Servico("Dsign de sobrancelhas", 33, 8)
let servico8 = new Servico("Remoção de rugas", 130, 9)
let servico9 = new Servico("Remoção de manchas na pele", 150, 10)
let servico10 = new Servico("Aplicação de botox", 800, 11)
let servico11 = new Servico("Tratamento para emagrecimento", 950, 12)
let servico12 = new Servico("Corte masculino", 25, 13)
let servico13 = new Servico("Barba", 15, 14)
let servico14 = new Servico("Tratamento para queda de cabelo", 68, 15)

let produto = new Produto("Gel", 15, 1)
let produto1 = new Produto("Pomada", 20, 2)
let produto2 = new Produto("Condicionador", 25, 3)
let produto3 = new Produto("Creme", 30, 4)
let produto4 = new Produto("Esmalte", 5, 5)
let produto5 = new Produto("Shampoo", 30, 6)
let produto6 = new Produto("Mascara de hidratação", 35, 7)
let produto7 = new Produto("Tinta de cabelo", 15, 8)
let produto8 = new Produto("Oléo de hidratação", 10, 9)
let produto9 = new Produto("Spray fixador", 20, 10)
let produto10 = new Produto("Sérum reparador", 50, 11)
let produto11 = new Produto("Queratína", 23, 12)
let produto12 = new Produto("Ampolas para nutríção", 6, 13)
let produto13 = new Produto("Pomada modeladora", 18, 14)
let produto14 = new Produto("Acetona", 12, 15)
let produto15 = new Produto("Algodão", 8, 16)
let produto16 = new Produto("Leave in", 42, 17)
let produto17 = new Produto("Protetor térmico", 60, 18)
let produto18 = new Produto("Touca", 5, 19)
let produto19 = new Produto("Peruca", 50, 20)



cliente.addProduto(produto)
cliente.addProduto(produto)
cliente.addProduto(produto2)
cliente.addProduto(produto9)
cliente.addServicos(servico12)
cliente.addServicos(servico12)
cliente.addServicos(servico13)

cliente1.addProduto(produto3)
cliente1.addProduto(produto4)
cliente1.addProduto(produto13)
cliente1.addProduto(produto17)
cliente1.addServicos(servico)
cliente1.addServicos(servico10)

cliente3.addProduto(produto6)
cliente3.addProduto(produto16)
cliente3.addProduto(produto17)
cliente3.addProduto(produto10)
cliente3.addServicos(servico)
cliente3.addServicos(servico3)
cliente3.addServicos(servico11)



cliente4.addProduto(produto4)
cliente4.addProduto(produto2)
cliente4.addProduto(produto19)
cliente4.addServicos(servico)
cliente4.addServicos(servico10)
cliente4.addServicos(servico2)


cliente10.addServicos(servico11)
cliente10.addServicos(servico12)
cliente10.addProduto(produto16)

cliente24.addProduto(produto)
cliente24.addProduto(produto15)
cliente24.addProduto(produto18)
cliente24.addServicos(servico5)

empresa.getCliente.push(cliente)
empresa.getCliente.push(cliente1)
empresa.getCliente.push(cliente2)
empresa.getCliente.push(cliente3)
empresa.getCliente.push(cliente4)
empresa.getCliente.push(cliente5)
empresa.getCliente.push(cliente6)
empresa.getCliente.push(cliente7)
empresa.getCliente.push(cliente8)
empresa.getCliente.push(cliente9)
empresa.getCliente.push(cliente10)
empresa.getCliente.push(cliente11)
empresa.getCliente.push(cliente12)
empresa.getCliente.push(cliente13)
empresa.getCliente.push(cliente14)
empresa.getCliente.push(cliente15)
empresa.getCliente.push(cliente16)
empresa.getCliente.push(cliente17)
empresa.getCliente.push(cliente18)
empresa.getCliente.push(cliente19)
empresa.getCliente.push(cliente20)
empresa.getCliente.push(cliente21)
empresa.getCliente.push(cliente22)
empresa.getCliente.push(cliente23)
empresa.getCliente.push(cliente24)
empresa.getCliente.push(cliente25)
empresa.getCliente.push(cliente26)
empresa.getCliente.push(cliente27)
empresa.getCliente.push(cliente28)
empresa.getCliente.push(cliente29)

empresa.getServicos.push(servico)
empresa.getServicos.push(servico1)
empresa.getServicos.push(servico2)
empresa.getServicos.push(servico3)
empresa.getServicos.push(servico4)
empresa.getServicos.push(servico5)
empresa.getServicos.push(servico6)
empresa.getServicos.push(servico7)
empresa.getServicos.push(servico8)
empresa.getServicos.push(servico9)
empresa.getServicos.push(servico10)
empresa.getServicos.push(servico11)
empresa.getServicos.push(servico12)
empresa.getServicos.push(servico13)
empresa.getServicos.push(servico14)

empresa.getProdutos.push(produto)
empresa.getProdutos.push(produto1)
empresa.getProdutos.push(produto2)
empresa.getProdutos.push(produto3)
empresa.getProdutos.push(produto4)
empresa.getProdutos.push(produto5)
empresa.getProdutos.push(produto6)
empresa.getProdutos.push(produto7)
empresa.getProdutos.push(produto8)
empresa.getProdutos.push(produto9)
empresa.getProdutos.push(produto10)
empresa.getProdutos.push(produto11)
empresa.getProdutos.push(produto12)
empresa.getProdutos.push(produto13)
empresa.getProdutos.push(produto14)
empresa.getProdutos.push(produto15)
empresa.getProdutos.push(produto16)
empresa.getProdutos.push(produto17)
empresa.getProdutos.push(produto18)
empresa.getProdutos.push(produto19)


while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - cadastrar produtos`);
    console.log(`4 - Listar todos os Produtos:`);
    console.log(`5 - cadastrar serviços:`);
    console.log(`6 - Listar todos os serviços:`);
    console.log(`7 - Adicionar Serviços/Produtos: `);
    console.log(`8 - Listar Serviços do Cliente: `);
    console.log(`9 - Excluir Cliente: `);
    console.log(`10 - Excluir Serviço: `);
    console.log(`11 - Editar Dados do Cliente: `);
    console.log(`12 - Editar Serviços: `);
    console.log(`13 - Editar Produtos: `);
    console.log(`14 - Listar Genero: `);
    console.log(`15 - Listar 5 mais em valor: `);
    console.log(`16 - Listar consumo por gênero: `);
    console.log(`17 - Listar 10 mais em quantidade: `);
    console.log(`18 - Listar 10 menos em quantidade: `);
    console.log(`19 - Listar produto mais consumido: `);
    console.log(`20 - Listar serviço mais consumido: `);


    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getCliente)
            cadastro.cadastrar()
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getCliente)
            listagem.listar()
            break;
        case 3:
            let Produto = new CadastroProdutos(empresa.getProdutos)
            Produto.cadastrar()
            break;
        case 4:
            let listagemProdutos = new ListagemProdutos(empresa.getProdutos)
            listagemProdutos.listar()
            break;
        case 5:
            let servico = new CadastroServico(empresa.getServicos)
            servico.cadastrar()
            break;
        case 6:
            let listagemServico = new ListarServicos(empresa.getServicos)
            listagemServico.listar()
            break;
        case 7:
            let consumoCliente = new ConsumoCliente(empresa)
            consumoCliente.cadastrar();
            break;
        case 8:
            let listarServicoCliente = new ListagemServicoCliente(empresa.getCliente)
            listarServicoCliente.listar();
            break;
        case 9:
            let deletaCliente = new DeletarCliente(empresa.getCliente)
            deletaCliente.deletar();
            break;
        case 10:
            let deletaServico = new DeletarServico(empresa.getServicos)
            deletaServico.deletar();
            break;
        case 11:
            let editarCliente = new AlterarCliente(empresa.getCliente)
            editarCliente.alterar();
            break;
        case 12:
            let editarServico = new AlterarServico(empresa.getServicos)
            editarServico.alterar();
            break;
        case 13:
            let editaProduto = new AlterarProduto(empresa.getProdutos)
            editaProduto.alterar();
            break;
        case 14:
            let listarGenero = new ListagemGenero(empresa.getCliente)
            listarGenero.listar();
            break;
        case 15:
            let listar5Mais = new Listar5MaisConsumo(empresa.getCliente)
            listar5Mais.listar();
            break;
        case 16:
            let listarConsumoGen = new ListarConsumoGen(empresa.getCliente)
            listarConsumoGen.listar();
            break;
        case 17:
            let listar10Mais = new ListaMaiorConsumo(empresa.getCliente)
            listar10Mais.listar();
            break;
        case 18:
            let listar10Menos = new ListaMenorConsumo(empresa.getCliente)
            listar10Menos.listar();
            break;
        case 19:
            let listarProdMais = new ProdMaisConsumido(empresa.getCliente)
            listarProdMais.listar();
            break;
        case 20:
            let listarServMais = new ListarServMais(empresa.getCliente)
            listarServMais.listar();
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}



