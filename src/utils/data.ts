import axios from "axios";
import { IMovies } from "./types";

// http://anyorigin.com/go?url=https://swapi.dev/api/films
export async function getMovies() {
  try {
    const { data } = await axios.get("https://swapi.dev/api/films");

    let res: IMovies[] = data.results;
    res.sort((a, b) => +new Date(a.release_date) - +new Date(b.release_date));

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

    let data = await Promise.all(response);
    data = data.map((ch) => {
      if (ch.gender === "male") {
        ch.gender = "M";
      }
      if (ch.gender === "female") {
        ch.gender = "F";
      }
      if (ch.gender === "hermaphrodite") {
        ch.gender = "h/m";
      }

      if (ch.gender === "none") {
        ch.gender = "h/m";
      }
      return ch;
    });
    return data;
  } catch (error: any) {
    return error;
  }
};
