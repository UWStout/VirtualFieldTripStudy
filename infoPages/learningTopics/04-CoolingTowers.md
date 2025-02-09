---
layout: tourPage
title: Cooling Towers
description: Releasing the captured heat in the refrigeration cycle
prevLink: 'infoPages/learningTopics/03-WaterTreatment.html'
upLink: 'infoPages/02-LearningTopics.html'
nextLink: 'infoPages/learningTopics/05-Economizer.html'
image: assets/images/CoolingTower-Exterior
nav-menu: false
show_tile: false
learning:
  - title: 'Explore The Chilled Plant Mezzanine'
    description: >
      Click below to explore the second floor of the chilled plant also
      known as the mezzanine (or mezz) just below the cooling towers.
    buttonText: 'Explore the Mezz'
    hotspots:
      - 'A video through the door in front of you, on your right.'
      - 'A video in the back of the mezz, facing the windows.'

  - title: 'Explore The Cooling Towers on the Roof'
    description: >
      Click below to explore the roof of the plant
    buttonText: 'Explore the Cooling Towers'
    hotspots:
      - 'In front of you when you start'
      - 'Inside cooling tower number 3'

tourPano:
  - enable: true
    startRoom: '2S04_20'
    initialYaw: 90
    urlPrefix: '../'
    enabledRooms:
      - '2S04_20'
      - '2S05_12' # Chilled Plant Mezzanine
      - '2N05_11'
    enabledHotSpots:
      - '2S05_ChemicalTreatmentAndPumps'
      - '2N05_BromineAndCutoffs'

  - enable: true
    startRoom: 'RS03_01b'
    initialYaw: 80
    urlPrefix: '../'
    enabledRooms:
      - 'RS03_01b' # Roof
      - 'RS05_11'
    enabledHotSpots:
      - 'RS03_CoolingTowerExterior'
      - 'RS05_CoolingTowerInterior'
---
After the refrigerant condenses back to liquid in the chiller condenser, it raises the temperature of the cooling water surrounding it. This water needs to release this heat and does so with the help of a cooling tower.

On the second floor of the chilled plant, the cooling water is treated and pumped up to the cooling towers. The pumps and cooling tower fans, as well as the variable drive motors, are controlled and powered from here in the mezzanine or "mezz" of the chilled plant.
