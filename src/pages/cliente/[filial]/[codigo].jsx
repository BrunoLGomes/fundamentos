import Layout from "../../../components/Layout";
import {useRouter} from "next/router"

export default function ClientePorCodigo () {
    const router = useRouter()


    return(
        <Layout titulo="Navegação Dinâmica">
            <div>Codigo Cliente = {router.query.codigo}</div>
            <div>Codigo Filial = {router.query.filial}</div>
        </Layout>
    )
}