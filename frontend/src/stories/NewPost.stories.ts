import type {Meta, StoryObj} from '@storybook/react-vite'
import { NewPost } from '../pages/NewPost'


const meta = {
    title: 'Pages/NewPost',
    component: NewPost,
    tags: ['autodocs'],
  
} satisfies Meta<typeof NewPost>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: 'Text Editor',
    },
}
