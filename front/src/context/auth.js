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

export async function callApiSimpleAuth(email, password,role) {
    try {
      const URL = `/simpleauth`;
      const response = await api.post(URL,{
        role: role,
        email: email,
        password: password
    });
    if (!response.data.id){
        return false
    }
    localStorage.setItem('signed', JSON.stringify({auth: true, id: response.data.id, role:role,name:response.data.name}));
    
    return true
      /* if (response.data.authorization){console.log("Autorizado pela api")} */
      
      
    } catch (error) {
    return false}
  }


/* export const async Auth = (email, password,role)=> {
    var teste = await callApiSimpleAuth(email,password,role)
   
} */


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