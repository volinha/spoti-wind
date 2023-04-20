import Image from "next/image";
import data from "../app/assets/data.json";
import { useEffect, useState } from "react";

export default function Home() {
  const imgSize = 76;
  const numCols = 5;

  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
        <aside className='w-72 bg-zinc-950 p-6'>
          <div className='flex items-center gap-1 pb-6 pl-1'>
            <div className='w-1 h-1 bg-zinc-50 rounded-full'></div>
            <div className='w-1 h-1 bg-zinc-50 rounded-full'></div>
            <div className='w-1 h-1 bg-zinc-50 rounded-full'></div>
          </div>
          <nav className='space-y-5'>
            <a
              href=''
              className='flex items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-zinc-50 active:text-zinc-50 transition-all'>
              <span className='material-icons'>home</span>
              Início
            </a>
            <a
              href=''
              className='flex items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-zinc-50 active:text-zinc-50 transition-all'>
              <span className='material-icons'>search</span>
              Buscar
            </a>
            <a
              href=''
              className='flex items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-zinc-50 active:text-zinc-50 transition-all'>
              <span className='material-icons'>library_books</span>
              Sua Biblioteca
            </a>
          </nav>
          <nav className='mt-10 pt-10 border-t border-zinc-1040'>
            {data.userplaylists.map((item, index) => {
              return (
                <div
                  className='text-sm truncate mt-3 text-zinc-400 hover:text-zinc-50 transition-all cursor-default'
                  key={index}>
                  {item.name}
                </div>
              );
            })}
          </nav>
        </aside>
        <main className='flex-1 p-6'>
          <div className='flex items-center gap-3'>
            <button className='bg-black/50 rounded-full w-12 h-12 flex items-center justify-center'>
              <span className='material-icons'>chevron_left</span>
            </button>
            <button className='bg-black/50 rounded-full w-12 h-12 flex items-center justify-center'>
              <span className='material-icons'>chevron_right</span>
            </button>
          </div>

          <h1 className='font-bold text-3xl mt-9'>Boa noite</h1>
          <div className='grid grid-cols-3 gap-4 mt-4'>
            {data.playlists.map((item, index) => {
              return (
                <div
                  key={index}
                  className='group bg-white/10 rounded flex items-center gap-4 overflow-hidden text-sm cursor-pointer hover:bg-white/20 transition-colors'>
                  <Image src={item.coverurl} width={imgSize} height={imgSize} alt='album cover' />
                  <strong>{item.name}</strong>
                  <button className='ml-auto mr-8 p-2 rounded-full bg-green-500 w-8 h-8 flex items-center justify-center invisible group-hover:visible transition-opacity'>
                    <span className='material-icons text-black'>play_arrow</span>
                  </button>
                </div>
              );
            })}
          </div>
          <h1 className='font-bold text-2xl mt-10'>Feito para {data.user}</h1>
          <div className={`grid grid-cols-${numCols} gap-4 mt-4 overflow-x-auto max-h-screen-md`}>
            {data.playlists.map((item, index) => {
              if (index < numCols) {
                return (
                  <div key={index} className='bg-white/10 p-2 rounded overflow-hidden'>
                    <Image
                      className='w-full'
                      src={item.coverurl}
                      width={imgSize}
                      height={imgSize}
                      alt='album cover'
                    />
                    {item.name}
                  </div>
                );
              }
            })}
          </div>
        </main>
      </div>
      <footer className='bg-zinc-1040 border-t border-zinc-700 p-6'>footer</footer>
    </div>
  );
}

