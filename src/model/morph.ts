import { Aptitude } from "./atomicTypes";
import { Implant } from "./implant";
import { Trait } from "./trait";

export interface Morph {
    morphType: string;
    visibleGender: string;
    visibleAge: string;
    discription: string;
    aptitudeBonuses: Map<Aptitude, number>;
    aptitudeMax: number;
    speedMod: number;
    movementRate: number;
    durability: number;
    woundThreshold: number;

    mobilitySystem: string;

    implants: Implant[];
    traits: Trait[];
}
