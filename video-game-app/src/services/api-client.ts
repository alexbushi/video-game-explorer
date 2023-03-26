import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a8281442e4964b4b869f4ae6e1cb23e8",
  },
});
