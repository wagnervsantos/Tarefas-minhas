import { useState } from "react"
import './home.css'

import { auth } from "../../firebaseConnection";
import { signInWithEmailAndPassword } from 'firebase/auth'



import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"



export default function Home(){
    const [email, setEmail] = useState('')
    const [password, setPassoword] = useState('')
    

    const navigate = useNavigate();

async function handleLogin(e){
    e.preventDefault();

    if(email !== '' && password !== ''){
        
       await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            //navegar para /admin
            navigate('/admin', {replace: true} )
        })
        .catch(() => {
            console.log("ERRO AO FAZER O LOGIN")
        })
    }else{
        alert('Preencha todos os campos!')
    }
    
}

    return(
      <div className="home-container">
        <h1> Lista de Tarefas</h1>
        <span>Gerencia sua agenda</span>

        <form className="form" onSubmit={handleLogin}>
            <input 
            
            type="text"
            placeholder="Digite seu Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value) }
            />

            <input 
           
            type='password'
            placeholder="*****"
            value={password}
            onChange={(e) => setPassoword(e.target.value) }
            />

            <button type="submit"> Acessar</button>
        </form>

        <Link className="button-link" to='/register'>
            Não possui uma conta? Cadastre-se
        </Link>
      </div>
    )
    
  }