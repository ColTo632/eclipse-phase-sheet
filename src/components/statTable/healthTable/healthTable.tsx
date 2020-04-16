import * as React from "react";
import { Stack, TextField } from "office-ui-fabric-react";
import { tableTokens, mediumFieldStyles } from "../../styles";

export class HealthTable extends React.Component {
    public render(): JSX.Element {
        return (
            <Stack horizontal tokens={tableTokens}>
                <TextField label="Damage" styles={mediumFieldStyles} />
                <TextField label="Wounds" styles={mediumFieldStyles} />
                <TextField label="Stress" styles={mediumFieldStyles} />
                <TextField label="Trauma" styles={mediumFieldStyles} />
            </Stack>
        );
    }
}
