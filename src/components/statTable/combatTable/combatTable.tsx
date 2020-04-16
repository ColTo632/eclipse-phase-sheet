import * as React from "react";
import { Stack, DefaultButton } from "office-ui-fabric-react";
import { tableTokens } from "../../styles";

export class CombatTable extends React.Component {
    public render(): JSX.Element {
        return (
            <Stack tokens={tableTokens}>
                <DefaultButton text="Add Armor" />
                <DefaultButton text="Add Weapon" />
            </Stack>
        );
    }
}
