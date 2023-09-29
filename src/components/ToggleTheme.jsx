//Aqui ficara um componente de botão para trocar o tema da aplicação como um todo
import React from 'react';
import { ThemeContext } from '../context/ThemeContext';


export default function ToggleTheme() {
    const { toggleTheme } = React.useContext(ThemeContext);
    return (
        <button onClick={toggleTheme}>Mudar Tema</button>
    );

    toggleTheme = () => {
        this.setState({ theme: this.state.theme === 'dark' ? 'light' : 'dark' });

    }

}

//AiGeneratedCode