const API_ROOT = `http://localhost:3001/api/v1`;

const headers = {
  'Content-Type': 'application/json',
  Accepts: 'application/json'
};

const getPaintings = () => {
  return fetch(`${API_ROOT}/paintings/`, { headers: headers }).then(res =>
    res.json()
  );
};

const login = (username, password) => {
  return fetch(`${API_ROOT}/auth`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ username, password })
  }).then(res => res.json());
};

const getCurrentUser = () => {
  return fetch(`${API_ROOT}/current_user`, {
    headers: headers
  }).then(res => res.json());
};

export default {
  auth: {
    login,
    getCurrentUser
  },
  paintings: {
    getPaintings
  }
};