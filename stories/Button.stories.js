import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  // tags: ['autodocs'],
};

export const Primary = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary = {
  args: {
    label: "Button",
  },
};
