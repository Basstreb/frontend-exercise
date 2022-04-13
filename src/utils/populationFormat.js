import { up } from "./roundUp";

export const populationFormat = (population) => {
    if (population === 'unknown') {
        return population;
    }

    const populationNumber = parseInt(population);
    if (populationNumber > 1000000) {
        return `${up(populationNumber / 1000000, 2)}M`;
    }
    if (populationNumber > 1000) {
        return `${up(populationNumber / 1000, 1)}K`;
    }
    return population;
}