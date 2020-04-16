import * as React from "react";
import { Stack, TextField, Dropdown } from "office-ui-fabric-react";

export class ConceptTable extends React.Component {
    public render(): JSX.Element {
        return (
            <Stack>
                <TextField label="Character Name"></TextField>
                <Dropdown
                    label="Background"
                    options={[{ key: "placeholder", text: "placeholder" }]}
                ></Dropdown>
                <Dropdown
                    label="Faction"
                    options={[{ key: "placeholder", text: "placeholder" }]}
                ></Dropdown>
                <TextField label="Current Morph" readOnly></TextField>
                <TextField label="Gender Identity"></TextField>
                <TextField label="Actual Age"></TextField>
                <TextField
                    label="Motivations"
                    multiline
                    autoAdjustHeight
                ></TextField>
            </Stack>
        );
    }
}
