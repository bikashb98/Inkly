import type {Meta, StoryObj} from '@storybook/react-vite'
import { Article } from '../components/Article'



const meta = {
    title: 'Pages/Article',
    component: Article, 
    tags: ['autodocs']
    
} satisfies Meta<typeof Article>

export default meta;

type Story = StoryObj<typeof meta>


export const Primary: Story = {}