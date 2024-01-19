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
import Body from './Body';

const apiUrlMock = 'http://localhost:3000'; // URL do servidor db.json
const apiUrl = 'http://localhost:1234'; // URL do servidor mongo
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

const MainPage = () => {

  const [arrayItems, setArrayItems] = useState([]);

  useEffect(() => {
      const plantas = (`${apiUrl}/plantas`);
      console.log(plantas);
      fetch(plantas) // Substitua com a URL correta da sua API
      .then(response => response.json())
      .then(response => {
        console.log("response: ");
        console.log(response);
        return response;
      })
      //.then(data => console.log(data)) console.data não retornava nada
      .then(response => setArrayItems(response))
      .catch(error => console.error('Erro ao buscar dados:', error));
  console.log(`arrayItems: ${arrayItems}`);
  
        }, []); // O array vazio como segundo argumento garante que isso roda apenas uma vez ao montar

    return (
<Body>
    <TextTemplate title={"Todas as plantas"} description={"descrição"} />
    <ItemList>
        {arrayItems.map((item) => {
          console.log("item: ", item);
          return (
            //<Item key={item.id} title={item.name} description={item.description} image={item.image} />
            <Item key={item.id}>
              <h1>{item.nome}</h1>
              <p>{item.description}</p>
            </Item>
            );
        })}
    </ItemList>
</Body> )};

export default MainPage;