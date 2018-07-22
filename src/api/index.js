import fetch from '../utils/fetch'

const BASE_URL = 'https://www.v2ex.com/'

export default {
  /**
   * 获取最热主题列表
   * @param {*} vmIns 
   */
  getHotList (vmIns) {
    return fetch({
      url: BASE_URL + 'api/topics/hot.json'
    }, vmIns)
  },
  /**
   * 获取最新最提列表
   * @param {*} vmIns 
   */
  getLatestList (vmIns) {
    return fetch({
      url: BASE_URL + 'api/topics/latest.json'
    }, vmIns)
  },
  getPostReply (topic_id, vmIns) {
    return fetch({
      url: BASE_URL + 'api/replies/show.json',
      data: {
        topic_id
      }
    }, vmIns)
  }
}