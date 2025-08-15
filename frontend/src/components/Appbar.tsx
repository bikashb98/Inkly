import Inklylogo from '../assets/images/Inklylogo.svg';
import {PencilSquareIcon, Bars3Icon, BellIcon, MagnifyingGlassIcon} from '@heroicons/react/24/outline';
interface AppbarProps {
    authorName: string;
}
export function Appbar({ authorName }: AppbarProps) {
    return (
        <div className="mx-6 px-6">
            <div className="flex justify-between items-center border-slate-300 border-b w-full px-10 py-4">
                {/* Left side - Hamburger and Logo */}
                <div className='flex items-center gap-4'>
                    <button className="p-1 hover:bg-slate-100 rounded transition-colors w-8 h-8 flex items-center justify-center">
                        <Bars3Icon className='w-6 h-6 text-slate-600 scale-130' />
                    </button>
                    <div className="flex items-center max-w-[100px] max-h-[20px] ">
                        <img src={Inklylogo} alt="Inkly Logo" className='object-contain' />
                    </div>
                    <div className='bg-slate-100 border flex items-center h-10 rounded-full px-3 gap-2'>
                        <MagnifyingGlassIcon className='w-5 h-5 text-slate-400' />
                        <input className='bg-transparent outline-none  flex-1' type='text' placeholder='Search'/>
                    </div>
                </div>
                
                {/* Right side - Write button and Profile */}
                <div className='flex items-center gap-8'>
                    <button className="flex items-center gap-2 px-3 py-2 hover:bg-slate-100 rounded transition-colors">
                        <PencilSquareIcon className='w-6 h-6 text-slate-600' />
                        <span className="text-slate-600 font-medium">Write</span>
                    </button>
                    <button >
                        <BellIcon className='w-6 h-6 text-slate-600 hover:text-slate-800'  />
                    </button>
                    <div className="bg-slate-200 h-10 w-10 rounded-full flex items-center justify-center font-medium text-lg text-slate-600 hover:bg-slate-300 transition-colors cursor-pointer">
                        {authorName.slice(0, 1).toUpperCase()}
                    </div>
                </div>
            </div> 
        </div>
    )
}