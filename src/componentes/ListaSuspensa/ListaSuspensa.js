import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='lista'>
            <label className='lista__titulo'>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} className='lista__seletor' value={props.valor}>
                <option value = ''></option>
                {props.itens.map((item, index) => {
                    
                    return <option key={index}>{ item }</option>

                })}
            
            </select>
        </div>
    )
}

export default ListaSuspensa
