import axios from 'axios'
import {formatDate} from 'common/js/date'

export function getMatch(date) {
  const url = '/api/data/tab/new/important'
  let time = formatDate(new Date(), 1) + '16:00:00'
  return axios.get(url, {
    params: {
      start: time
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((e) => {
    console.log(e)
  })
}
