import { heroes } from "../data/heroes";

export const getHeroById = (heroId) => heroes.find(hero=> hero.id === heroId);
