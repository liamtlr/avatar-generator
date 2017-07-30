"use strict";

describe("AvatarGenerator", function() {
  var avGen
  var frame;

  beforeEach(function() {
    avGen = new AvatarGenerator(100, 50, 15, 10);
  });

  describe("Instantiation", function(){
    it("receives an X value", function(){
      expect(avGen.xValue).toEqual(100)
    });
    it("receives a Y value", function(){
      expect(avGen.yValue).toEqual(50)
    });
    it("receives a width value", function(){
      expect(avGen.avatarWidth).toEqual(15)
    });
    it("receives a height value", function(){
      expect(avGen.avatarHeight).toEqual(10)
    });
  });

  describe("get co ordinates", function(){
    it("returns an array of coordinates used to produce the avatar based on a visitor ID", function(){
      expect(avGen.getCoordinates(5780)).toEqual([1380, 620]);
    })
  })

  describe("hashing a visitorID", function(){
    it("hashes the visitor ID for the x axis", function(){
      expect(avGen.hashXCoordinate(450)).toEqual(61);
    })
    it("returns a value between one and the xValue", function(){
      expect(avGen.hashXCoordinate(15677424)).not.toBeGreaterThan(avGen.xValue);
    })
    it("hashes the visitor ID for the y axis", function(){
      expect(avGen.hashYCoordinate(260)).toEqual(56);
    })
    it("returns a value between one and the xValue", function(){
      expect(avGen.hashYCoordinate(3645634532)).not.toBeGreaterThan(avGen.yValue);
    })
  });

  describe("returning x coordinate", function(){
    it("return the x co ordinate based on the avatar height and hashed value", function(){
      expect(avGen.returnXCoordinate(50)).toEqual(750);
    });
  });

  describe("returning the y co ordinate", function(){
    it("returns the y co ordinate based on the hashed visitor ID", function(){
      expect(avGen.returnYCoordinate(10)).toEqual(100);
    })
  })
});
