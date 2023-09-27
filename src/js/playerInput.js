export default function GetPlayerInput(...arr) {
    let playerWeapon = prompt("Choose your weapon: rock, paper, scissors", "rock").toLowerCase();
    
    playerWeapon = playerInputCheck(playerWeapon, ...arr);

    return playerWeapon;
}

function playerInputCheck(weapon, ...arr) {
    if(!arr.includes(weapon)) {
        alert("You entered wrong weapon");
        weapon = GetPlayerInput(...arr);
    }
    return weapon;
}