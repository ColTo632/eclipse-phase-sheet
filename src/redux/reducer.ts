import { CharacterAction } from "./actionTypes";
import { Aptitude } from "../model/atomicTypes";
import { Character } from "../model/character";

export const initialState: Character = {
    name: "",
    avaliableMorphs: [],
    aptitudes: new Map<Aptitude, number>(),
    freeStats: {
        aptitudePoints: 105,
        credit: 5000,
        rep: 50,
        customizationPoints: 1000
    }
};

export const rootReducer = (
    state: Character = initialState,
    action: CharacterAction
): Character => {
    switch (action) {
        default:
            return state;
    }
};
