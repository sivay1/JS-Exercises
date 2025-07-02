function game(){
    let score = 0;// Private variable to hold the score
    // Functions to manipulate the score
    function increaseScore(points){
        score += points;
        console.log("Score: +", points);
    }
    function decreaseScore(points){
        score -= points;
        console.log("Score: -", points);
    }
    function getScore(){
        return score;
    }
    return {increaseScore, decreaseScore, getScore};
}

const player = game();
player.increaseScore(10);//
player.decreaseScore(5);//
player.increaseScore(1);
player.decreaseScore(2);
console.log("Current score:", player.getScore());