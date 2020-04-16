import * as React from "react";
import { Stack, DefaultButton } from "office-ui-fabric-react";
import { tableTokens } from "../styles";

export class EquipmentTable extends React.Component {
    public render(): JSX.Element {
        return (
            <Stack tokens={tableTokens}>
                <DefaultButton text="Add Rep" />
                <DefaultButton text="Add Equipment" />
                <DefaultButton text="Add Psi Sleight" />
                <DefaultButton text="Add Trait" />
            </Stack>
        );
    }
}
