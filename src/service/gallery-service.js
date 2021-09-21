import axios from "axios";
export { getAlbumsList };

const getAlbumsList = async () => {
  const resp = await axios.get(
    "https://jsonplaceholder.typicode.com/users/1/albums"
  );
  return resp.data;
};
