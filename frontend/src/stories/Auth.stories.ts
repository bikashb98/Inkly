import type { Meta, StoryObj} from "@storybook/react-vite"; 
import { withRouter} from 'storybook-addon-remix-react-router';
import {Auth} from "../components/Auth";

const meta = {
    title: 'Form/Auth',
    component: Auth,
    tags: ['autodocs'],
    decorators: [withRouter],
   
    args: {
        Heading: 'Create an account',
        SubHeading:'Already have an account?',
        Type: 'Sign Up',
        linkTo: '/signin',
        linkText: 'Login'
    },

    
} satisfies Meta<typeof Auth>;

export default meta;

type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const SignIn: Story = {
    args: {
        Heading: 'Sign In',
        SubHeading: 'Don\'t have an account?' ,
        Type: 'Sign In',
        linkTo: '/signup',
        linkText: 'Sign Up'
    }
}
