---
layout: tourPage
title: Learning Topics
description: See all the different learning topics available in the plant.
image: assets/images/Boiler1
prevLink: 'infoPages/01-FacilityOverview.html'
nextLink: 'infoPages/03-Assessments.html'
hideImage: true
nav-menu: true
infoLinks:
  - name: 'Water Tube Boilers'
    file: '01-WaterTubeBoilers.html'
    description: Learn about the boilers used in the heating plant
  - name: 'Centrifugal Chillers'
    file: '02-CentrifugalChillers.html'
    description: The essential equipment of the chilling plant
  - name: 'Water Treatment'
    file: '03-WaterTreatment.html'
    description: Preparation of the water used throughout the plant
  - name: 'Cooling Towers'
    file: '04-CoolingTowers.html'
    description: Releasing heat from the refrigeration cycle
  - name: 'Economizer'
    file: '05-Economizer.html'
    description: Recapturing some energy before it leaves the plant
  - name: 'Library Air Handler'
    file: '06-LibraryAirHandler.html'
    description: Where the heated or chilled water gets used
  - name: 'Piping System'
    file: '07-PipingSystem.html'
    description: The piping system distributes the heating/chilling medium
  - name: 'Steam Turbine'
    file: '08-SteamTurbine.html'
    description: Using thermal energy to create mechanical work
    disabled: true
  - name: 'Compressor'
    file: '09-Compressor.html'
    description: An essential component of the centrifugal chiller
    disabled: true
  - name: 'Pumps'
    file: '10-Pumps.html'
    description: Creating pressure to distribute the heating/cooling medium
    disabled: true
  - name: 'Combustion Fuel'
    file: '11-CombustionFuel.html'
    description: An essential ingredient to create thermal energy
    disabled: true
  - name: 'Combustion Air Fan'
    file: '12-CombustionAirFan.html'
    description: Good air flow is necessary to maintain combustion
    disabled: true
---
Each link below will take you to an area in the central heating and chilling plant with learning topics
available for you to engage!  You can visit them in any order.

<div class="row">
  {% for link in page.infoLinks %}
    {% if link.disabled %}
      <div class="4u 12u$(medium)">
        <div class="box">
          <header class="major">
            <h3>{{ link.name }}<br/>(coming soon)</h3>
            <p>{{ link.description }}</p>
          </header>
        </div>
      </div>
    {% else %}
      <div class="4u 12u$(medium)">
        <div class="box">
          <a href="{{ 'infoPages/learningTopics/' | append: link.file | relative_url }}" class="link">
            <header class="major">
              <h3>{{ link.name }}</h3>
              <p>{{ link.description }}</p>
            </header>
          </a>
        </div>
      </div>
    {% endif %}
  {% endfor %}
</div>
