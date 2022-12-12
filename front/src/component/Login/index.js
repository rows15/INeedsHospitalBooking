import React, { useState, useEffect, useContext } from "react";
import { AuthContext, callApiSimpleAuth } from "../../../src/context/auth";
import { useNavigate } from 'react-router';




const Login = () => {


    useEffect(() => {




    }, []);
    /* const { login } = useContext(AuthContext); */
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("patient");
    const [auth, setAuth] = useState(false);


    const navigate = useNavigate();

    async function signIn(email, password, role) {
        
        
        var signedIn = await callApiSimpleAuth(email, password, role)
        return signedIn
    }




    const handleSubmit = async (e) => {
        e.preventDefault();

        /* console.log(email,password,role) */

        if (await signIn(email, password, role)) {
            const urlToGo = `/user/${role}`
            navigate(urlToGo)
        }else {
            console.log("Nao Loguei")
        }




        
        /* login(email, password);// integração com o meu contexto / api */
    };
    return (

        <div id="login">
            <h1 className="title">Login</h1>

            <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                    <label>
                        Login Role
                    </label>
                    <select onChange={(e) => setRole(e.target.value)}>
                        <option value="admin">Admin</option>
                        <option value="medic">Medic</option>
                        <option selected value="patient">Patient</option>

                    </select> <br />
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="field">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="actions">
                    <button type="submit">Enter</button>
                </div>


            </form>

        </div>


    );
}


export default Login;