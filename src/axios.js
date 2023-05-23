import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://us-central1-react-c2bf5.cloudfunctions.net/api",
  // baseURL: "http://127.0.0.1:5001/react-c2bf5/us-central1/api",
});

export default instance;
