
import './campoTexto.css'

const CampoTexto = (props) => {
   



    const aoDigitado = (evento) => {
      props.aoAlterado(evento.target.value)
    }



    return (
        <div className="campo-formulario">
            <label>{props.label }</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}></input>
        </div>
    )
}

export default CampoTexto