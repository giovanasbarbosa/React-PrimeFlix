import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import './favoritos.css';
import {toast} from 'react-toastify';

function Favoritos(){

    const[filmes,setFilmes]=useState([])

    useEffect(()=>{
        const minhaLista = localStorage.getItem('@primeflix')
        setFilmes(JSON.parse(minhaLista) || [])

    },[])

    function excluirFilme(id){
        let filtroFilmes = filmes.filter((item)=>{
            return(item.id !== id) //quando o id for diferente do id atual...
        })

        setFilmes(filtroFilmes); //mudar o valor d filmes para o filtrado...
        localStorage.setItem('@primeflix', JSON.stringify(filtroFilmes)); //Mudar no localStorage o valor da tag primfelix...
        toast.success('Filme removido com sucesso!')
    }

    return(
        <div className='meus-filmes'>
            <h1>Meus filmes</h1>
            {filmes.length === 0 && <span>Você ainda nao possui filme salvo :( </span>}
            <ul>
                {filmes.map((item)=>{
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                                <button onClick={()=> excluirFilme(item.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos;