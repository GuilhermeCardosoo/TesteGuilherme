import React from "react";
import axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";
import { useState  } from 'react';

import './style.css'


const NovoCarro = () => {
    const navigate = useNavigate();

    const [marca, setMarca] = useState();
    const [modelo, setModelo] = useState();
    const [ano, setAno] = useState();
    const [cor, setCor] = useState();
    const [defeito, setDefeito] = useState();

    return (
        
    <>
        <div id="mainDiv">
        <h1>Adicione um novo veículo</h1>
            <form>
                <input placeholder="Marca" onChange={async () => {
                    await setMarca(document.querySelector("#mainDiv > form > input:nth-child(1)").value)
                }}/>
                <br/>
                <input placeholder="Modelo" onChange={ async () => {
                    await setModelo(document.querySelector("#mainDiv > form > input:nth-child(5)").value)
                }}/>
                <br/>
                <input placeholder="Ano" onChange={async () => {
                    await setAno(document.querySelector("#mainDiv > form > input:nth-child(5)").value)
                }}/>
                <br/>
                <input placeholder="Cor" onChange={async () => {
                    await setCor(document.querySelector("#mainDiv > form > input:nth-child(7)").value)
                }}/>
                <br/>
                <br/>
                <textarea placeholder="Digite o defeito" onChange={async () => {
                    await setDefeito(document.querySelector("#mainDiv > form > textarea").value)
                }}/>
                <br/>
                <div id="divButton">
                <button onClick={()=>{navigate('/')}}> <b>Voltar</b> </button>
                <button onClick={(e)=>{
                    e.preventDefault();                
                    axios.post('http://127.0.0.1:8000/api/addCarro', {
                        firstName: "Fred",
                        lastName: "Flintstone"
                        //dados não chegam;
                    }, {
                    })

                }}> <b>Cadastrar</b> </button>
                </div>
            </form>    
        </div>
    </>
    )
}


export default NovoCarro;