const darkModeButton = document.querySelector('#darkModeButton');
const body = document.querySelector('body');

darkModeButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});

let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
};

let revealableContainers = document.querySelectorAll('.firstpic');

// Define the reveal function
function reveal() {
  // Loop through each revealableContainer
  for (let i = 0; i < revealableContainers.length; i++) {
    let revealableContainer = revealableContainers[i];

    // Save the height of the window
    let windowHeight = window.innerHeight;

    // Find the top of the revealable container
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;

    // Check if the topOfRevealableContainer should be loaded in
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      // Add the "active" class to the revealableContainer's classlist
      revealableContainer.classList.add('secondpic');
    } else {
      // Remove the "active" class from the revealableContainer's classlist
      revealableContainer.classList.remove('secondpic');
    }
  }
}

// Add reveal as an event listener to window for the 'scroll' event
window.addEventListener('scroll', reveal);
