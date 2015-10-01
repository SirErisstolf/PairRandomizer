angular.module('randomApp', [])
  .controller('RandominzerController', function() {

    var randomizer = this;

    randomizer.members = [ "Delfor", "Lucas" ,"Vicky","Eduardo","Fernanda","Lorgio","Rodrigo","Sebastian"];
    randomizer.pairs = [];
    
    randomizer.shuffleArray = function () {

      var array = randomizer.members;   
      var currentIndex = array.length, temporaryValue, randomIndex ;
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

      // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

      // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

    return array;
  }

  randomizer.getPairs = function(){

      var pairs = [];
      var array = randomizer.shuffleArray(randomizer.members);
      var i = 0;
      while (i < array.length){

        pairs.push({member1:array[i], member2:array[i+1]});
        i=i+2;
      }

    randomizer.pairs = pairs;
    return pairs
  }

});