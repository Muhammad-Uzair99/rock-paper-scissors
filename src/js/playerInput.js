export default function GetPlayerInput(...arr) {
    const playerWeapon = prompt("Choose your weapon: rock, paper, scissors", "rock").toLowerCase();
    
    playerInputCheck(playerWeapon, ...arr);

    return playerWeapon;
}

function playerInputCheck(weapon, ...arr) {
    if(!arr.includes(weapon)) {
        alert("You entered wrong weapon");
        GetPlayerInput(...arr);
    }
    return;
}