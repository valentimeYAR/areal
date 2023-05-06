import axios from "axios";

const  a = () => axios.get("api/articles")
let b = a()
console.log(b);
