import React from 'react';
import ItemList from './ItemList';
import Item from './Item'
import RoundCard from './RoundCard';
import Description from './Description'
import apex_default_1 from '../assets/images/apex_default_1.png';
import apex_default_2 from '../assets/images/apex_default_2.png';
import fruityBush from '../assets/images/fruity_bush.png';
import './ItemList.css';
import ImageCard from './ImageCard';
import { useState, useEffect } from 'react';
import Body from './Body';
import default_plant from '../assets/images/default_plant.png';
//import { useHistory } from 'react-router-dom';

const apiUrlMock = 'http://localhost:3000'; // URL do servidor db.json
const apiUrl = 'http://localhost:1234'; // URL da API mongo

const PageTasks = () => {

  //const history = useHistory();

  const [arrayItems, setArrayItems] = useState([]);

  useEffect(() => {
      const plantas = (`${apiUrl}/plantas`);
      console.log(plantas);
      fetch(plantas) 
      .then(response => response.json())
      .then(response => {
        console.log("response: ");
        console.log(response);
        return response;
      })
        .then(response => setArrayItems(response))
        .catch(error => {
          console.error('Erro ao buscar dados:', error);
        });
      console.log(`arrayItems: ${arrayItems}`);
    }, []); 

    return (
<Body>
        {arrayItems.map((item) => {
          console.log("item: ", item);
          return (
            <Task key={task.id}>
              <h1>{item.nome}</h1>
              <ImageCard image={item.imagem ? default_plant : default_plant}
                alt="description"
              />
              {console.log("item.description: ")}
              {console.log(item.description)}
              <Description text={item.description}/>

            </Task>
          );
        })}
</Body> )};

export default PageAllPlants;