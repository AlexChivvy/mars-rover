//Add log 

const rover = { 
  x:0, 
  y:0
};

let compassArray = ["N","E","S","W"];
let compassPointNumeric = 0;
let direction = compassArray[compassPointNumeric];
let logUniqueLocationHistory = [[0,0]];
let logCompleteLocationHistory = [[0,0]];

// ======================

function turnLeft(rover){
  if (compassPointNumeric === 0){
    compassPointNumeric = 3;
  } else {
    compassPointNumeric -= 1;
  } 
  direction = compassArray[compassPointNumeric];
  console.log("turnLeft was called!");
}

function turnRight(rover){
  if (compassPointNumeric === 3){
    compassPointNumeric = 0;
  } else {
    compassPointNumeric += 1;
  } 
  direction = compassArray[compassPointNumeric];
  console.log("turnRight was called!");
}

// ======================

function moveForward(rover){
  switch (direction){
    case "N": 
      if (rover.y === 0 ){
        console.log("You can't move further North on the grid.")
      } else {
        rover.y -= 1;
        addToUniqueTravelLog(rover);
        addToCompleteTravelLog(rover);
        console.log("moveForward was called and the robot moved!")
      }
      break;
    case "E":
      if (rover.x === 9 ){
        console.log("You can't move further East on the grid.")
      } else {
        rover.x += 1;
        addToUniqueTravelLog(rover);
        addToCompleteTravelLog(rover);
        console.log("moveForward was called and the robot moved!")
      }
      break;
    case "S":
      if (rover.y === 9 ){
        console.log("You can't move further South on the grid.")
      } else {
        rover.y += 1;
        addToUniqueTravelLog(rover);
        addToCompleteTravelLog(rover);
        console.log("moveForward was called and the robot moved!")
      }
      break;
    case "W":
      if (rover.x === 0 ){
        console.log("You can't move further West on the grid.")
      } else {
        rover.x -= 1;
        addToUniqueTravelLog(rover);
        addToCompleteTravelLog(rover);
        console.log("moveForward was called and the robot moved!")
      }
      break;    
  }
}

function moveBackward(rover) {
  switch (direction) {
    case "S":
      if (rover.y === 0) {
        console.log("You can't move further North on the grid.");
      } else {
        rover.y -= 1;
        addToUniqueTravelLog(rover);
        addToCompleteTravelLog(rover);
        console.log("moveBackward was called and the robot moved!");
      }
      break;
    case "W":
      if (rover.x === 9) {
        console.log("You can't move further East on the grid.");
      } else {
        rover.x += 1;
        addToUniqueTravelLog(rover);
        addToCompleteTravelLog(rover);
        console.log("moveBackward was called and the robot moved!");
      }
      break;
    case "N":
      if (rover.y === 9) {
        console.log("You can't move further South on the grid.");
      } else {
        rover.y += 1;
        addToUniqueTravelLog(rover);
        addToCompleteTravelLog(rover);
        console.log("moveBackward was called and the robot moved!");
      }
      break;
    case "E":
      if (rover.x === 0) {
        console.log("You can't move further West on the grid.");
      } else {
        rover.x -= 1;
        addToUniqueTravelLog(rover);
        addToCompleteTravelLog(rover);
        console.log("moveBackward was called and the robot moved!");
      }
      break;
  }
}

// ======================

function giveCommand (commandString){
  let giveCommandSwitch;
  for (var i = 0; i < commandString.length; i++){
    giveCommandSwitch = commandString[i]
    switch (giveCommandSwitch){
      case "l":
        turnLeft(rover);
        break;
      case "r":
        turnRight(rover);
        break;
      case "f":
        moveForward(rover);
        break;
      case "b":
        moveBackward(rover);
        break; 
      default: 
        console.log(`An erroneous command was given and ignored. Please check the character in position ${i} of the giveCommand function, which is ${commandString[i]} instead of recognized commands l, r, f or b.`);
    }
  }
  }  

// ======================

function addToUniqueTravelLog(rover){
    //Base case assumes not included in log, will test to see if already included
    let toggleUniqueLocationLogAdd = true
    for (i = 0; i < logUniqueLocationHistory.length; i++){
        if (logUniqueLocationHistory[i][0] === rover.x && logUniqueLocationHistory[i][1] === rover.y){ 
        //Already included in the log, will not duplicate entries
        toggleUniqueLocationLogAdd = false
        }
    }
    //If not already included in log, will include
    if (toggleUniqueLocationLogAdd){
        logUniqueLocationHistory.push([rover.x,rover.y])
    }
    }


function addToCompleteTravelLog(rover){
       logCompleteLocationHistory.push([rover.x,rover.y]);
    }

// ======================

// Insert the functions turnLeft, turnRight, and moveForward as you like!
giveCommand('lfrrfrfbz');

//

direction = compassArray[compassPointNumeric];
console.log(direction);
console.log(logUniqueLocationHistory);
console.log(logCompleteLocationHistory);
console.log(rover);