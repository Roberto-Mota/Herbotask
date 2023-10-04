import { useState } from 'react'
import './App.css'
import ToggleTheme from './components/ToggleTheme'

import bookCape from './assets/images/cape.png';
import boulderBack from './assets/images/rocky_mushroom.png';
import purpleRoot from './assets/images/purple_root.png';
import fruityBush from './assets/images/fruity_bush.png';
import Item from './components/Item.jsx';
import TextTemplate from './components/TextTemplate.jsx';
import ImageCard from './components/ImageCard.jsx';
import ItemList from './components/ItemList.jsx';
// import Timer from './components/Timer/Timer';

const arrayItems = [
  {
    title: 'Boulderback Shrooms',
    image: boulderBack,
    description:
      'Boulderback Shrooms are sturdy and robust mushrooms found in rocky terrains and mountainous regions. They have a distinct appearance with their thick, rugged caps and a textured surface resembling the roughness of boulders. These mushrooms grow in clusters, clinging to the crevices and rocky outcrops.',
  },
  {
    title: 'Revitalia Tuber',
    image: purpleRoot,
    description:
      'The Revitalia Tuber is a common root plant widely farmed in various regions due to its easy cultivation. With a hearty taste, it has become a favored ingredient in flavorful soups known for their revitalizing properties. This remarkable tuber promotes vitality and overall well-being, making it a cherished staple among farmers, herbalists, and those seeking nourishment and rejuvenation.',
  },
  {
    title: 'Ruberry Bush',
    image: fruityBush,
    description:
      'Favored by explorers, nomads, and nature enthusiasts, the Ruberry Bush thrives in both cultivated gardens and hidden corners of the wild. Its clusters of red berries serve as a natural source of nourishment, offering a refreshing and revitalizing taste to those fortunate enough to stumble upon them. Their compact size and rich flavor make them a versatile ingredient for cooks and herbalists, enhancing a variety of dishes, beverages, and medicinal concoctions.',
  },
];

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('light')
  return (
    <div>
      <header>
        <img src={bookCape} alt="A farm like nature journal notebook, blank background" />
        <h1>Plants Menu</h1>
        <p>These are the plants that you can plant</p>
      </header>
      <ItemList>
        {arrayItems.map((item, index) => (
          <Item key={index}>
            <ImageCard image={item.image} />
            <TextTemplate title={item.title}
              description={item.description} />
          </Item>
        ))}
      </ItemList>
    </div>
  );
}

export default App
