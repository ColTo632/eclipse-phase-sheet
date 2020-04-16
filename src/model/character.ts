import { Aptitude } from "./atomicTypes";
import { Background } from "./background";
import { Faction } from "./faction";
import { Morph } from "./morph";
import { FreeStats } from "./freeStats";

export interface Character {
    name: string;
    background?: Background;
    faction?: Faction;
    currentMorph?: Morph;
    avaliableMorphs: Morph[];
    aptitudes: Map<Aptitude, number>;
    freeStats: FreeStats;
}
