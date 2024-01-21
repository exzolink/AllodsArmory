import axios from "axios"

const getUsers = (name, server) => {
  return axios.post("https://api.allodswiki.ru/api/v1/armory/avatars", {
    filter: {
      name: name,
      server: server,
    },
  })
}

const getUser = (id) => {
  return axios.get(`https://api.allodswiki.ru/api/v1/armory/avatars/${id}`)
}

export { getUsers, getUser }
