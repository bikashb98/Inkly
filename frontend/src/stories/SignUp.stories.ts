import type {Meta, StoryObj} from '@storybook/react-vite'
import { withRouter } from 'storybook-addon-remix-react-router';
import {SignUp} from '../pages/SignUp'


const meta = {
    title: 'Pages/SignUp', 
    component: SignUp,
    tags: ['autodocs'],
    decorators: [withRouter]
}satisfies Meta<typeof SignUp>

export default meta;


type Story = StoryObj<typeof meta>

export const Primary: Story = {}
   
