// If running off a local, assume the backend is also supposed to be local
const isLocal = false;
export const baseUrl = isLocal
  ? 'http://localhost:8081/'
  : 'https://web422database.herokuapp.com/';
