import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 49fc0583561fb85c5dacca51f43002564da19ed54648da87c6651149ff614157"
  }
});
