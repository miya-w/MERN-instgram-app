import axios from "axios";

const url = "http://localhost:5001/stories";

export const fetchStories = async () => axios.get(url);