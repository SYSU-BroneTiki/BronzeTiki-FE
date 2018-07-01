export default {
  genFormData (data) {
    let formData = new FormData()
    for (var key in data) {
      formData.append(key, data[key])
    }
    return formData
  },
  packData (tData) {
    return {
      'data': JSON.stringify(tData)
    }
  }
}
