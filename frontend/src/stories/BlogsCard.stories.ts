import type {Meta, StoryObj} from '@storybook/react-vite';

import { BlogsCard } from '../components/BlogsCard';

const meta = {
    title: 'Blog/BlogsCard',
    component: BlogsCard,
    tags: ['autodocs'],
    args: {
        authorName: 'John Doe',
        title: 'Sample Blog Title',
        content: 'This is a sample blog content that will be truncated for display purposes.',
        publishedDate: '2023-10-01'
    }
}satisfies Meta<typeof BlogsCard>

export default meta;

type Story = StoryObj<typeof meta>

export const Primary : Story = {}

export const Secondary : Story = {
    args: {
        authorName: 'Jane Smith',
        title: 'Another Sample Blog Title',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        publishedDate: '2023-10-02'
    }
}