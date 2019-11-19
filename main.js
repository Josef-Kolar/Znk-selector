new Vue({
  el: '#zonky',
  data: {
    ratingTypes: [],
    creditAmount: "Select rating"
  },
  mounted() {
    axios.get('https://api.zonky.cz/loans/marketplace')
    .then((response) => {this.ratingTypes = response.data})
  }
});
