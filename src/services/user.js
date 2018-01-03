const serverURL = 'http://localhost:3000';

export default function getUsers() {
  return fetch(`${serverURL}/users`, {
    method: 'GET'
  }).then(data => data.json());
}