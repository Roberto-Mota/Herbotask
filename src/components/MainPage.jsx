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

  //const history = useHistory();

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
        .catch(error => {
          console.error('Erro ao buscar dados:', error);
          // Notify the user of the error
          // alert('Ocorreu um problema ao buscar os dados. Por favor, tente novamente mais tarde.');
          // if (error.message === 'Failed to fetch') {
          //   alert('Você está offline. Por favor, conecte-se à internet e tente novamente.');
          // }
          //history.push('/pagina-de-erro');
          

        });
      console.log(`arrayItems: ${arrayItems}`);
    }, []); // O array vazio como segundo argumento garante que isso roda apenas uma vez ao montar o componente


    return (
<Body>
    {/* <Description title={"Todas as plantas"} description={"descrição"} /> */}
    {/* //TODO: Adicionar mais plantas ao banco de dados */}
    <ItemList>
        {arrayItems.map((item) => {
          console.log("item: ", item);
          return (
            <Item key={item.id}>
              <h1>{item.nome}</h1>
              <ImageCard image={item.imagem ? default_plant : default_plant}
             //TODO: Preciso consertar o tratamento da imagem e escolher o formato de armazenamento
             // `data:png;base64,${item.imagem.toString('base64')}` : default_plant}
                alt="description"
              />
              {console.log("item.description: ")}
              {console.log(item.description)}
              <Description text={item.description}/>
              {/* {console.log("item.imagem: ")}
              {console.log(item.imagem)} */}

            </Item>
          );
        })}
    </ItemList>
</Body> )};

export default MainPage;