import type {Meta, StoryObj} from '@storybook/react-vite';
import { Appbar } from '../components/Appbar';

const meta = {
    title: 'Blog/Appbar',
    component: Appbar,
    tags: ['autodocs'],
    args:{
        authorName: 'John Doe',
    }

}satisfies Meta<typeof Appbar>

export default meta;

type Story = StoryObj<typeof meta>


export const Default: Story = {}