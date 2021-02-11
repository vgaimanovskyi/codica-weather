export default {
  methods: {
    whatTemp(temp) {
      const newTemp = Math.round(temp);
      return newTemp > 0 ? `+${newTemp}` : newTemp;
    }
  }
}