import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'b9592219787b4291a24de8bdf5698528',
  },
});
