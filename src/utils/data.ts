import axios from "axios";

export async function getMovies() {
  try {
    const { data } = await axios.get("https://swapi.dev/api/films");

    return data;
  } catch (error: any) {
    return error;
  }
}

// export const getPokemonDetails = async (array: [IPokemon]) => {
//   try {
//     const response = array.map(async (item: IPokemon) => {
//       return await (
//         await axios.get(item.url)
//       ).data;
//     });

//     const data = await Promise.all(response);

//     return data;
//   } catch (error: any) {
//     return error.message;
//   }
// };
