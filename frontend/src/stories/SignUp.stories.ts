import type {Meta, StoryObj} from '@storybook/react-vite'
import {SignUp} from '../pages/SignUp'


const meta = {
    title: 'Pages/CreateAccount', 
    component: SignUp,
    tags: ['autodocs']
}satisfies Meta<typeof SignUp>

export default meta;


type Story = StoryObj<typeof meta>

export const Primary: Story = {}
   
