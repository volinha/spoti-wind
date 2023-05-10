import { User } from "@/app/types";
import Image from "next/image";

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
          <div className='flex items-center'>
            Recentes
            <i className='mdi mdi-menu-down text-2xl'></i>
          </div>
        </div>
        {user.userplaylists.map((item, index) => {
          return (
            <div
              className='flex items-center gap-2 p-1 text-sm truncate mt-3 text-zinc-300 cursor-pointer hover:bg-zinc-800 rounded transition-all overflow-y-hidden'
              key={index}>
              <Image className='rounded aspect-square' src={item.imageurl} width={48} height={48} alt='' />
              <div className='flex flex-col '>
                <div className='text-zinc-100 font-semibold'>{item.name}</div>
                <div className='text-zinc-400'>
                  {item.type}
                  {
                  item.type === "Playlist"
                    ? " • " + item.owner
                    : item.type === "Álbum"
                    ? " • " + item.artist
                    : item.owner
                  }
                </div>
              </div>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
