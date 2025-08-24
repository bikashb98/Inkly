import type {Meta, StoryObj} from '@storybook/react-vite';
import {Quotes} from '../components/Quotes.tsx';

const meta = {
    title:'Form/Quotes',
    component: Quotes,
    tags: ['autodocs']
}satisfies Meta<typeof Quotes>;

export default meta;

type Story = StoryObj<typeof meta>

export const Primary:Story = {}