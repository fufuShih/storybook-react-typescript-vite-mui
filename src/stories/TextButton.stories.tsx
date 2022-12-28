import TextButton, { ButtonProps } from "../components/TextButton";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Components/Button",
  component: TextButton
} as Meta;

const Template: Story<ButtonProps> = (args) => <TextButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "test"
};

export const Submit = () => <TextButton label="Submit" />;

export const Check = () => <TextButton label="Check" />;
