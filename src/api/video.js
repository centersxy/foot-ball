import axiso from 'axios'

export function getVideo(page) {
  const url = 'api/mobile/tab/43/archives?page=' + page

  return axiso.get(url).then((res) => {
    return Promise.resolve(res.data)
  }).catch((e) => {
    console.log(e)
  })
}
