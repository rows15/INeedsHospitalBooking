import React, { useState, useEffect, createContext } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    useParams,
  } from 'react-router-dom';
  import { useNavigate } from 'react-router';
import api from '../services/api.js';


export const AuthContext = createContext();
/* const navigate = useNavigate(); */
export const Test = (email, senha,role)=> {
    /* const navigate = useNavigate(); */
    
    /* const handleNavigate = () =>{
        navigate(urlToGo);
    } */
    /* api.post('/admint',{
        role: 'admin',
        id: '3'
    })
    console.log("testei") */
    console.log(email,senha,role)
    return true
    /* return navigate(urlToGo) */
    
    
}
export const AuthProvider = ({ children }) => {
            const login = (email, senha,role) => {

                /* api.post('/admint',{
                    role: 'admin',
                    id: '3'
                }) */
                
                const urlToGo = `/user/${role}`
                

                /* //quando eu recebir inf de email e password iria no servidor e a api criaría  uma seccion

                api.post('/authenticate', {
                    email: email,
                    senha: senha
                })
                .then((responseJwt) => {
                    const userToken = responseJwt.data;

                    api.defaults.headers.common["Authorization"] = `Bearer ${userToken.jwt}`;

                    api.get(`/api/v1/users/email/${email}`)
                    .then((responseUser) => {
                    const loggedUser = {
                        id: responseUser.data.id,
                        nome: responseUser.data.nome,
                        sobrenome: responseUser.data.sobrenome,
                        email: responseUser.data.email,
                        funcao: responseUser.data.funcao.nome,
                        token: userToken
                    };

                    localStorage.setItem('signed', JSON.stringify(loggedUser));
                        setUser(loggedUser);
                        if (email === "katamarieth@gmail.com"){
                            navigate("/administracao/*");
                        } else { navigate("/Produtos") };
                    
                    
                    })
                })
                .catch((error) => {
                    console.error('error', error);
            
                    Swal.fire({
                    icon: 'error',
                    title: 'Ops!',
                    text: 'Por favor, tente novamente, suas credenciais são inválidas',
                    confirmButtonColor: 'var(--primary-color)',
                    imageWidth: 100,
                    width: 350,
                    })
                }); */
            };
};