import type { Meta, StoryObj} from "@storybook/react-vite"; 
import { withRouter} from 'storybook-addon-remix-react-router';
import {SignIn} from "../pages/SignIn";


const meta = {
    title: 'Pages/SignIn', 
    component: SignIn,
    tags: ['autodocs'],
    decorators: [withRouter],
   
}satisfies Meta<typeof SignIn>;

export default meta;

type Story = StoryObj<typeof meta>

export const Primary: Story = {}