// Code for level handler buttons
const levelUp = document.querySelector('#levelup');
const levelDown = document.querySelector('#leveldown');
const reset = document.querySelector('#levelreset');
const visualLevel = document.querySelector('#level');

let level = 1;

levelUp.addEventListener('click', () => {
    level++; 
    visualLevel.innerText = level;
    updateStats(level);
});
levelDown.addEventListener('click', () => {level--; visualLevel.innerText = level});
reset.addEventListener('click', () => {level = 1; visualLevel.innerText = level});

// Code for stat tracking w/ level

// Go through every mainStat and modify them based on their level and respective modStat
const updateStats = async (level) => {
    const champName = document.querySelector(".name");
    const cMainStats = await axios.get(`/champions/:${champName.innerText}`, { reqsrc: "client" })
    console.log(cMainStats);
    for (stat in cMainStats) {
        stat[0] += stat[1] * level;
        // document.querySelector(`#${stat}`).innerText = stat[0];
        console.log(cMainStats);
    }
}