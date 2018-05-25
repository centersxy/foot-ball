import axios from 'axios'

export function getData(id) {
  const url = '/api/data/team_ranking/' + id

  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  }).catch((e) => {
    console.log(e)
  })
}
