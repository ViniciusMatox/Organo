import Colaborador from '../Colaborador/Colaborador'
import './Time.css'

const Times = (props) => {

    const cssSection = { backgroundColor: props.corSecundaria }
    const cssH3 = { borderColor: props.corPrimaria }

    return (


        (props.colaboradores.length > 0) ?
            <section className='time' style={cssSection}>
                <h3 className='section__time__titulo' style={cssH3}>{props.nome}</h3>

                <div className='colaboradores__time'>

                    {props.colaboradores.map(colaborador => <Colaborador corDeFundo = {props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)}

                </div>

            </section>
            :''
    )
}


export default Times 