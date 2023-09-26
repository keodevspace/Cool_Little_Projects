// Function that takes the number of wins and losses as parameters and calculates the rank level.
function calculateRankLevel(wins, losses) {
    const winLossDifference = wins - losses;
    let level;
  
    if (wins < 10) {
      level = "Iron";
    } else if (wins >= 11 && wins <= 20) {
      level = "Bronze";
    } else if (wins >= 21 && wins <= 50) {
      level = "Silver";
    } else if (wins >= 51 && wins <= 80) {
      level = "Gold";
    } else if (wins >= 81 && wins <= 90) {
      level = "Diamond";
    } else if (wins >= 91 && wins <= 100) {
      level = "Legendary";
    } else {
      level = "Immortal";
    }
  
    return `The Hero has a win-loss difference of ${winLossDifference} and is at the level of ${level}`;
  }
  
  // Example of using the function
  const wins = 75;
  const losses = 20;
  const result = calculateRankLevel(wins, losses);
  console.log(result);
  