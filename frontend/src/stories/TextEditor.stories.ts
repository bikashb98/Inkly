import type {Meta, StoryObj} from '@storybook/react-vite'
import { TextEditor } from '../components/TextEditor'


const meta = {
    title: 'Pages/TextEditor',
    component: TextEditor,
    tags: ['autodocs'],
  
} satisfies Meta<typeof TextEditor>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: 'Text Editor',
    },
}
