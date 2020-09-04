import { ButtonComponent } from './button.component';

export default {
  title: 'Dev Button',
  component: ButtonComponent
};

const Template = (args) => ({
  component: ButtonComponent,
  props: args,

});

export const Default = Template.bind({});
Default.args = { text: 'Default' };

export const Outline = Template.bind({});
Outline.args = { ...Default.args, variant: 'outline', color: 'primary' };

export const Text = Template.bind({});
Text.args = { ...Default.args, variant: 'text' };

export const DisableShadow = Template.bind({});
DisableShadow.args = { ...Default.args, color: 'primary', disableShadow: true }

export const Disabled = Template.bind({});
Disabled.args = { ...Default.args, text: 'Disabled', disable: true }
