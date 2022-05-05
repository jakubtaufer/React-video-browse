import axios from "axios";

const KEY = "AIzaSyA340tVh42PzBLp8R8jPjio0Sc4KB-x15M";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
