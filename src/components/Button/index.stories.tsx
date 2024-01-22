import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    variant: "solid",
    size: "md",
    colorScheme: "primary",
    children: "Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    size: "md",
    colorScheme: "primary",
    children: "Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    size: "md",
    colorScheme: "primary",
    children: "Button",
  },
};
