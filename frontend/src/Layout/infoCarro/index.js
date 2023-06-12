import { useNavigate } from "react-router-dom";
import './style.css'

const InfoCarro = () => {
    const navigate = useNavigate();
    return (
        <div>
        <h1> Info Carro </h1>
            <table>
                <thead>
                <tr>
                    <th>Codigo</th>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Ano</th>
                    <th>Cor</th>
                    <th>Defeito</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <th>bmw</th>
                        <th>x6</th>
                        <th>2022</th>
                        <th>vermelho</th>
                        <th>vidro quebrado</th>
                    </tr>
                </tbody>
            </table>
            <div>
                <button onClick={() =>{
                    navigate('/')
                }}><b>Voltar</b></button>
                <div>
                <button onClick={() =>{
                    //chama api edit
                }}><b>Editar</b></button>
                <button onClick={() =>{
                    //chama api exclusao
                }}><b>Excluir</b></button>
                </div>
            </div>
        </div>
    )

} 

export default InfoCarro