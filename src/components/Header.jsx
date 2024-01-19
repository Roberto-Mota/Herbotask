import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    background-color: #f2f2f2;
`;

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
            <OptionsContainer>
                <Option>Option 1</Option>
                <Option>Option 2</Option>
                <Option>Option 3</Option>
            </OptionsContainer>
        </HeaderContainer>
    );
};

export default Header;
