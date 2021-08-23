import { heroes } from "../data/heroes";

export const getHeroByName = (name)=>
 (name ==='' || !name) ? [] : heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name.toLocaleLowerCase()))
