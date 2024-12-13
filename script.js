function OpeningCeremony(callback) {
    console.log("Opening Ceremony starts...");
    let score = { Red: 0, Blue: 0, Green: 0, Yellow: 0 };
    let countdown = 3;
    let interval = setInterval(() => {
        console.log(`Starting in ${countdown}...`);
        countdown--;
        if (countdown < 0) {
            clearInterval(interval);
            callback(score);
        }
    }, 1000);
}

function Race100M(score, callback) {
    console.log("Starting 100m Race...");
    setTimeout(() => {
        let times = {
            Red: Math.random() * 5 + 10,
            Blue: Math.random() * 5 + 10,
            Green: Math.random() * 5 + 10,
            Yellow: Math.random() * 5 + 10,
        };
        let sorted = Object.entries(times).sort((a, b) => a[1] - b[1]);
        score[sorted[0][0]] += 50; // 1st place
        score[sorted[1][0]] += 25; // 2nd place
        score[sorted[2][0]] += 10; // 3rd place
        console.log("Race Results:", times);
        console.log("Updated Scores:", score);
        callback(score);
    }, 3000);
}

function LongJump(score, callback) {
    console.log("Starting Long Jump...");
    setTimeout(() => {
        let participants = Object.keys(score);
        let randomParticipant = participants[Math.floor(Math.random() * participants.length)];
        score[randomParticipant] += 25;
        console.log(`${randomParticipant} wins the Long Jump!`);
        console.log("Updated Scores:", score);
        callback(score);
    }, 2000);
}
function HighJump(score, callback) {
    console.log("Starting High Jump...");
    let winner = prompt("Which color wins the High Jump?");
    if (score[winner] !== undefined) {
        score[winner] += 30;
        console.log(`${winner} wins the High Jump!`);
    } else {
        console.log("No valid input or incorrect participant. No score update.");
    }
    console.log("Updated Scores:", score);
    callback(score);
}
function AwardCeremony(score) {
    console.log("Award Ceremony...");
    let sorted = Object.entries(score).sort((a, b) => b[1] - a[1]);
    console.log("Final Scores:", score);
    console.log(`1st Place: ${sorted[0][0]} with ${sorted[0][1]} points`);
    console.log(`2nd Place: ${sorted[1][0]} with ${sorted[1][1]} points`);
    console.log(`3rd Place: ${sorted[2][0]} with ${sorted[2][1]} points`);
}

// Execute the Sports Day Project
OpeningCeremony((score) => {
    Race100M(score, (updatedScore) => {
        LongJump(updatedScore, (furtherUpdatedScore) => {
            HighJump(furtherUpdatedScore, AwardCeremony);
        });
    });
});