import * as React from "react";
import {
    Stack,
    Dropdown,
    TextField,
    DefaultButton,
    Label
} from "office-ui-fabric-react";
import { tableTokens, smallFieldStyles } from "../styles";

export class MorphTable extends React.Component {
    // TODO
    public render(): JSX.Element {
        return (
            <Stack tokens={tableTokens}>
                <Label>Morph</Label>
                <Dropdown
                    label="Morph Type"
                    options={[{ key: "placeholderD", text: "placeholder" }]}
                ></Dropdown>
                <TextField label="Visible Gender" />
                <TextField label="Visible Age" />
                <TextField label="Description" readOnly multiline />
                <TextField label="Mobility System" />
                <Stack horizontal>
                    <Label>Movement Rate</Label>
                    <TextField styles={smallFieldStyles} />
                    <Label> / </Label>
                    <TextField styles={smallFieldStyles} />
                </Stack>
                <Stack horizontal tokens={tableTokens}>
                    <Label>Morph Bonus</Label>
                    <TextField label="COG" readOnly styles={smallFieldStyles} />
                    <TextField label="COO" readOnly styles={smallFieldStyles} />
                    <TextField label="INT" readOnly styles={smallFieldStyles} />
                    <TextField label="REF" readOnly styles={smallFieldStyles} />
                    <TextField label="SAV" readOnly styles={smallFieldStyles} />
                    <TextField label="SOM" readOnly styles={smallFieldStyles} />
                    <TextField label="WIL" readOnly styles={smallFieldStyles} />
                </Stack>
                <TextField label="Aptitude Max" readOnly />
                <TextField label="Durability" readOnly />
                <TextField label="Wound Threshold" readOnly />
                <TextField label="CP Cost" readOnly />
                <TextField label="Credit Cost" readOnly />
                <DefaultButton text="Add Implant" />
                <DefaultButton text="Add Trait" />
                <TextField label="Notes" resizable multiline />
            </Stack>
        );
    }
}
