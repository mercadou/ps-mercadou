import axios from "axios";
export default
async() => {
    const { data } = await axios.get(
        "https://swapi.co/api/people/1/?format=json"
    );
    return data
}