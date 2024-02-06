import React from 'react';
import './Header.css';
import styled from 'styled-components';
// ----------------------------
// Por default o SearchBar não é exibido (para pode ser exibido apenas em telas maiores que 834px)
const SearchBar = styled.input`
    padding: 8px;
    border: none;
    border-radius: 4px;
    display: none;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-size: 14px;
    color: #333;
    transition: box-shadow 0.3s ease;
    `;
    // &:focus {
    //     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    // }

//--------------------------------
// É possivel passar variáveis para elementos do styled-components
// white-space: nowrap; faz com que o texto não quebre linha
// overflow: hidden; faz com que o texto que ultrapasse o tamanho do container seja ocultado
// gap: 2rem; faz com que haja um espaçamento entre os elementos filhos

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    padding: 16px;
    background-color: #f2f2f2;
    white-space: nowrap;
    @media (min-width: 834px) { // Se a tela for maior que 834px
        ${SearchBar} {
            display: block;
        }
        top: 0%;
      }
    @media (max-width: 834px) { // Se a tela for menor que 834px
     bottom: 0%;
    }
`;

// ----------------------------


    
const Logo = styled.img`
    width: 100px;
    height: auto;
`;

const OptionsContainer = styled.div`
    display: flex;
`;

const Option = styled.div`
    margin-left: 16px;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Logo src="../assets/react.svg" alt="Logo" />
                <SearchBar placeholder="Search..." />
            <OptionsContainer>
                <Option>Option 1</Option>
                <Option>Option 2</Option>
                <Option>Option 3</Option>
                
            </OptionsContainer>
        </HeaderContainer>
    );
};



export default Header;
