import * as React from "react";
import { Stack, TextField, Label } from "office-ui-fabric-react";
import { tableTokens, tableLabelStyles, mediumFieldStyles } from "../styles";

export class FreeStatTable extends React.Component {
    public render(): JSX.Element {
        return (
            <Stack horizontal tokens={tableTokens}>
                <Stack tokens={tableTokens}>
                    <Label> Resource </Label>
                    <Label> Starting </Label>
                    <Label> Remaining </Label>
                </Stack>
                <Stack tokens={tableTokens}>
                    <Label styles={tableLabelStyles}> AP </Label>
                    <TextField styles={mediumFieldStyles} />
                    <TextField readOnly styles={mediumFieldStyles} />
                </Stack>
                <Stack tokens={tableTokens}>
                    <Label styles={tableLabelStyles}> CP </Label>
                    <TextField styles={mediumFieldStyles} />
                    <TextField readOnly styles={mediumFieldStyles} />
                </Stack>
                <Stack tokens={tableTokens}>
                    <Label styles={tableLabelStyles}> Rep </Label>
                    <TextField styles={mediumFieldStyles} />
                    <TextField readOnly styles={mediumFieldStyles} />
                </Stack>
                <Stack tokens={tableTokens}>
                    <Label styles={tableLabelStyles}> credit </Label>
                    <TextField styles={mediumFieldStyles} />
                    <TextField readOnly styles={mediumFieldStyles} />
                </Stack>
            </Stack>
        );
    }
}
