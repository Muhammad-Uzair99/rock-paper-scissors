export default function playRound(player, comp) {
    if(player == comp) {
        return `Draw! ${player} and ${comp} are equal`;
    } else if(player=="rock" && comp=="scissors") {
        return `You Win! ${player} beats ${comp}`;
    } else if(player=="paper" && comp=="rock") {
        return `You Win! ${player} beats ${comp}`;
    } else if(player=="scissors" && comp=="paper") {
        return `You Win! ${player} beats ${comp}`;
    } else {
        return `You Loose! ${comp} beats ${player}`;
    }
}