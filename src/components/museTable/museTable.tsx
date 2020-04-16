import * as React from "react";
import { Stack, Dropdown, TextField, Label } from "office-ui-fabric-react";
import { tableTokens, smallFieldStyles } from "../styles";

export class MuseTable extends React.Component {
    // TODO
    public render(): JSX.Element {
        return (
            <Stack tokens={tableTokens}>
                <Label>Muse</Label>
                <Dropdown
                    label="Muse Type"
                    options={[{ key: "placeholderE", text: "placeholder" }]}
                ></Dropdown>
                <TextField label="Description" readOnly />
                <Stack horizontal tokens={tableTokens}>
                    <TextField label="COG" readOnly styles={smallFieldStyles} />
                    <TextField label="COO" readOnly styles={smallFieldStyles} />
                    <TextField label="INT" readOnly styles={smallFieldStyles} />
                    <TextField label="REF" readOnly styles={smallFieldStyles} />
                    <TextField label="SAV" readOnly styles={smallFieldStyles} />
                    <TextField label="SOM" readOnly styles={smallFieldStyles} />
                    <TextField label="WIL" readOnly styles={smallFieldStyles} />
                </Stack>
                <Stack horizontal tokens={tableTokens}>
                    <TextField
                        label="LUC"
                        readOnly
                        styles={smallFieldStyles}
                    ></TextField>
                    <TextField
                        label="TT"
                        readOnly
                        styles={smallFieldStyles}
                    ></TextField>
                    <TextField
                        label="IR"
                        readOnly
                        styles={smallFieldStyles}
                    ></TextField>
                </Stack>
                <TextField label="CP Cost" readOnly />
                <TextField label="Credit Cost" readOnly />
                <TextField label="Notes" multiline />
            </Stack>
        );
    }
}
