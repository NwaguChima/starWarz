import axios from "axios";
import { IMovies } from "./types";

export async function getMovies() {
  try {
    const { data } = await axios.get("https://swapi.dev/api/films");

    let res: IMovies[] = data.results;
    res.sort((a, b) => +new Date(b.release_date) - +new Date(a.release_date));

    return res;
  } catch (error: any) {
    return error;
  }
}

export const getCharacters = async (array: string[]) => {
  try {
    const response = array.map(async (item: string) => {
      return await (
        await axios.get(item)
      ).data;
    });

    const data = await Promise.all(response);

    console.log("newly rendered", data);
    return data;
  } catch (error: any) {
    return error;
  }
};
