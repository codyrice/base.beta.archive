console.log('main.js executing');

function checkForExitPage() {
    // ... some potentially long-running code here ...

    var areaChildNode = 1;
    var latLongChildNode = 2;

    // We will store the child node indices for the following info, since they can be in different positions on different exit pages:
    var hikingTimeChildNode = 0;
    var heightMSLChildNode = 0;
    var flyableAltitudeChildNode = 0;
    var exitDirectionChildNode = 0;
    var verticalityChildNode = 0;
    var jumpTypeChildNode = 0;
    var objectHistoryChildNode = 0;
    var accessChildNode = 0;
    var approachChildNode = 0;
    var ledgeAndGearUpAreaChildNode = 0;
    var gearChildNode = 0;
    var heightAndTerrainProfileChildNode = 0;
    var landingChildNode = 0;
    var returnChildNode = 0;
    var observationsChildNode = 0;
    
    try {

      // The first element that matches (or null if none do):
      var shadow = document.getElementById("canvasHolder").shadowRoot;
      if (shadow) {

        // Shadow DOM found, likely an exit page:
        console.log("Canvas holder shadow found:");

        // Start parsing and storing info:
        var content = shadow.firstChild.lastChild.firstChild.firstChild.firstChild.firstChild;

        // Exit Name
        var title = content.childNodes[0].firstChild.firstChild.childNodes[1].firstChild.textContent;
        console.log("Exit Name: " + title);

        // We will iterate through the info section and grab all the relevant info
        var infoSection = content.childNodes[1];

        // Area
        var area = infoSection.childNodes[areaChildNode].textContent;
        console.log("Area: " + area);

        // LatLong
        var latLong = content.childNodes[1].childNodes[latLongChildNode].textContent;
        console.log("LatLong: " + latLong);

        // We will iterate through the info section and find the child nodes for the following info, since they can be in different positions on different exit pages:
        for (var i = 3; i < infoSection.childNodes.length; i++) {
          var child = infoSection.childNodes[i];
          if (child && child.textContent && child.textContent.trim() !== "") {
            var childText = child.textContent.toLowerCase().trim();
            switch (childText) {
              
              // Hiking Time
              case "hiking time":
                hikingTimeChildNode = i + 1;
              case "height msl":
                heightMSLChildNode = i + 1;
              case "flyable altitude":
                flyableAltitudeChildNode = i + 1;
              case "exit direction":
                exitDirectionChildNode = i + 1;
              case "verticality":
                verticalityChildNode = i + 1;
              case "jump type":
                jumpTypeChildNode = i + 1;
              case "1. history":
                objectHistoryChildNode = i + 1;
              case "2. access":
                accessChildNode = i + 1;
              case "3. approach":
                approachChildNode = i + 1;
              case "4. ledge and gear up area":
                ledgeAndGearUpAreaChildNode = i + 1;
              case "5. gear":
                gearChildNode = i + 1;
              case "6. height and terrain profile":
                heightAndTerrainProfileChildNode = i + 1;
              case "7. landing":
                landingChildNode = i + 1;
              case "8. return":
                returnChildNode = i + 1;
              case "9. observations":
                observationsChildNode = i + 1;
          }
        }
      }

        // Hiking Time
        var hikingTime = content.childNodes[1].childNodes[hikingTimeChildNode].textContent;
        console.log("Hiking Time: " + hikingTime);

        // Height MSL
        var heightMSL = content.childNodes[1].childNodes[heightMSLChildNode].textContent;
        console.log("Height MSL: " + heightMSL);

        // Flyable Altitude
        var flyableAltitude = content.childNodes[1].childNodes[flyableAltitudeChildNode].textContent;
        console.log("Flyable Altitude: " + flyableAltitude);

        // Exit Direction
        var exitDirection = content.childNodes[1].childNodes[exitDirectionChildNode].textContent;
        console.log("Exit Direction: " + exitDirection);

        // Verticality
        var verticality = content.childNodes[1].childNodes[verticalityChildNode].textContent;
        console.log("Verticality: " + verticality); 

        //Jump Type
        var jumpType = content.childNodes[1].childNodes[jumpTypeChildNode].textContent;
        console.log("Jump Type: " + jumpType);
  
        // ObjectHistory
        var objectHistory = content.childNodes[1].childNodes[objectHistoryChildNode].childNodes[0].textContent;
        console.log("Object History: " + objectHistory);

        // Access
        var access = content.childNodes[1].childNodes[accessChildNode].childNodes[0].textContent;
        console.log("Access: " + access);

        // Approach
        var approach = content.childNodes[1].childNodes[approachChildNode].childNodes[0].textContent;
        console.log("Approach: " + approach);

        // Ledge and Gear Up Area
        var ledgeAndGearUpArea = content.childNodes[1].childNodes[ledgeAndGearUpAreaChildNode].childNodes[0].textContent;
        console.log("Ledge and Gear Up Area: " + ledgeAndGearUpArea);

        // Gear
        var gear = content.childNodes[1].childNodes[gearChildNode].childNodes[0].textContent;
        console.log("Gear: " + gear);

        // Height and Terrain Profile
        var heightAndTerrainProfile = content.childNodes[1].childNodes[heightAndTerrainProfileChildNode].childNodes[0].innerText;
        if (heightAndTerrainProfile.includes("\n")) {
          heightAndTerrainProfile = heightAndTerrainProfile.split("\n");
        }
        console.log("Height and Terrain Profile: " + heightAndTerrainProfile);

        // Landing
        var landing = content.childNodes[1].childNodes[landingChildNode].childNodes[0].textContent;
        console.log("Landing: " + landing);

        // Return
        var returnInfo = content.childNodes[1].childNodes[returnChildNode].childNodes[0].textContent;
        console.log("Return: " + returnInfo);

        // Observations
        var observations = content.childNodes[1].childNodes[observationsChildNode].childNodes[0].textContent;
        console.log("Observations: " + observations); 

        /*
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

  */

      } else {
          console.log("Shadow DOM not found.");
      }

    } catch (error) {
      console.error("Error while checking for exit page: ", error);
    } finally {
      console.log("Finished checking for exit page.");
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
