import React, { useState } from 'react';
import styled from 'styled-components';
import Input from './Input';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const apiUrlMock = 'http://localhost:3000'; // URL do servidor db.json
const apiUrl = 'http://localhost:1234'; // URL da API mongo

//Styled components cria uma "variável" que pode ser usada como uma tag HTML, basicamente um componente
const FormWrapper = styled.form`
    background-color: linear-gradient(180deg, #FFFFFF 0%, #EAEAEA 100%);
    border-radius: 10px;
    padding: 20px;
    min-width: 10%;
    max-width: 50vw;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

const Form = () => {
    const [nome, setNome] = useState('');
    const [description, setDescription] = useState('');
    const [aquagen, setAquagen] = useState(0);
    const [nourish, setNoursih] = useState(0);
    const [luminum, setLuminum] = useState(0);
    //const price[, setValue4] = useState(0);
    //const [imagem, setImage] = useState('nullimage');
    // const [apiResponse, setApiResponse] = useState(null);

    const handleNomeChange = (event) => {
        console.log(nome)
        setNome(event.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleAquagenChange = (e) => {
        setAquagen(Number(e.target.value));
    };

    const handleNourishChange = (e) => {
        setNoursih(Number(e.target.value));
    };

    const handleLuminumChange = (e) => {
        setLuminum(Number(e.target.value));
    };

    const handleValue4Change = (e) => {
        setValue4(Number(e.target.value));
    }; // Price will be calculated base on something, idk what yet

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImage(reader.result); //The result attribute contains the data as a data: URL representing the file's data as a base64 encoded string. 
        };
        console.log("file:");
        console.log(file);
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const basePrice = 10.10; // Base price for all plants

        const data = {
            nome,
            description,
            matter : {
                aquagen,
                nourish,
                luminum
            },
            basePrice,
            // imagem
        };

        fetch(`${apiUrl}/plantas`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            console.log('API response:', result);
            setApiResponse(result); // Set the API response to the state
            // Handle the API response here
        })
        .catch(error => {
            console.error('API error:', error);
            // Handle the API error here
        });
    };

    //TODO: Manter o formulário esteticamente agradável, nao precisa ser resultado final

    return (
        <FormWrapper onSubmit={handleSubmit} className='form-wrapper'>
            <Input>
                <TextField id="outlined-basic" label="Name:" variant="outlined" required="true" type="text" value={nome} onChange={handleNomeChange}/>
                <input type="text" />
            </Input>
            <Input>
                <TextField id="outlined-basic" label="Description:" variant="outlined" multiline rows={4} value={description} onChange={handleDescriptionChange}/>
            </Input>
            <Input>
                <TextField id="outlined-basic" label="Aquagen:" variant="outlined" type="number" value={aquagen} onChange={handleAquagenChange}/>
            </Input>
            <Input>
                <TextField id="outlined-basic" label="Nourish:" variant="outlined" type="number" value={nourish} onChange={handleNourishChange}/>
            </Input>
            <Input>
                <TextField id="outlined-basic" label="Luminum:" variant="outlined" type="number" value={luminum} onChange={handleLuminumChange}/>
            </Input>
            {/* <label>
                Value 4:
                <input type="number" value={value4} onChange={handleValue4Change} />
            </label> */}
            <br />
            {/* <label>
                Image:
                <input type="file" onChange={handleImageUpload} />
            </label> */}
            <br />
            <Button variant="contained" type="submit">Submit</Button>
        </FormWrapper>
    );
};

export default Form;
