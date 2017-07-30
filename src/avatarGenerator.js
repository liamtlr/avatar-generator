function AvatarGenerator(xValue, yValue, avatarWidth, avatarHeight, reference){
  this.xValue = xValue;
  this.yValue = yValue;
  this.avatarWidth = avatarWidth;
  this.avatarHeight = avatarHeight;
  this.spritesheet = reference;
  this.randomContant = 19;
};

AvatarGenerator.prototype.hashCoordinate = function(visitorId, modulus){
  var arr = visitorId.toString().split('')
  var returnVal = 0;
  for(var i=0;i<arr.length;i++){
    returnVal = returnVal + (arr[i] ^ (this.randomContant + i));
  };
  return returnVal % modulus;
  // return visitorId % this.xValue;
  // return Math.floor(Math.random() * (this.xValue - 0 + 1)) + 0;
};

AvatarGenerator.prototype.getCoordinates = function(visitorId){
  var hashedX = this.hashCoordinate(visitorId, this.xValue)
  var reversedVisitorIdString = visitorId.toString().split('').reverse().join('');
  var reversedVisitorId = parseInt(reversedVisitorIdString);
  var hashedY = this.hashCoordinate(reversedVisitorId, this.yValue);
  var xCoord = this.returnCoordinate(hashedX, this.avatarWidth);
  var yCoord = this.returnCoordinate(hashedY, this.avatarHeight);
  return [xCoord, yCoord];
};

AvatarGenerator.prototype.returnCoordinate = function(hashedvisitorId, dimension){
  return hashedvisitorId * dimension;
};

AvatarGenerator.prototype.setAvatar = function(visitorId, htmlIdentifier){
  var coOrds = this.getCoordinates(visitorId);
  var ref =  "url('" + this.spritesheet + "')";
  var objPos = coOrds[0] + "px " + coOrds[1] + "px";
  $(document).ready(function(){
      $(htmlIdentifier).css({
          "height": this.avatarHeight,
          "width": this.avatarWidth,
          "background-image": ref,
          "background-position": objPos
      });
  });
};
