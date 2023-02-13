---
layout: tourPage
title: Water-tube Boilers
description: Learn about the water-tube boilers used in the heating plant
image: assets/images/Boiler1
prevLink: 'infoPages/01-FacilityOverview.html'
nextLink: 'infoPages/03-CentrifugalChillers.html'
nav-menu: true
learning:
  - title: 'Boiler #1 Tour'
    description: >
      Click below to explore the first boiler of the heating plant
      and learn about water-tube boilers in general.
    buttonText: 'Explore Boiler #1'
    hotspots:
      - 'Two on boiler 1 in the very first room'
      - 'One on the back side of boiler 2, right next to boiler 1'
      - 'One on the front of boiler 4 at the other end of the plant from where you start'

  - title: 'Boilers #2 & #3 Tour'
    description: >
      Click below to explore the second and third boilers of the heating plant.
    buttonText: 'Explore Boilers #2 & #3'
    hotspots:
      - 'One on the BACK of boiler 2'
      - 'One on the front of boiler 4 at the other end of the plant from where you start'

  - title: 'Boiler #4 Tour'
    description: >
      Click below to explore the fourth and last boiler of the heating plant.
    buttonText: 'Explore Boiler #4'
    hotspots:
      - 'One on the front of boiler 4 (up the steps)'
      - 'Two on TOP of boiler 4 (up the catwalk on the side)'

tourPano:
  - enabled: true
    startRoom: '1S01_10'
    disablePriority: 'true'
    enabledRooms:
      - '1S01_10' # Boiler 1
      - '1S01_01'
      - '1N01_11'
      - '1N02_12' # Between 1 and 2
      - '1S02_02'
      - '1S02_12'
    enabledHotSpots:
      - '1S01_Boiler'
      - '1S01_Burner'

  - enabled: true
    startRoom: '1S03_12'
    disablePriority: 'true'
    enabledRooms:
      - '1N02_12' # Between 1 and 2
      - '1S02_02'
      - '1S02_12'
      - '1S02_11' # Boiler 2
      - '1N02_11'
      - '1S03_12' # Between 2 and 3
      - '1S03_02'
      - '1N03_12'
      - '1N03_11' # Boiler 3
      - '1N03_10'
      - '1N03_20'
      - '1S03_11'
      - '1S04_12' # Between 3 and 4
    enabledHotSpots:
      - '1N02_Boiler2'

  - enabled: true
    startRoom: '1S04_20'
    disablePriority: 'true'
    initialYaw: -25
    enabledRooms:
      - '1S04_12' # Between 3 and 4
      - '1S04_11' # Boiler 4
      - '1S04_20'
      - '1N04_20'
      - '1N04_00'
      - '1N04_01'
      - '1N04_02'
      - '1N04_22'
      - '1N04_10' # Up to top of boiler 4
      - '2S04_00'
      - '2N04_21'
    enabledHotSpots:
      - '1S04_Boiler4'
      - '2N04_Boiler4_Stop_Valves'
      - '2N04_Boiler4_Safety_Valves'

---
## The Four Boilers
There are four boilers installed in the central heating plant. Three have D-type water
tubes while the fourth uses O-type water tubes. All four boilers work on the same
basic principles:

- Water-tube boilers are designed to circulate hot combustion gases or flue gas around the outside of a large number of water-filled tubes. As the flue gas passes through the tubes, it heats the tubes, which then heat the water to produce steam.
- The tubes extend between an upper header, called a steam drum, and a lower header, called a mud drum or sometimes, a water drum. Tubes are either straight or bent into simple or complex shapes.
- Water-tube boilers are designed to circulate hot combustion gases or flue gas around the outside of a large number of water-filled tubes. As the flue gas passes through the tubes, it heats the tubes, which then heats the water.
- As more heat is transferred, the water temperature keeps rising until it reaches the saturation temperature and water changes phase from liquid to vapor or steam.

## Liquid-vapor saturation curve of water

<span class="image right">
  <img
    src="{% link assets/panoMedia/infoImages/LiquidVaporSaturationCurve-Graph.png %}"
    alt="A graph of the liquid-vapor saturation curve of water. Two points are labeled on the graph: point A is the temperature where water boils at standard atmospheric pressure of 14.7 PSI (which is 212 degrees Fahrenheit) and point B is the boiling temperature at the pressure inside the boilers, 114.7 PSI (which is 338 degrees Fahrenheit)."
  />
</span>
The saturated temperature of steam varies with the boiler pressure at which water is heated. The saturated temperature rises when pressure is increased, and the temperature goes down when pressure is decreased. For example, the saturated temperature of the steam is 212 degrees Fahrenheit at the atmospheric pressure of 14.7 psi. This state of steam is represented by point A on a diagram called the Liquid-vapor saturation curve of water. Inside the boiler, where the pressure is set at 114.7 psi, the temperature of saturated steam increases to 338 degrees Fahrenheit at point B.
<div style="clear: both"></div>
