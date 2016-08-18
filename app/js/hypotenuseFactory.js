trig.factory('hypotenuseFactory', function () {
  return {
    pythagorean: function (sideA, sideB) {
      return  Math.sqrt((sideA * sideA)+(sideB * sideB));
    }
  }
})
