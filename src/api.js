const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const api = {
  baseUrl: `${proxyUrl}https://evilinsult.com/generate_insult.php?lang=en&type=json`,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Credentials': 'true', 
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  },
}

export default api;
