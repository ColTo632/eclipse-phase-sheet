import React from "react";
import { SkillList } from "./components/skillList/skillList";
import { ConceptTable } from "./components/conceptTable/conceptTable";
import { StatTable } from "./components/statTable/statTable";
import { MorphTable } from "./components/morphTable/morphTable";
import { MuseTable } from "./components/museTable/museTable";
import { FreeStatTable } from "./components/freeStatTable/freeStatTable";
import { EquipmentTable } from "./components/equipmentTable/equipmentTable";
import { Stack, DefaultButton } from "office-ui-fabric-react";

function App(): JSX.Element {
    return (
        <div className="App">
            <FreeStatTable />
            <Stack horizontal>
                <ConceptTable />
                <StatTable />
            </Stack>
            <SkillList />
            <Stack horizontal>
                <EquipmentTable />
                <MuseTable />
            </Stack>
            <DefaultButton text="Add Morph" />
            <Stack horizontal>
                <MorphTable />
                <Stack.Item />
            </Stack>
        </div>
    );
}

export default App;
