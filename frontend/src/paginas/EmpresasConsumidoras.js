import React from "react";
import styled from 'styled-components'
import CardsConsumidoras from "../Componentes/CardsConsumidoras";

const ListaCards= styled.div`
    display: grid;
    grid-template-columns: 200px repeat(auto-fill, 200px);
    grid-column-gap: 3rem;
    grid-row-gap: 3rem;
`;

const ListaEmpresasConsumidoras = styled.div`
        min-height: 30vh;
        overflow: hidden;
        padding: 5rem 10rem;
`;

const EmpresasConsumidoras = ()=>{
    return(
        <ListaEmpresasConsumidoras>
            <ListaCards>
                <CardsConsumidoras/>
            </ListaCards>
        </ListaEmpresasConsumidoras>
    )
}

export default EmpresasConsumidoras