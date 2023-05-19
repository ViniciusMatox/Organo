import { useState } from 'react'
import BotaoCriaCard from '../Botao/BotaoCriaCard'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import CampoTexto from '../campoTexto/campoTexto'
import './formulario.css'

const Form = (props) => {

    // const times = [
    //     'Programação',
    //     'Front-End',
    //     'Data Science',
    //     'Devops',
    //     'UX e Design',
    //     'Mobile',
    //     'Inovação e Gestão'
    // ]


    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')


    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.colaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time    

        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')

    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2 className='formulario__titulo'>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto
                    
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome aqui"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
               
                <CampoTexto
                    
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo aqui"
                    valor={cargo}
                    aoAlterado = {valor => setCargo(valor)}
                />
               
                <CampoTexto
                
                    label="Imagem"
                    placeholder="Insira o endereço da imagem aqui"
                    valor={imagem}
                    aoAlterado = {valor => setImagem(valor)}
                />
                
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={props.times}
                    valor={time}
                    aoAlterado = {valor => setTime(valor)}
                />
                <BotaoCriaCard>
                    
                    Criar card

                </BotaoCriaCard>
                
            </form>
        </section>
    )
}

export default Form