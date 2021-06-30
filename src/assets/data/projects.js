import { v4 as uuidv4 } from 'uuid';
import Todoimg from '../images/Todoimg.jpeg';

import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Todo-App',
    desc:
      'An application to track your daily activities to use time more efficiently. I developed the website and the mobile app',
    img: Todoimg,
  },

  {
    id: uuidv4(),
    name: "Venkatesh's Portfolio",
    desc: 'A portfolio for Venkatesh. The portfolio is made using ReactJs.',
    img: CavinImg,
  },
];

export default projects;
