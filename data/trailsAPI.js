const trailOfTenFalls = {
    id: 'silver-falls',
    name: 'Trail of Ten Falls',
    map: {
        top: '40%',
        left: '40%',
    },
    image: 'silver-falls.jpeg',
    description: 'An amazing visual and auditory experience replete with ten gorgeous waterfalls that are particularly stunning in spring. This long but mostly flat hike is popular yearround.',
    question: 'What time do you arrive?',
    options: [{
        id: 'early',
        option: '6 a.m.',
        outcome: `You wake up excrusciatingly early to reach the park before the crowds descend. Your sleepiness subsides when you see the sunrise at your first waterfall. Treat yourself to lunch in Silverton. You get get 20 strength and 20 endurance points. You lose 10 energy points.`,
        strength: 20,
        energy: -10, 
    }, {
        id: 'timely',
        option: '10 a.m.',
        outcome: `You and the rest of the metro area arrive in late morning. You inadvertently photobomb three family photo shoots and experience the falls to the tunes of a college student's portable boombox. You find a shortcut out of the park after an irritating 2 miles. You take major hits to energy and endurance.`,
        strength: 5,
        energy: -30,
    }, {
        id: 'late',
        option: '5 p.m.',
        outcome: `The park is clearing out when you pull in so you have no trouble nabbing a parking spot. Unfortunately, you are not the only latecommer, and you find yourself stuck with a squabbling group of backpackers taking a break from the PCT. You gain 20 strength points, but your energy reserves take a hit.`,
        strength: 20,
        energy: -20,
    }
    ]
};

const elkToKingsMountain = {
    id: 'elk-to-kings-mountain',
    name: 'Elk Mountain To King\'s Mountain',
    map: {
        top: '30%',
        left: '20%',
    },
    image: 'elk-to-kings-mountain.jpeg',
    description: 'This demanding loop will take you to the summit of Elk and King\'s Mountains through the lush and slippery Tillamook forest. You\'ll gain nearly 4000 feet in the first two miles.',
    question: 'How do you prepare?',
    options: [{
        id: 'extra-preparation',
        option: 'Practice hikes',
        outcome: 'Because you built up your strength and endurance in advance, you are able to take this challening hike in stride. The pain is still very real, but you are able to enjoy the beautiful views. You get 50 strength points and lose only 20 energy.',
        strength: 50,
        energy: -20, 
    }, {
        id: 'light-preparation',
        option: 'A few light walks',
        outcome: `You feel the burn quickly. Eleven miles take you six hours to complete due to your repeated stops. Nevertheless, you persevere (and swear to never return). Congratulations on your success. You get 50 strength points, but you will be laid up for the next week due to your sore legs.`,
        strength: 50,
        // endurance: -20,
        energy: -60,
    }, {
        id: 'none',
        option: 'Who needs to prepare? I\'ve got this.',
        outcome: `You see the first incline (essentially a wall) and walk away. You lose 40 energy points for the inconvenience and gain no strength.`,
        strength: 0,
        // endurance: 0,
        energy: -40,
    }
    ]
};

const oaksBottom = {
    id: 'oaks-bottom',
    name: 'Oaks Bottom',
    map: {
        top: '10%',
        left: '20%',
    },
    image: 'oaks-bottom.jpeg',
    description: 'The Oaks Bottom wetland, mainly fed by springs at the base of a Willamette River bluff, was rescued from its ignominious status as a landfill and soon-to-be industrial development in 1969 and has become one of Portland\'s most beloved wildlife parks.',
    question: 'During which month do you visit?',
    options: [{
        id: 'april',
        option: 'April',
        outcome: 'Most Portland-area trails are muddy in Spring, and this is no exception. Fortunately, much of your journey at Oaks Bottom will be paved. Enjoy your (relatively) dry feet!',
        strength: 10,
        energy: -10, 
    }, {
        id: 'june',
        option: 'June',
        outcome: 'You\'ve chosen well! This path is perfect in early Summer, when the water level is still high and there is an abundance of wildlife.',
        strength: 10,
        energy: 0,
    }, {
        id: 'august',
        option: 'August',
        outcome: 'The pond has dried up and is emitting an unpleasant sewage smell. Instead of enjoying the wildlife, you itch for an escape route. The only saving grace is the sea of invasive purple loosestrife. You lose 20 energy points.',
        strength: 10,
        energy: -20,
    }
    ]
};

const tamanawasFalls = {
    id: 'tamanawas-falls',
    name: 'Tamanawas Falls',
    map: {
        top: '30%',
        left: '50%',
    },
    image: 'tamanawas-falls.jpeg',
    description: 'The falls forms a broad curtain where Cold Spring Creek thunders over a 110-foot lava cliff near the eastern base of Mt. Hood. It is known to be particularly beautiful in winter when spray freezes over and forms a massive ice grotto in the amphitheater.',
    question: 'What do you bring for your January trek?',
    options: [{
        id: 'nothing',
        option: 'Just Myself!',
        outcome: 'Your vehicle manages to navigate the mostly plowed road to the trailhead, but you quickly discover the challenges you\'d face by pressing on. Rather than incur serious injury, you wisely return to the trailhead.',
        strength: 10,
        energy: -10, 
    }, {
        id: 'snowshoes',
        option: 'Snowshoes',
        outcome: 'You arrive equipped with the most essential equipment. You are able to complete the hike, but you leave both cold and sunburned. You lost 15 energy points but gain 20 in strength.',
        strength: 20,
        energy: -15,
    }, {
        id: 'everything',
        option: 'Snowshoes, warm clothes and sunblock',
        outcome: 'Thanks to your extensive research about the trek ahead, you are able to enjoy the splendor of this unique setting in all its glory. The effort costs you 15 energy points, but you gain 30 in strength.',
        strength: 30,
        energy: -15,
    }
    ]
};
const wildhorseLake = {
    id: 'wildhorse-lake',
    name: 'Wildhorse Lake',
    map: {
        top: '70%',
        left: '70%',
    },
    image: 'wildhorse-lake.jpeg',
    description: 'Spectacular hike below the summit of Steens Mountain. In an arid landscape, Wildhorse Lake shimmers high in a glacial cirque, nestled among views you can\'t get enough of. The dramatic landscape is the work of uplifted lava flows, sculpted by ice and time here in the southeast corner of Oregon.',
    question: 'What do you bring for your January trek?',
    options: [{
        id: 'nothing',
        option: 'Just Myself!',
        outcome: 'Your vehicle manages to navigate the mostly plowed road to the trailhead, but you quickly discover the challenges you\'d face by pressing on. Rather than incur serious injury, you wisely return to the trailhead.',
        strength: 10,
        energy: -10, 
    }, {
        id: 'snowshoes',
        option: 'Snowshoes',
        outcome: 'You arrive equipped with the most essential equipment. You are able to complete the hike, but you leave both cold and sunburned. You lost 15 energy points but gain 20 in strength.',
        strength: 20,
        energy: -15,
    }, {
        id: 'everything',
        option: 'Snowshoes, warm clothes and sunblock',
        outcome: 'Thanks to your extensive research about the trek ahead, you are able to enjoy the splendor of this unique setting in all its glory. The effort costs you 15 energy points, but you gain 30 in strength.',
        strength: 30,
        energy: -15,
    }
    ]
};

const trailsArray = [
    trailOfTenFalls,
    elkToKingsMountain,
    oaksBottom,
    tamanawasFalls,
    wildhorseLake,
];

export default trailsArray;