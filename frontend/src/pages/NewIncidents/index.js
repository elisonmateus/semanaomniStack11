import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './style.css';

import LogoImg from '../../assetss/logo.svg';

export default function NewIncidents() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();
    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title, description, value,
        };
        try {
            await api.post('incidents ', data, {
                headers: {
                    Authorization: ongId,
                }
            })
            history.push('/profile');
        } catch (err){
            alert ('Erro ao cadastrar caso.');
        }
    }


    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={LogoImg} alt="Be The Hero"/>   

                    <h1>Cadastar novo caso</h1>
                    <p>Descreva p caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="back-link" to="/profile"> 
                        <FiArrowLeft size= {16} color = "#E02041"/>                    
                    Voltar
                    </Link>

                </section>
                

                <form onSubmit={handleNewIncident}>
                    <input 
                    placeholder="título do caso"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    />

                    <textarea 
                    placeholder="Descrição"
                    value={description}
                    onChange={e => setDescription(e.target.value)}                    /> 

                    <input 
                    placeholder="Valor em Reais"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    />                      
                                     

                    <button className="button" type="submit" > Cadastrar </button>
                </form>
            </div>
        </div>
    )
}