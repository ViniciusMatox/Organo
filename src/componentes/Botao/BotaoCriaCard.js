import './BotaoCriaCard.css'

const BotaoCriaCard = (props) => {
    return (
        <button className='botao btn-animated'>
            {props.children}
        </button>
    )
}

export default BotaoCriaCard