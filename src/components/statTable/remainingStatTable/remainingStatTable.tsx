import * as React from "react";
import { Stack, TextField } from "office-ui-fabric-react";
import { smallFieldStyles, tableTokens } from "../../styles";

export class RemainingStatTable extends React.Component {
    public render(): JSX.Element {
        return (
            <Stack horizontal tokens={tableTokens}>
                <TextField label="MOX" styles={smallFieldStyles}></TextField>
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
                <TextField
                    label="INIT"
                    readOnly
                    styles={smallFieldStyles}
                ></TextField>
                <TextField
                    label="DB"
                    readOnly
                    styles={smallFieldStyles}
                ></TextField>
                <TextField
                    label="DR"
                    readOnly
                    styles={smallFieldStyles}
                ></TextField>
                <TextField
                    label="SPD"
                    readOnly
                    styles={smallFieldStyles}
                ></TextField>
            </Stack>
        );
    }
}
