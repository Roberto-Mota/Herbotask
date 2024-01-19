import React, { useState } from 'react';
import styled from 'styled-components';

//Styled components cria uma "variável" que pode ser usada como uma tag HTML, basicamente um componente
const FormWrapper = styled.form`
    background-color: linear-gradient(180deg, #FFFFFF 0%, #EAEAEA 100%);
    border-radius: 10px;
    padding: 20px;
    width: 90%;
    max-width: 500px;
    margin: auto;
`;

const Form = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [aquagen, setAquagen] = useState(0);
    const [nourish, setNoursih] = useState(0);
    const [luminum, setLuminum] = useState(0);
    //const price[, setValue4] = useState(0);
    const [image, setImage] = useState(null);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleAquagenChange = (e) => {
        setAquagen(Number(e.target.value));
    };

    const handleNoursihChange = (e) => {
        setNoursih(Number(e.target.value));
    };

    const handleLuminumChange = (e) => {
        setLuminum(Number(e.target.value));
    };

    // const handleValue4Change = (e) => {
    //     setValue4(Number(e.target.value));
    // }; Price will be calculated base on the other values + multiplier o rarity maybe?

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            name,
            description,
            aquagen,
            nourish,
            luminum,
            image
        });
        // Make a post request to the server API
    };

    return (
        <FormWrapper onSubmit={handleSubmit} className='form-wrapper'>
            <label>
                Name:
                <input type="text" value={name} onChange={handleNameChange} />
            </label>
            <br />
            <label>
                Description:
                <textarea value={description} onChange={handleDescriptionChange} />
            </label>
            <br />
            <label>
                Aquagen:
                <input type="number" value={aquagen} onChange={handleAquagenChange} />
            </label>
            <br />
            <label>
                Nourish:
                <input type="number" value={nourish} onChange={handleNoursihChange} />
            </label>
            <br />
            <label>
                Luminum:
                <input type="number" value={luminum} onChange={handleLuminumChange} />
            </label>
            <br />
            {/* <label>
                Value 4:
                <input type="number" value={value4} onChange={handleValue4Change} />
            </label> */}
            <br />
            <label>
                Image:
                <input type="file" onChange={handleImageUpload} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </FormWrapper>
    );
};

export default Form;
