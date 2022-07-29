import Navegador from '../components/Navegador'

export default function Inicio (){

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems:'center',
            height: '100vh',
            flexWrap: 'wrap',
            fontFamily: 'cursive',
            fontWeight: 'bold',
            fontSize: '1.8em'
            
            
        }}>
            <Navegador texto="Estiloso" destino="/estiloso" cor="#0000FF"/>
            <Navegador texto="Exemplo" destino="/exemplo" cor="#00FF00"/>
            <Navegador texto="JSX" destino="/jsx" cor="#FF0000"/>
            <Navegador texto="Navegação 01" destino="/navegacao" cor="#FF00FF"/>
            <Navegador texto="Navegação 02" destino="/cliente/mg-3/123" cor="#F0F00F"/>
            <Navegador texto="Componente Estado" destino="/estado" cor="#ff9900"/>
        </div>
    )
}