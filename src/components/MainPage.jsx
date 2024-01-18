import React from 'react';
import ItemList from './ItemList';
import Item from './Item'
import RoundCard from './RoundCard';
import TextTemplate from './TextTemplate'
import apex_default_1 from '../assets/images/apex_default_1.png';
import apex_default_2 from '../assets/images/apex_default_2.png';
import fruityBush from '../assets/images/fruity_bush.png';
import './ItemList.css';
import ImageCard from './ImageCard';
import { useState, useEffect } from 'react';

const apiUrl = 'http://localhost:3000'; // URL do servidor db.json

// const arrayItems = [
//     {
//       title: 'Apex Terrarium',
//       image: apex_default_1,
//       description:
//         'Boulderback Shrooms are sturdy and robust mushrooms found in rocky terrains and mountainous regions. They have a distinct appearance with their thick, rugged caps and a textured surface resembling the roughness of boulders. These mushrooms grow in clusters, clinging to the crevices and rocky outcrops.',
//     },
//     {
//       title: 'Revitalia Terrarium',
//       image: apex_default_2,
//       description:
//         'The Revitalia Tuber is a common root plant widely farmed in various regions due to its easy cultivation. With a hearty taste, it has become a favored ingredient in flavorful soups known for their revitalizing properties. This remarkable tuber promotes vitality and overall well-being, making it a cherished staple among farmers, herbalists, and those seeking nourishment and rejuvenation.',
//     },
//     {
//       title: 'Ruberry Bush',
//       image: fruityBush,
//       description:
//         'Favored by explorers, nomads, and nature enthusiasts, the Ruberry Bush thrives in both cultivated gardens and hidden corners of the wild. Its clusters of red berries serve as a natural source of nourishment, offering a refreshing and revitalizing taste to those fortunate enough to stumble upon them. Their compact size and rich flavor make them a versatile ingredient for cooks and herbalists, enhancing a variety of dishes, beverages, and medicinal concoctions.',
//     },
//   ];

const MainPage = ({ title, description }) => {

  const [arrayItems, setArrayItems] = useState([]);

  useEffect(() => {
      const herbs = (`${apiUrl}/herbs`);
      console.log(herbs);
      fetch(herbs) // Substitua com a URL correta da sua API

      .then(response => response.json())
      //.then(data => console.log(data)) console.data não retornava nada
          .then(data => setArrayItems(data))
          .then(console.log(arrayItems))
          .then(console.log('Requisição feita'))
          .catch(error => console.error('Erro ao buscar dados:', error));
  }, []); // O array vazio como segundo argumento garante que isso roda apenas uma vez ao montar

    return (

<div>
      <header>
        <h1>Plants Codex</h1>
        <p>These are the the plants that you can plant in your Ecochambers</p>
        <ItemList>
        {
        arrayItems.map((item, index) => (
          <Item key={index}>
            <ImageCard image={item.image} title={item.title}/>
            <TextTemplate title={item.title}
              description={item.description} />
          </Item>
        ))}
        </ItemList>
      </header>
    </div> )};

export default MainPage;