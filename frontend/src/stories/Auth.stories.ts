import type { Meta, StoryObj } from "@storybook/react-vite"; 
import {Auth} from "../components/Auth";

const meta = {
    title: 'Form/Auth',
    component: Auth,
    tags: ['autodocs'],
   
    args: {
        Heading: 'Create an account',
        SubHeading:'Already have an account?'
    }
} satisfies Meta<typeof Auth>;

export default meta;

type Story = StoryObj<typeof meta>

export const Primary: Story = {}

