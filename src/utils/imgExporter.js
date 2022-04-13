import defaultImg from '../assets/default.jpg'
import alderaan from '../assets/planets/alderaan.jpg';
import bespin from '../assets/planets/bespin.png';
import coruscant from '../assets/planets/coruscant.png';
import dagobah from '../assets/planets/Dagobah.jpg';
import endor from '../assets/planets/endor.png';
import hoth from '../assets/planets/hoth.png';
import kamino from '../assets/planets/kamino.jpg';
import naboo from '../assets/planets/naboo.png';
import tatooine from '../assets/planets/tatooine.png';
import yaviniv from '../assets/planets/yaviniv.png';


import cr90corvette from '../assets/starships/cr90corvette.png';
import deathStar from '../assets/starships/deathStar.png';
import executorBF2 from '../assets/starships/Executor_BF2.png';
import imperialClassStarDestroyer from '../assets/starships/ImperialClassStarDestroyer.png';
import milleniumFalcon from '../assets/starships/millenniumFalcon.png';
import rebelTransport from '../assets/starships/rebelTransport.jpg';
import swfb from '../assets/starships/TIEAdvancedX1.png';
import xWing from '../assets/starships/X-wing.png';
import yWing from '../assets/starships/Y-wing.png';


import atat from '../assets/vehicles/AT-AT.png';
import atst from '../assets/vehicles/at-st.jpg';
import sailBarge from '../assets/vehicles/Sailbarge.png';
import sandcrawler from '../assets/vehicles/sandcrawler.jpg'
import t16skyhopper from '../assets/vehicles/T-16skyhopper.png';
import tiefighter from '../assets/vehicles/LNstarfighter.png';
import x34landspeeder from '../assets/vehicles/X-34landspeeder.jpg';
import stormiv from '../assets/vehicles/stormivtwin-podcloudcar.png';

const planetsArray = [
    alderaan,
    bespin,
    coruscant,
    dagobah,
    endor,
    hoth,
    kamino,
    naboo,
    tatooine,
    yaviniv
];

const starshipsArray = [
    cr90corvette,
    deathStar,
    executorBF2,
    imperialClassStarDestroyer,
    milleniumFalcon,
    rebelTransport,
    swfb,
    xWing,
    yWing,
]

const vehiclesArray = [
    atat,
    atst,
    sailBarge,
    sandcrawler,
    t16skyhopper,
    tiefighter,
    x34landspeeder,
    stormiv,
]

export const planetsImgsExporter = (planetName) => {
    for (let index = 0; index < planetsArray.length; index++) {
        const element = planetsArray[index];
        if (element.toLowerCase().includes(planetName.split(' ').join('').toLowerCase())) {
            return element;
        }
    }
    return defaultImg;
}

export const starshipsImgsExporter = (starshipName) => {
    for (let index = 0; index < starshipsArray.length; index++) {
        const element = starshipsArray[index];
        if (element.toLowerCase().includes(starshipName.split(' ').join('').toLowerCase())) {
            return element;
        }
    }
    return defaultImg;
}

export const vehiclesImgsExporter = (vehicleName) => {
    for (let index = 0; index < vehiclesArray.length; index++) {
        const element = vehiclesArray[index];
        if (element.toLowerCase().split('/').join('').includes(vehicleName.split(' ').join('').toLowerCase())) {
            return element;
        }
    }
    return defaultImg;
}