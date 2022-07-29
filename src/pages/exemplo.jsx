import Cabecalho from "../components/cabeçalho";
import Layout from "../components/Layout"

export default function Exemplo() {
    return (
        <Layout titulo="Usando componente">
            <Cabecalho titulo="Fundamentos Next & React"/>
            <Cabecalho titulo= "Aprendendo NextJs na pratica"/>
        </Layout>
    )
}