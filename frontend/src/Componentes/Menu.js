import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledMenu = styled.div`
    background: #58917B;
    color: white;
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;

    ul{
        display: flex;
        list-style: none;
    }

    li{
        padding-left: 2rem;
    }

    a{
        color: white;
        text-decoration: none;
        &:hover{
            background-color: black;
            color: white;
        }

    }
`;

const Menu = ()=>{
    return(
        <StyledMenu>
            <h1>SSDDPB</h1>
            <ul>
                <li><Link to = '/'>Bemvindo</Link></li>
                <li><Link to = '/EmpresasConsumidoras'>EmpresasConsumidoras</Link></li>
                <li><Link to = '/EmpresasFornecedoras'>EmpresasFornecedoras</Link></li>
                <li><Link to = '/Admin'>Administração</Link></li>
                <li><Link to = '/Mensagens'>Mensagens</Link></li>
            </ul>
        </StyledMenu>
    )
}

export default Menu