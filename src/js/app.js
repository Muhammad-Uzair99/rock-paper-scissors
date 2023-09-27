import GetPlayerInput from "./playerInput.js";
import RandomWeaponPicker from "./computerWeapon.js";
import playRound from "./playRound.js"

export default function App() {
    "use strict";

    const weapons = ["rock", "paper", "scissors"];
    const playerWeapon = GetPlayerInput(...weapons);
    const compWeapon = RandomWeaponPicker(...weapons);
    const roundResult = playRound(playerWeapon, compWeapon);
    
    return(roundResult);
}