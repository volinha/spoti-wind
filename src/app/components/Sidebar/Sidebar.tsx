import { User } from "@/app/types";
import Image from "next/image";

import PlaylistDefault from "../../../../public/capa4.png";

export default function Sidebar({ user }: { user: User }) {
  return (
    <aside>
      <div className='w-72 rounded-lg bg-zinc-900 p-6 m-2 mb-0'>
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
        </nav>
      </div>
      <nav className='w-72 h-full rounded-lg bg-zinc-900 p-6 m-2 mb-0 relative'>
        <div className='flex items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-zinc-50 active:text-zinc-50 transition-all'>
          <i className='mdi mdi-library-shelves text-2xl'></i>
          Sua Biblioteca
          <div className='flex-row-reverse'></div>
          <i className='mdi mdi-plus text-2xl'></i>
          <i className='mdi mdi-arrow-right text-2xl'></i>
        </div>
        <div className='flex flex-row items-center gap-2 overflow-x-hidden'>
          {user.tags.map((item, index) => {
            return (
              <div
                className='text-sm p-1 px-2 mt-3 rounded-full whitespace-nowrap bg-zinc-800 text-white hover:text-zinc-50 transition-all'
                key={index}>
                {item}
              </div>
            );
          })}
        </div>
        <div className='w-full flex flex-row items-center justify-between pt-2'>
          <div>
            <i className='mdi mdi-magnify text-2xl'></i>
          </div>
          <div className="flex items-center">
            Recentes
            <i className='mdi mdi-menu-down text-2xl'></i>
            </div>
        </div>
        {user.userplaylists.map((item, index) => {
          return (
            <div
              className='flex flex-row items-center gap-2 text-sm truncate mt-3 text-zinc-400 hover:text-zinc-50 transition-all cursor-default overflow-y-hidden'
              key={index}>
              <Image className='rounded' src={PlaylistDefault} width={48} height={32} alt='' />
              {item}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
