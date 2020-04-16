import * as React from "react";
import { Label, TextField, Stack, IconButton } from "office-ui-fabric-react";
import { SkillType } from "../../../model/atomicTypes";
import { innerTableTokens } from "../../styles";
import { skillTitleStyles, skillFieldStyles } from "./styles";

type SkillCardProps = {
    skill: SkillType;
};

export class SkillLine extends React.Component<SkillCardProps> {
    public render(): JSX.Element {
        // TODO connect to redux store
        // TODO modify Specializations to be elements that can be added or removed
        return (
            <Stack horizontal tokens={innerTableTokens}>
                <Label styles={skillTitleStyles}>{this.props.skill}</Label>
                <Label>APT</Label>
                <TextField readOnly styles={skillFieldStyles} />
                <TextField readOnly styles={skillFieldStyles} />
                <TextField styles={skillFieldStyles} />
                <TextField readOnly styles={skillFieldStyles} />
                <TextField readOnly styles={skillFieldStyles} />
                <TextField readOnly styles={skillFieldStyles} />
                <Stack horizontal>
                    <IconButton iconProps={{ iconName: "add" }} />
                </Stack>
            </Stack>
        );
    }
}
