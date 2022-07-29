import Layout from "../components/Layout"

export default function jsx () {
    const titulo = <h1>JSX é um conceito central</h1>
    function subtitulo() {
        return <h2>{"Muito legal".toUpperCase()}</h2>
    }




    return (
        <Layout titulo="JSX">

        <div>
            {titulo}
            {subtitulo()}
            <p>
                {JSON.stringify({nome: 'joão', idade: 30})}
            </p>
        </div>
        </Layout>
    )
}