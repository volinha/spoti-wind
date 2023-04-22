import Image from "next/image";
import data from "../app/assets/data.json";

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
          <nav className='mt-10 pt-10 border-t border-zinc-1040'>
            {data.user.userplaylists.map((item, index) => {
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
        <main className='flex-1 p-6'>
          <div className='flex items-center gap-3 justify-between'>
            <div className="flex items-center gap-2">
              <button className='bg-black/50 rounded-full w-8 h-8 flex items-center justify-center'>
                <i className='mdi mdi-chevron-left'></i>
              </button>
              <button className='bg-black/50 rounded-full w-8 h-8 flex items-center justify-center'>
                <i className='mdi mdi-chevron-right'></i>
              </button>
            </div>
            <div className="flex gap-3">
            <button className='bg-black/50 rounded-full w-8 h-8 flex items-center justify-center'>
                <i className='mdi mdi-account-group'></i>
              </button>
              <button className='bg-black/50 rounded-full w-8 h-8 flex items-center justify-center overflow-hidden'>
                <Image src={data.user.profilepic} alt={data.user.name} width={32} height={32} className=''></Image>
              </button>
            </div>
          </div>

          <h1 className='font-bold text-3xl mt-9'>Boa noite</h1>
          <div className='grid grid-cols-3 gap-4 mt-4'>
            {data.user.playlists.map((item, index) => {
              return (
                <div
                  key={index}
                  className='group bg-white/10 rounded flex items-center gap-4 overflow-hidden text-sm cursor-pointer hover:bg-white/20 transition-colors'>
                  <Image src={item.coverurl} width={imgSize} height={imgSize} alt='album cover' />
                  <strong>{item.name}</strong>
                  <button className='ml-auto mr-8 p-2 rounded-full bg-green-500 w-8 h-8 flex items-center justify-center invisible group-hover:visible transition-opacity'>
                    <i className='mdi mdi-play text-xl text-black'></i>
                  </button>
                </div>
              );
            })}
          </div>
          <h1 className='font-bold text-2xl mt-10'>Feito para {data.user.name}</h1>
          <div className={`grid grid-cols-4 gap-4 mt-4`}>
            {data.user.playlists.map((item, index) => {
              if (index < 4) {
                return (
                  <div
                    key={index}
                    className='bg-white/10 hover:bg-white/20 group flex flex-col gap-2 p-3 rounded cursor-pointer '>
                    <div className='relative'>
                      <Image
                        className='w-full rounded'
                        src={item.coverurl}
                        width={imgSize}
                        height={imgSize}
                        alt={`Capa do álbum ${item.name}`}
                      />
                      <button className='absolute bottom-0 right-2 rounded-full bg-green-500 w-10 h-10 opacity-0 group-hover:opacity-100 group-hover:-translate-y-3 transition-all'>
                        <i className='mdi mdi-play text-2xl text-black'></i>
                      </button>
                    </div>
                    <strong className='font-semibold'>{item.name}</strong>
                    <span className='text-xs font-light text-zinc-300'>{item.artists} e mais</span>
                  </div>
                );
              }
            })}
          </div>
        </main>
      </div>
      <footer className='bg-zinc-900 border-t border-zinc-700 p-6 max-h-min flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Image
            className='w-full rounded'
            src={data.user.playlists[0].coverurl}
            width={imgSize - 12}
            height={imgSize}
            alt='album cover'
          />
          <div className='flex flex-col gap-1 text-sm '>
            <strong className='font-semibold cursor-pointer hover:underline'>{data.user.playing.song}</strong>
            <span className='font-light text-zinc-300 cursor-pointer hover:underline'>
              {data.user.playing.artist}
            </span>
          </div>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <div className='flex items-center text-xl text-zinc-400 gap-10'>
            <i className='mdi mdi-shuffle-variant hover:text-zinc-300 transition-all'></i>
            <i className='mdi mdi-step-backward hover:text-zinc-300 transition-all'></i>
            <i className='mdi mdi-play-circle text-5xl text-zinc-100 hover:scale-110 transition-all'></i>
            <i className='mdi mdi-step-forward hover:text-zinc-300 transition-all'></i>
            <i className='mdi mdi-repeat hover:text-zinc-300 transition-all'></i>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-400'>{data.user.playing.currentTime}</span>
            <div className='h-1 rounded-full w-96 bg-zinc-600 group'>
              <div className='bg-zinc-200 w-10 h-1 rounded-full group-hover:bg-green-500 flex items-center justify-end'>
                <div className='rounded-full bg-zinc-50 w-3 h-3 invisible group-hover:visible'></div>
              </div>
            </div>
            <span className='text-xs text-zinc-400'>{data.user.playing.totalTime}</span>
          </div>
        </div>
        <div className='flex items-center gap-3 text-xl text-zinc-400'>
          <i className='mdi mdi-microphone hover:text-zinc-300'></i>
          <i className='mdi mdi-playlist-music hover:text-zinc-300'></i>
          <i className='mdi mdi-devices hover:text-zinc-300'></i>
          <i className='mdi mdi-volume-high hover:text-zinc-300'></i>
          <div className='h-1 rounded-full w-20 bg-zinc-600 group'>
            <div className='bg-zinc-200 w-8 h-1 rounded-full group-hover:bg-green-500 flex items-center justify-end'>
              <div className='rounded-full bg-zinc-50 w-3 h-3 invisible group-hover:visible'></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
