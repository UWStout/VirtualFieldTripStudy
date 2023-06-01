/* eslint-disable no-unused-vars */
// Initialize basil library for local storage
const basil = new window.Basil({ namespace: 'VHPFieldTrip' })

function isTourComplete (index) {
  // Get the tour progress from local storage
  const tourProgress = basil.get('tourProgress') || []

  // Check if the tour index is in the tour progress array
  return tourProgress.includes(index)
}

function addTourCompleted (index) {
  // Get the tour progress from local storage
  const tourProgress = basil.get('tourProgress') || []

  // Add the tour index to the tour progress array
  tourProgress.push(index)

  // Save the tour progress to local storage
  basil.set('tourProgress', tourProgress)
}

function firstAvailableTour (tours) {
  // Get the tour progress from local storage
  const tourProgress = basil.get('tourProgress') || []

  // Loop through the tours
  for (let i = 0; i < tours.length; i++) {
    // Check if the tour is in the tour progress array
    if (!tourProgress.includes(i)) {
      // Return the first tour that is not in the tour progress array
      return tours[i]
    }
  }

  // Return -1 if all the tours are in the tour progress array
  return -1
}

function isQuizComplete (index) {
  // Get the quiz progress from local storage
  const quizProgress = basil.get('quizProgress') || []

  // Check if the quiz index is in the quiz progress array
  return quizProgress.includes(index)
}

function addQuizCompleted (index) {
  // Get the quiz progress from local storage
  const quizProgress = basil.get('quizProgress') || []

  // Add the quiz index to the quiz progress array
  quizProgress.push(index)

  // Save the quiz progress to local storage
  basil.set('quizProgress', quizProgress)
}

function firstAvailableQuiz (quizzes) {
  // Get the quiz progress from local storage
  const quizProgress = basil.get('quizProgress') || []

  // Loop through the quizzes
  for (let i = 0; i < quizzes.length; i++) {
    // Check if the quiz is in the quiz progress array
    if (!quizProgress.includes(i)) {
      // Return the first quiz that is not in the quiz progress array
      return quizzes[i]
    }
  }

  // Return -1 if all the quizzes are in the quiz progress array
  return -1
}

function clearProgress () {
  // Clear the tour progress from local storage
  basil.remove('tourProgress')

  // Clear the quiz progress from local storage
  basil.remove('quizProgress')
}
