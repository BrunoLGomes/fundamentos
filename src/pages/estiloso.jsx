import styles from '../styles/Estilo.module.css'
import Layout from '../components/Layout'


export default function Estiloso () {
    return (
        <Layout titulo= "Exemplo de CSS Modularizado">
        <div className={styles.roxo}> 
            <h1>Estilo usando modulo CSS</h1>
        </div>
        </Layout>
    )
}