"use strict";

describe("AvatarGenerator", function() {
  var avGen
  var frame;

  beforeEach(function() {
    avGen = new AvatarGenerator();
  });

  describe("Instantiation", function(){
    it("receives an integer argument upon instatiation", function(){
      var tester = new AvatarGenerator(3456)
      expect(tester.visitorId).toEqual(3456);
    });
    // it("bowls again if you do not get a strike", function(){
    //   spyOn(Math, 'random').and.returnValue(0.1);
    //   frame.bowlFrame(game);
    //   expect(frame.score.length).toEqual(2);
    // });
    // it("cannot have a frame totalling more than 10", function(){
    //   frame.bowlFrame(game);
    //   expect(frame.score[0]+frame.score[1]).toBeLessThan(11)
    // });
  });

  // describe("Final frame bonus:", function(){
  //   beforeEach(function(){
  //     for (var i = 0; i < 9; i++) {
  //       frame.bowlFrame(game);
  //       frame.resetFrame();
  //       game.determineOutcomeofFrame();
  //       game.calculateBonuses();
  //     }
  //     });
  //   it("allows an extra bowl to calculate the bonus for the last frame if a spare is rolled", function() {
  //     spyOn(Math, 'random').and.returnValues(0.5, 0.9, 0.3);
  //     frame.bowlFrame(game);
  //     frame.resetFrame();
  //     game.determineOutcomeofFrame();
  //     game.calculateBonuses();
  //     expect(game.bonuses[game.bonuses.length-1]).toEqual([3])
  //   });
  //   it("allows an extra 2 bowls to calculate the bonus for the last frame if a strike is rolled", function() {
  //     spyOn(Math, 'random').and.returnValues(1, 0.3, 0.3);
  //     frame.bowlFrame(game);
  //     frame.resetFrame();
  //     game.determineOutcomeofFrame();
  //     game.calculateBonuses();
  //     expect(game.bonuses[game.bonuses.length-1]).toEqual([3, 3])
  //   });
  // });
});
