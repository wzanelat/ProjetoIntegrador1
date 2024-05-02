import React from 'react'
import styled from 'styled-components'

const Inicio = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: black;
`;

const Descricao = styled.div`
    flex: 1;
    padding-right: 5rem;
    h1{
        font-weight: bold;
        font-size: 3rem;
        color: yellow;
    }
    h2{
        font-weight: bold;
        font-size: 1.5rem;
        color: yellow;
    }

`;

const SecaoResumo = ()=>{
    return(
        <Inicio>
            <Descricao>
                <h1>Sistema Supervisório de Descarte de Documentos e Papéis Brancos</h1>
                <p> Nosso sistema oferece uma solução abrangente e segura para gerenciar o descarte de documentos 
                    confidenciais e papéis em branco. Com uma interface intuitiva e funcionalidades avançadas, ajudamos 
                    empresas e organizações a garantir a privacidade e a conformidade regulatória em relação ao descarte 
                    de informações sensíveis.</p>
                <p> Principais recursos:</p>
                
                <p> Monitoramento em tempo real: Acompanhe o descarte de documentos e papéis em branco em tempo real, 
                    garantindo transparência e controle total sobre o processo.</p>
                
                <p> Segurança aprimorada: Implementamos medidas robustas de segurança para proteger informações 
                    confidenciais, incluindo criptografia de dados e autenticação de usuários.</p>
                
                <p> Relatórios detalhados: Gere relatórios detalhados sobre o histórico de descarte, incluindo data, 
                    hora e usuário responsável, para fins de auditoria e conformidade.</p>
                
                <p> Alertas e notificações: Receba alertas instantâneos sobre atividades suspeitas ou não conformes 
                    relacionadas ao descarte de documentos, permitindo uma resposta rápida e eficaz.</p>
                
                <p> Personalização flexível: Adaptamos o sistema às necessidades específicas da sua organização, 
                    oferecendo opções de personalização para fluxos de trabalho e requisitos de segurança.</p>
                <button>Entre em Contato</button>
            </Descricao>
        </Inicio>
    )
}
export default SecaoResumo