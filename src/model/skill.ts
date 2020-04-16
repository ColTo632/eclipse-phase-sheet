import { Aptitude } from "./atomicTypes";

export interface Skill {
    canDefault: boolean;
    linkedAptitude: Aptitude;
    backgroundBonus: number;
    factionBonus: number;
    morphBonus: number;
    specializations: string[];
    base: number;
    total: number;
}
