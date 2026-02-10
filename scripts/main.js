console.log('main.js executing');

function checkForExitPage() {
    // ... some potentially long-running code here ...
    
    // The first element that matches (or null if none do):
    // Checking if there is a back arrow (only on exit pages)
    var shadow = document.getElementById("canvasHolder").shadowRoot;
    if (shadow) {

      // Shadow DOM found, likely an exit page:
      console.log("Canvas holder shadow found:");

      // Start parsing and storing info:
      var content = shadow.firstChild.lastChild.firstChild.firstChild.firstChild.firstChild;

      // Exit Name
      var title = content.firstChild.firstChild.firstChild.childNodes[1].firstChild.textContent;
      console.log("Exit Name: " + title);

      // Area
      var area = content.childNodes[1].childNodes[1].textContent;
      console.log("Area: " + area);

      // LatLong
      var latLong = content.childNodes[1].childNodes[2].textContent;
      console.log("LatLong: " + latLong);

      // Hiking Time
      var hikingTime = content.childNodes[1].childNodes[8].textContent;
      console.log("Hiking Time: " + hikingTime);

      // Height MSL
      var heightMSL = content.childNodes[1].childNodes[10].textContent;
      console.log("Height MSL: " + heightMSL);

      // Flyable Altitude
      var flyableAltitude = content.childNodes[1].childNodes[12].textContent;
      console.log("Flyable Altitude: " + flyableAltitude);

      // Exit Direction
      var exitDirection = content.childNodes[1].childNodes[16].textContent;
      console.log("Exit Direction: " + exitDirection);

      // Verticality
      var verticality = content.childNodes[1].childNodes[18].textContent;
      console.log("Verticality: " + verticality); 

      //Jump Type
      var jumpType = content.childNodes[1].childNodes[20].textContent;
      console.log("Jump Type: " + jumpType);

      // ObjectHistory
      var objectHistory = content.childNodes[1].childNodes[24].childNodes[0].textContent;
      console.log("Object History: " + objectHistory);

      // Access
      var access = content.childNodes[1].childNodes[26].childNodes[0].textContent;
      console.log("Access: " + access);

      // Approach
      var approach = content.childNodes[1].childNodes[28].childNodes[0].textContent;
      console.log("Approach: " + approach);

      // Ledge and Gear Up Area
      var ledgeAndGearUpArea = content.childNodes[1].childNodes[30].childNodes[0].textContent;
      console.log("Ledge and Gear Up Area: " + ledgeAndGearUpArea);

      // Gear
      var gear = content.childNodes[1].childNodes[32].childNodes[0].textContent;
      console.log("Gear: " + gear);

      // Height and Terrain Profile
      var heightAndTerrainProfile = content.childNodes[1].childNodes[34].childNodes[0].innerText.split('\n');
      console.log("Height and Terrain Profile: " + heightAndTerrainProfile);

      // Landing
      var landing = content.childNodes[1].childNodes[36].childNodes[0].textContent;
      console.log("Landing: " + landing);

      // Return
      var returnInfo = content.childNodes[1].childNodes[38].childNodes[0].textContent;
      console.log("Return: " + returnInfo);

      // Observations
      var observations = content.childNodes[1].childNodes[40].childNodes[0].textContent;
      console.log("Observations: " + observations); 

      
      // Store the info in local storage
      var exitInfo = {
        title: title,
        area: area,
        latLong: latLong,
        hikingTime: hikingTime,
        heightMSL: heightMSL,
        flyableAltitude: flyableAltitude,
        exitDirection: exitDirection,
        verticality: verticality,
        jumpType: jumpType,
        objectHistory: objectHistory,
        access: access,
        approach: approach,
        ledgeAndGearUpArea: ledgeAndGearUpArea,
        gear: gear,
        heightAndTerrainProfile: heightAndTerrainProfile,
        landing: landing,
        returnInfo: returnInfo,
        observations: observations
      };
      localStorage.setItem('lastExitInfo', JSON.stringify(exitInfo));

    } else {
        console.log("Shadow DOM not found.");
    }


    console.log("Function executed. Scheduling next run...");

    // Schedule the next execution at the end of the current one
    setTimeout(checkForExitPage, 1000);
}

// Start the initial call
checkForExitPage();

document.addEventListener('DOMContentLoaded', () => {
  console.log('main.js loaded');
});
