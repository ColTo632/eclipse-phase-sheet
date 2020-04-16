import * as React from "react";
import { TextField, Stack, Label } from "office-ui-fabric-react";
import { smallFieldStyles, tableLabelStyles, tableTokens } from "../../styles";

export class AptitudeTable extends React.Component {
    public render(): JSX.Element {
        return (
            <Stack horizontal>
                <Stack tokens={tableTokens}>
                    <Label> Aptitude </Label>
                    <Label> Base </Label>
                    <Label> From Morph </Label>
                    <Label> Total </Label>
                </Stack>
                <Stack tokens={tableTokens}>
                    <Label styles={tableLabelStyles}> COG </Label>
                    <TextField styles={smallFieldStyles} />
                    <TextField readOnly styles={smallFieldStyles} />
                    <TextField readOnly styles={smallFieldStyles} />
                </Stack>
                <Stack tokens={tableTokens}>
                    <Label styles={tableLabelStyles}> COO </Label>
                    <TextField styles={smallFieldStyles} />
                    <TextField readOnly styles={smallFieldStyles} />
                    <TextField readOnly styles={smallFieldStyles} />
                </Stack>
                <Stack tokens={tableTokens}>
                    <Label styles={tableLabelStyles}> INT </Label>
                    <TextField styles={smallFieldStyles} />
                    <TextField readOnly styles={smallFieldStyles} />
                    <TextField readOnly styles={smallFieldStyles} />
                </Stack>
                <Stack tokens={tableTokens}>
                    <Label styles={tableLabelStyles}> REF </Label>
                    <TextField styles={smallFieldStyles} />
                    <TextField readOnly styles={smallFieldStyles} />
                    <TextField readOnly styles={smallFieldStyles} />
                </Stack>
                <Stack tokens={tableTokens}>
                    <Label styles={tableLabelStyles}> SAV </Label>
                    <TextField styles={smallFieldStyles} />
                    <TextField readOnly styles={smallFieldStyles} />
                    <TextField readOnly styles={smallFieldStyles} />
                </Stack>
                <Stack tokens={tableTokens}>
                    <Label styles={tableLabelStyles}> SOM </Label>
                    <TextField styles={smallFieldStyles} />
                    <TextField readOnly styles={smallFieldStyles} />
                    <TextField readOnly styles={smallFieldStyles} />
                </Stack>
                <Stack tokens={tableTokens}>
                    <Label styles={tableLabelStyles}> WIL </Label>
                    <TextField styles={smallFieldStyles} />
                    <TextField readOnly styles={smallFieldStyles} />
                    <TextField readOnly styles={smallFieldStyles} />
                </Stack>
            </Stack>
        );
    }
}
