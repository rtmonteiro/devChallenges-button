import { ButtonComponent } from './button.component';

export default {
  title: 'Dev Button',
  component: ButtonComponent
};

export const Default = () => ({
  title: 'default',
  component: ButtonComponent,
  props: {
    text: 'Default',
  },
});

export const Outline = () => ({
  title: 'outline',
  component: ButtonComponent,
  props: {
    text: 'Default',
    variant: 'outline'
  },
});
