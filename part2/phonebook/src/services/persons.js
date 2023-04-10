import axios from "axios";

const baseUrl = 'http://localhost:3000/persons'

function getAll() {
  return axios.get(baseUrl).then(res => res.data);
}

function deletePerson(id) {
  return axios.delete(`${baseUrl}/${id}`).then(res => res);
}

function addPerson(newPerson) {
  return axios.post(baseUrl, newPerson).then(res => res.data);
}

function updatePerson(id, obj){
  return axios.put(`${baseUrl}/${id}`, obj).then(res => res.data);
}

export default {getAll, deletePerson, addPerson, updatePerson}