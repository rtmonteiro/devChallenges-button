import { ButtonComponent } from './button.component';

export default {
  title: 'Dev Button',
  component: ButtonComponent
};

export const Default = () => ({
  component: ButtonComponent,
  props: {
    text: 'Default',
  },
});

export const Outline = () => ({
  component: ButtonComponent,
  props: {
    text: 'Default',
    variant: 'outline',
    color: 'primary',
  },
});

export const Text = () => ({
  component: ButtonComponent,
  props: {
    text: 'Default',
    variant: 'text'
  },
});

export const DisableShadow = () => ({
  component: ButtonComponent,
  props: {
    text: 'Default',
    color: 'primary',
    disableShadow: true
  },
});

export const Disabled = () => ({
  component: ButtonComponent,
  props: {
    text: 'Disabled',
    color: 'default',
    // disableShadow: true,
    disable: true
  },
});
