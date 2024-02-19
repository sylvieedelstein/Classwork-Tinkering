//Space trip info
let shuttleName = "Endeavour";
let shuttleSpeed = 17500;
let distanceMars = 225000000
let distanceMoon = 384400
let mpk = 0.6214;

//Mars calcs
let mars = (distanceMars * mpk);
let hours = (mars/shuttleSpeed);
let daysToMars = (hours/ 24);

//Moon calcs
let moon = (distanceMoon * mpk);
let hoursMoon = (moon/shuttleSpeed);
let daysToMoon = (hours/ 24);

let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = (spaceSuitsOn && shuttleCabinReady);
let computerStatusCode = 200;

//typeof
console.log(typeof shuttleName);
console.log(typeof shuttleSpeed);
console.log(typeof distanceMars);
console.log(typeof distanceMoon);
console.log(typeof mpk);

//print statements
console.log("It will take " + daysToMars + " days to reach Mars.");
console.log("It will take " + daysToMoon + " days to reach Moon.");

let date = "Monday 2019-03-18";
let time = "10:05:34 AM"
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = (astronautCount * averageAstronautMassKg);
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = (crewMassKg + fuelMassKg + shuttleMassKg);
let fuelTempCelsius = -225;
let fuelLevel = 100;
let weatherStatus = ("clear");

//3.2 will print engines are off

console.log("-------------------------------------");
console.log("> LC04 - LAUNCH CHECKLIST");
console.log("-------------------------------------");
console.log(date);
console.log(time);
console.log("-------------------------------------");
console.log("> ASTRONAUT INFO");
console.log("-------------------------------------");
console.log("* count: " + astronautCount);
console.log("* status: " + astronautStatus);
console.log("-------------------------------------");
console.log("> FUEL DATA");
console.log("-------------------------------------");
console.log("* Fuel temp celsius: " + fuelTempCelsius + " C");
console.log("* Fuel level: " + fuelLevel + " %");
console.log("-------------------------------------");
console.log("> MASS DATA");
console.log("-------------------------------------");
console.log("* Crew mass: " + crewMassKg + "kg");
console.log("* Fuel mass: " + fuelMassKg + "kg");
console.log("* Shuttle mass:" + shuttleMassKg + "kg");
console.log("* Total mass: " + totalMassKg + "kg");
console.log("-------------------------------------");
console.log("> FLIGHT PLAN");
console.log("-------------------------------------");
console.log("* weather: " + weatherStatus);
console.log("-------------------------------------");
console.log("> OVERALL STATUS");
console.log("-------------------------------------");
console.log("* Clear for takeoff: YES");

if (crewStatus = true) {
    console.log("Crew Ready");
} else if (crewStatus = false)
    console.log("Crew Not Ready");

if (computerStatusCode = 200) {
    console.log("Please stand by. Computer is rebooting.");
} else if (computerStatusCode = 400) {
    console.log("Success! Computer online.");
} else if (computerStatusCode = 500)
    console.log("ALERT: Computer offline!");

if (shuttleSpeed > 17500) {
    console.log("ALERT: Escape velocity reached!"); 
} else if (shuttleSpeed < 8000) {
    console.log("ALERT: Cannot maintain orbit!");
} else {
    console.log("Stable speed.");
}
// Block 1
if (crewStatus && computerStatusCode === 200 && spaceSuitsOn) {
    console.log("all systems go");
    } else {
    console.log("WARNING. Not ready");
    }
    // Block 2
    if (!crewStatus || computerStatusCode !== 200 || !spaceSuitsOn) {
    console.log("WARNING. Not ready");
    } else {
    console.log("all systems go");
    }

//They both result in an output of "all systems go"

if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight == "red blinking") {
    console.log("ENGINE FAILURE IMMINENT!");
} else if (fuelLevel <= 5000 || engineTemperature > 2500) {
    console.log("Check fuel level. Engines running hot.");
} else if (fuelLevel > 5000 && engineTemperature <= 2500) {
    console.log("Fuel level above 25%. Engines Good");
} else if (fuelLevel > 10000 && engineTemperature <= 2500) {
    console.log("Fuel level above 50%. Engines Good");
} else {
    console.log("Fuel and engine status pending...");
}





