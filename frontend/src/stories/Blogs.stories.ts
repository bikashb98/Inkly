import type {Meta, StoryObj} from '@storybook/react-vite'
import { Blogs } from '../pages/Blogs'


const meta = {
    title: 'Pages/Blogs',
    component: Blogs,
    tags: ['autodocs']
} satisfies Meta<typeof Blogs>

export default meta;

type Story = StoryObj<typeof meta>

export const Primary:Story = {} 