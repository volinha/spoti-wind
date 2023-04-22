import { User } from "@/app/types";

export default function Sidebar({ user }: { user: User }) {
  return (
    <aside className='w-72 bg-zinc-950 p-6'>
          <div className='flex items-center gap-1 pb-6 pl-1'>
            <div className='w-1 h-1 bg-zinc-50 rounded-full'></div>
            <div className='w-1 h-1 bg-zinc-50 rounded-full'></div>
            <div className='w-1 h-1 bg-zinc-50 rounded-full'></div>
          </div>
          <nav className='space-y-2'>
            <a
              href=''
              className='flex items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-zinc-50 active:text-zinc-50 transition-all'>
              <i className='mdi mdi-home text-2xl'></i>
              Início
            </a>
            <a
              href=''
              className='flex items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-zinc-50 active:text-zinc-50 transition-all'>
              <i className='mdi mdi-magnify text-2xl'></i>
              Buscar
            </a>
            <a
              href=''
              className='flex items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-zinc-50 active:text-zinc-50 transition-all'>
              <i className='mdi mdi-library-shelves text-2xl'></i>
              Sua Biblioteca
            </a>
          </nav>
          <nav className='mt-10 pt-10 border-t border-zinc-800'>
            {user.userplaylists.map((item, index) => {
              return (
                <div
                  className='text-sm truncate mt-3 text-zinc-400 hover:text-zinc-50 transition-all cursor-default'
                  key={index}>
                  {item}
                </div>
              );
            })}
          </nav>
        </aside>
    );
}
