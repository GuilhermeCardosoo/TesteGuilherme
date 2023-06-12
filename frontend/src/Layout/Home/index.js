import React from 'react';
import axios from 'axios';
import { useState  } from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import './style.css'


const Home = () => {
    const [allCar, setAllCar] = useState([]);
    const [isTable, setIsTable] = useState(false);
    const [showP, setShowP] = useState(true);

    const navigate = useNavigate();

    async function buscaCarro(){
        
       await axios.get('http://127.0.0.1:8000/api/carro', {
      })
      .then(async function (response) {
        await setShowP('Agurde!')

        await setAllCar(response.data);
        await setIsTable(true)
        await setShowP(false)
      })
      .catch(function (error) {
        alert('Liga a API')
      })
     }
    async function addCarro(){
        navigate("/addCarro");
    }

    return (
        <main>
            <div id="mainDiv">
            <h1>Home</h1>
            <button onClick={addCarro}><b>Adicionar</b></button>
            <br/>
            {showP ?
            <p>Clique em pesquisar para trazer os veículos;</p>
            :<br/>
            }
            <button onClick={buscaCarro}><b>Pesquisar</b></button>
            <br/>
            <br/>
            <br/>
           { isTable ?
           <table>
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>acesse</th>
                </tr>
            </thead>
            <tbody>
            {
                allCar.map(function(carro) {
                    return (
                        <tr>
                            <td>{carro.id}</td>
                            <td>{carro.marca}</td>
                            <td>{carro.modelo}</td>
                            <td><a onClick={async ()=>{
                                navigate('/infoCarro')
                            }}><b>Clique aqui</b></a></td>
                        </tr>
                         )            
                })
            } </tbody>
            </table>: '' } 
            </div>
        </main>
    )
}

export default Home; 