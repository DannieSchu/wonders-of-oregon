const trailOfTenFalls = {
    id: 'ten-falls',
    name: 'Trail of Ten Falls',
    // location: 'Silver Falls State Park', 
    map: {
        top: '40%',
        left: '40%',
    },
    image: 'trail-of-ten-falls.jpg',
    description: 'An amazing visual and auditory experience replete with ten gorgeous waterfalls that are particularly stunning in spring. This long but mostly flat hike is popular yearround. What time do you arrive?',
    choices: [{
        id: 'early',
        result: '6 a.m.',
        description: `You wake up excrusciatingly early to reach the park before the crowds descend. Your sleepiness subsides when you see the sunrise at your first waterfall. Treat yourself to lunch in Silverton. You get get 20 strength and 20 endurance points. You lose 10 energy points.`,
        strength: 20,
        // endurance: 20,
        energy: -10, 
    }, {
        id: 'timely',
        result: '10 a.m.',
        description: `You and the rest of the metro area arrive in late morning. You inadvertently photobomb three family photo shoots and experience the falls to the tunes of a college student's portable boombox. You find a shortcut out of the park after an irritating 2 miles. You take major hits to energy and endurance.`,
        strength: 5,
        // endurance: -20,
        energy: -30,
    }, {
        id: 'late',
        result: '5 p.m.',
        description: `The park is clearing out when you pull in so you have no trouble nabbing a parking spot. Unfortunately, you are not the only latecommer, and you find yourself stuck with a squabbling group of backpackers taking a break from the PCT. You gain 20 strength points, but your energy reserves take a hit.`,
        strength: 20,
        // endurance: 0,
        energy: -20,
    }
    ]
};

const elkToKingsMountain = {
    id: 'elk-to-kings-mountain',
    name: 'Elk Mountain To King\'s Mountain',
    // region: 'Silver Falls State Park', 
    map: {
        top: '30%',
        left: '20%',
    },
    image: 'elk-to-kings-mountain.jpg',
    description: 'This demanding loop will take you to the summit of Elk and King\'s Mountains through the lush and slippery Tillamook forest. You\'ll gain nearly 4000 feet in the first two miles. How do you prepare?',
    choices: [{
        id: 'extra-preparation',
        description: 'Practice hikes',
        result: 'Because you built up your strength and endurance in advance, you are able to take this challening hike in stride. The pain is still very real, but you are able to enjoy the beautiful views. You get 50 strength points and lose only 20 energy.',
        strength: 50,
        energy: -20, 
    }, {
        id: 'light-preparation',
        description: 'A few light walks',
        result: `You feel the burn quickly. The 11 miles take you six hours to complete due to your repeated stops. Nevertheless, you persevere (and swear to never return). Congratulations on your success. You get 50 strenth points, but you will be laid up for the next week due to your sore legs.`,
        strength: 50,
        // endurance: -20,
        energy: -60,
    }, {
        id: 'none',
        description: 'Who needs to prepare? I\'ve got this.',
        result: `You see the first incline (essentially a wall) and walk away. You lose 40 energy points for the inconvenience and gain no strength.`,
        strength: 0,
        // endurance: 0,
        energy: -40,
    }
    ]
};

const hikes = [
    trailOfTenFalls,
    elkToKingsMountain,
];

export default hikes;