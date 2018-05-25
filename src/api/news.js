import axios from 'axios'

export function getNewslist(tabId, page) {
  let url = ''
  if (page === 1) {
    url = '/api/app/tabs/iphone/' + tabId + '.json'
  } else {
    url = '/api/app/tabs/iphone/' + tabId + '.json&page=' + page
  }
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getTabs() {
  const url = '/api/app/global/2/iphone.json'

  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}
