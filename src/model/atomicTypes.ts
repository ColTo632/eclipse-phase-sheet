export enum Aptitude {
    COG = "COG",
    COO = "COO",
    INT = "INT",
    REF = "REF",
    SOM = "SOM",
    WIL = "WIL"
}

export enum Rep {
    A = "@",
    C = "C",
    E = "E",
    F = "F",
    G = "G",
    I = "I",
    R = "R"
}

export enum ActiveSkillType {
    AnimalHandling = "Animal Handling",
    BeamWeapons = "Beam Weapons",
    Blades = "Blades",
    Climbing = "Climbing",
    Clubs = "Clubs",
    Control = "Control",
    Deception = "Deception",
    Demolitions = "Demolitions",
    Disguise = "Disguise",
    Flight = "Flight",
    Fray = "Fray",
    FreeFall = "Free Fall",
    Freerunning = "Freerunning",
    Gunnery = "Gunnery",
    Impersonation = "Impersonation",
    Infiltration = "Infiltration",
    Infosec = "Infosec",
    Interfacing = "Interfacing",
    Intimidation = "Intimidation",
    Investigation = "Investigation",
    Kinesics = "Kinesics",
    KineticWeapons = "Kinetic Weapons",
    Medicine = "Medicine",
    Navigation = "Navigation",
    Palming = "Palming",
    Perception = "Perception",
    Persuasion = "Persuasion",
    Programming = "Programming",
    Protocol = "Protocol",
    PsiAssault = "Psi Assault",
    Psychosurgery = "Psychosurgery",
    Research = "Research",
    Scrounging = "Scrounging",
    SeekerWeapons = "Seeker Weapons",
    Sense = "Sense",
    SprayWeapons = "Spray Weapons",
    Swimming = "Swimming",
    ThrowingWeapons = "Throwing Weapons",
    UnarmedCombat = "Unarmed Combat"
}

export enum ActiveFieldSkillType {
    ExoticMelee = "Exotic Melee",
    ExoticRanged = "Exotic Ranged",
    Hardware = "Hardware",
    Medicine = "Medicine",
    Networking = "Networking",
    Pilot = "Pilot"
}

export enum KnowledgeSkillType {
    NativeTounge = "Native Tounge"
}

export enum KnowledgeFieldSkillType {
    Academics = "Academics",
    Art = "Art",
    Interest = "Interest",
    Language = "Language",
    Profession = "Profession"
}

export type SkillType =
    | ActiveSkillType
    | ActiveFieldSkillType
    | KnowledgeSkillType
    | KnowledgeFieldSkillType;
