export default {
  methods: {
    whatDay(day) {
      let result;
      switch (day) {
        case 0:
          result = "Sunday";
          break;
        case 1:
          result = "Monday";
          break;
        case 2:
          result = "Tuesday";
          break;
        case 3:
          result = "Wednesday";
          break;
        case 4:
          result = "Thursday";
          break;
        case 5:
          result = "Friday";
          break;
        case 6:
          result = "Saturday";
          break;
      }
      return result;
    }
  }
}