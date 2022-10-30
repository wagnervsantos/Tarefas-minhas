import { useState } from "react"
import { Link } from "react-router-dom"
import { auth } from "../../firebaseConnection";
import { createUserWithEmailAndPassword } from 'firebase/auth'
//import firebase from "firebase/app";
import "firebase/auth";


import { useNavigate } from 'react-router-dom'

export default function Resgister(){
    const [email, setEmail] = useState('')
    const [password, setPassoword] = useState('')
    
    const navigate = useNavigate();


async function handleResgister(e){
    e.preventDefault();

    if(email !== '' && password !== ''){
      await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/admin', { replace: true })
      })
      .catch(()=> {
        console.log("ERRO AO FAZER O CADASTRO")
      })
    }else{
        alert('Preencha todos os campos!')
    }
    
}

    return(
      <div className="home-container">
        <h1> Cadastre-se</h1>
        <span>Vamos criar sua conta</span>

        <form className="form" onSubmit={handleResgister}>
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

            <button type="submit"> Registrar</button>
        </form>

        <Link className="button-link" to='/'>
            Já possui uma conta? Faça login!
        </Link>
      </div>
    )
  }