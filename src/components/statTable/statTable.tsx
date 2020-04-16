import * as React from "react";
import { AptitudeTable } from "./aptitudeTable/aptitudeTable";
import { Stack } from "office-ui-fabric-react";
import { CombatTable } from "./combatTable/combatTable";
import { RemainingStatTable } from "./remainingStatTable/remainingStatTable";
import { HealthTable } from "./healthTable/healthTable";

export class StatTable extends React.Component {
    // TODO
    public render(): JSX.Element {
        return (
            <Stack>
                <AptitudeTable />
                <RemainingStatTable />
                <HealthTable />
                <CombatTable />
            </Stack>
        );
    }
}
