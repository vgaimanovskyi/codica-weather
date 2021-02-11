export default {
  methods: {
    doDate(date) {
      let day = date.getDate();
      let month = date.getMonth() + 1;
      const year = date.getFullYear();
      let h = new Date().getHours();
      let m = new Date().getMinutes();
      day = day < 10 ? '0' + day : day;
      month = month < 10 ? '0' + month : month;
      h = h < 10 ? '0' + h : h;
      m = m < 10 ? '0' + m : m;
      return `${day}.${month}.${year}, ${h}:${m}`
    }
  }
}