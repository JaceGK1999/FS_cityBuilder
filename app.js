

const climateSelect = document.getElementById('climate-select');
const climateImage = document.getElementById('climate-img');








climateSelect.addEventListener('change', (e) => {
    const value = e.target.value;
    const image = `./assets/climate-${value}.jpg`;
    climateImage.src = image;
    //climateCounter++;
});
  




// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state






//reset button stuff
//   const reset = document.getElementById(reset)

// reset.addEventListener('click'), ( => {
//   slogans = []
//   sloganList.textContent = '';
// })

// //test stuff
// export function createCountString(climate, architecture, area) {
//}