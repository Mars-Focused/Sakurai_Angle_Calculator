//Make a function called saCalc that takes in knockback and exports sAngle
//Make a function called mainLine within saCalc that takes in knockback and exports a value called sAngle

//60 knockback should output sAngle = 0, 88 knockback should output sAngle = 38 (these numbers are based on super smash brothers Ultimate)

//In other words... find the SLOPE that goes through the ordered pairs(0,60) and (38,88)
//Use (y2-y1)/(x2-x1) or (38-0)/(60-88) or (38)/(28) or 19/14
//Then offset that slope
//We could potentially use jest to test this
//Create an if statement to check if sAngle is less than 0, and change it to 0.
//Create an if statement to check if sAngle is greater than 38 and change it to 38
//Perhaps we could set these variables to be edited later to become compatible with other smash games in the future.

//Rather than hard Coding these values for SSBU I decided to attach them to variables so they can be changed in the future
//This will keep Sakurai Angle Calculator relevant even when the angle changes, or new platform fighters come out.

knockback = 0;
//lowerLimit and upperLimit should be changed to growthPoint and ShelfPoint
lowerLimit = 60;
minAngle = 0;

upperLimit = 88;
maxAngle = 38;

MLS = (lowerLimit - upperLimit) / (minAngle - maxAngle);
offset = lowerLimit;
//x=y(19/14)+60 or knockback * (19/14)+60 = mainLine
//MLS means main line slope, and it's the Slope at which our angle increases starting at 60 (See Sakurai Angle Charts online for details)

function saCalc(knockback) {
  function mainLineFinder(knockback) {
    return (sRay = (knockback - offset) / MLS);
  }

  mainLineFinder(knockback);
  console.log(`sRay: ${sRay}`);

  if (sRay < minAngle) {
    return (sAngle = minAngle);
  } else if (sRay > maxAngle) {
    return (sAngle = maxAngle);
  } else {
    return (sAngle = sRay);
  }
}

console.log(`Knockback: ${knockback}`);
saCalc(knockback);
console.log(`sAngle: ${sAngle}`);
