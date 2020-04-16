import * as React from "react";
import { Stack, Label, DefaultButton } from "office-ui-fabric-react";
import { SkillLine } from "./skillLine/skillLine";
import { ActiveSkillType, KnowledgeSkillType } from "../../model/atomicTypes";
import { tableTokens, innerTableTokens } from "../styles";
import { skillTitleStyles } from "./skillLine/styles";
import { skillHeaderStyles } from "./styles";

export class SkillList extends React.Component {
    createActiveSkillTable(): JSX.Element[] {
        const table = [];

        for (const skill of Object.values(ActiveSkillType)) {
            table.push(<SkillLine skill={skill} key={skill} />);
        }

        return table;
    }

    createKnowledgeSkillTable(): JSX.Element[] {
        const table = [];

        for (const skill of Object.values(KnowledgeSkillType)) {
            table.push(<SkillLine skill={skill} key={skill} />);
        }

        return table;
    }

    public render(): JSX.Element {
        return (
            <Stack>
                <Stack horizontal tokens={tableTokens}>
                    <Label>Active Skills</Label>
                    <DefaultButton text="Add Field Skill" />
                </Stack>

                <Stack horizontal tokens={innerTableTokens}>
                    <Label styles={skillTitleStyles}>Skill</Label>
                    <Label>APT</Label>
                    <Label styles={skillHeaderStyles}>From APT</Label>
                    <Label styles={skillHeaderStyles}>Background</Label>
                    <Label styles={skillHeaderStyles}>Base</Label>
                    <Label styles={skillHeaderStyles}>Faction</Label>
                    <Label styles={skillHeaderStyles}>Morph</Label>
                    <Label styles={skillHeaderStyles}>Total</Label>
                    <Label>Specializations</Label>
                </Stack>

                {this.createActiveSkillTable()}

                <Stack horizontal tokens={tableTokens}>
                    <Label>Knowledge Skills</Label>
                    <DefaultButton text="Add Field Skill" />
                </Stack>

                <Stack horizontal tokens={innerTableTokens}>
                    <Label styles={skillTitleStyles}>Skill</Label>
                    <Label>APT</Label>
                    <Label styles={skillHeaderStyles}>From APT</Label>
                    <Label styles={skillHeaderStyles}>Background</Label>
                    <Label styles={skillHeaderStyles}>Base</Label>
                    <Label styles={skillHeaderStyles}>Faction</Label>
                    <Label styles={skillHeaderStyles}>Morph</Label>
                    <Label styles={skillHeaderStyles}>Total</Label>
                    <Label>Specializations</Label>
                </Stack>

                {this.createKnowledgeSkillTable()}
            </Stack>
        );
    }
}
