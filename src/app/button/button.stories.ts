import { ButtonComponent } from './button.component';

export default {
  title: 'Dev Button',
  component: ButtonComponent
};

const Template = (args) => ({
  component: ButtonComponent,
  props: args
});

export const Default = Template.bind({});
Default.args = { label: 'Default' };

export const Outline = Template.bind({});
Outline.args = { ...Default.args, variant: 'outline', color: 'primary' };

export const Text = Template.bind({});
Text.args = { ...Default.args, variant: 'text' };

export const DisableShadow = Template.bind({});
DisableShadow.args = { ...Default.args, color: 'primary', disableShadow: true }

export const Disabled = Template.bind({});
Disabled.args = { ...Default.args, label: 'Disabled', disabled: true }

export const SizeSmall = Template.bind({});
SizeSmall.args = { ...Default.args, color:'primary', size: 'sm' };

export const SizeMedium = Template.bind({});
SizeMedium.args = { ...Default.args, color:'primary', size: 'md' };

export const SizeLarge = Template.bind({});
SizeLarge.args = { ...Default.args, color:'primary', size: 'lg' };

export const ColorDefault = Template.bind({});
ColorDefault.args = { ...Default.args, color:'default' };

export const ColorPrimary = Template.bind({});
ColorPrimary.args = { ...Default.args, label: 'Primary', color:'primary' };

export const ColorSecondary = Template.bind({});
ColorSecondary.args = { ...Default.args, label: 'Secondary', color:'secondary' };

export const ColorDanger = Template.bind({});
ColorDanger.args = { ...Default.args, label: 'Danger', color:'danger' };
