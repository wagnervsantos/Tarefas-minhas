import { useState, useEffect } from "react"; 
import { auth } from "../firebaseConnection";
import { onAuthStateChanged } from "firebase/auth";
//import { async } from "@firebase/util";
//import { json } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default function Private({ children }) {
    const [loading, setLoading] = useState(true);
    const [signed, setSigned] = useState(false);

    useEffect(() =>{
        async function checkLogin(){
            const unsub = onAuthStateChanged(auth, (user) => {
                //SE TEM USER LOGADO
                if(user){
                    const userData = {
                        uid: user.uid,
                        email: user.email,
                    }

                    localStorage.setItem("@detaiUser", JSON.stringify(userData))

                    setLoading(false);
                    setSigned(true)

                } else{
                    // NAO POSSUI USER LOGADO
                    setLoading(false);
                    setSigned(false);
                }
            })
        }

        checkLogin();
    }, [])
    if(loading){
        return(
            <div></div>
        )

    }
    if(!signed){
        return <Navigate to="/"/>
    }
    return children;
}