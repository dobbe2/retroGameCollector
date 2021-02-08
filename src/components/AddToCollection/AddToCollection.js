import react from 'react';
import './styles.css'

// // Get the searched game input
// var homeInput = document.getElementById("game-search");

// // Execute a function when the user releases a key on the keyboard
// homeInput.addEventListener("keyup", function(event) {
//   // Number 13 is the "Enter" key on the keyboard
//   if (event.keyCode === 13) {
//     // Cancel the default action, if needed
//     event.preventDefault();
//     // Trigger the button element with a click
//     document.getElementById("game-search-button").click();
//   }
// });

// document.getElementById("game-search-button").addEventListener("click", function(event){
//     event.preventDefault();
//     // let searchedHomeTeam = ("#searched-game").val().trim();
//     // setHomeTeam(searchedHomeTeam);
// })


const AddToCollection = () => {
    return(
        <div>
        <h1>Add To Collection here</h1>
        <input type="text" id="game-search" placeholder="Search For Games" />
        <button type="submit" id="game-search-button">Search</button>
        </div>
    )
}

export default AddToCollection;