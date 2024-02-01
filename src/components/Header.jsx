import React from 'react';
import './Header.css';
import styled from 'styled-components';
//--------------------------------


const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    padding: 16px;
    background-color: #f2f2f2;
`;

// ----------------------------

const SearchBar = styled.input`
    padding: 8px;
    border: none;
    border-radius: 4px;
    outline: none;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-size: 14px;
    color: #333;
    transition: box-shadow 0.3s ease;
    `;
    // &:focus {
    //     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    // }
    
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
