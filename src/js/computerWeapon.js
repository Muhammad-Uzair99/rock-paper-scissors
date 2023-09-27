import RandomNumber from "./randomNumberGenerator.js"

export default function RandomWeaponPicker(...arr) {
    const randomNum = RandomNumber(arr.length);
    return (arr[randomNum]);
}