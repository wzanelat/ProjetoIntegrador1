import React from "react";
import styled from 'styled-components'
import CardsFornecedoras from "../Componentes/CardsFornecedoras";

const ListaCards= styled.div`
    display: grid;
    grid-template-columns: 200px repeat(auto-fill, 200px);
    grid-column-gap: 3rem;
    grid-row-gap: 3rem;
`;

const ListaEmpresasFornecedoras = styled.div`
        min-height: 30vh;
        overflow: hidden;
        padding: 5rem 10rem;
`;

const EmpresasFornecedoras = ()=>{
    return(
        <ListaEmpresasFornecedoras>
            <ListaCards>
                <CardsFornecedoras/>
            </ListaCards>
        </ListaEmpresasFornecedoras>
    )
}

export default EmpresasFornecedoras