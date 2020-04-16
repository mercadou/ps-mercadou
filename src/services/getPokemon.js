import axios from "axios";
export default async () => {
  let array = [];
  for (let i = 1; i < 4; i++) {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i + 3}/`);
    console.log(data);
    if(data){ 
        array.push(data);
    }
  }
  return array;
};
