import { User } from "@/app/types";
import Image from "next/image";

export default function Main({user}:{user: User}) {
  const imgSize = 76;

  return (
    <main className='flex-1 m-2 ml-0 mb-0 rounded p-6 bg-gradient-to-b from-blue-900 from-0% to-zinc-900 to-20%'>
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
              <button className='bg-black/50 rounded-full w-8 h-8 flex items-center justify-center overflow-hidden'>
                <Image src={user.profilepic} alt={user.name} width={24} height={32} className='rounded-full'></Image>
              </button>
            </div>
          </div>

          <h1 className='font-bold text-3xl mt-9'>Boa noite</h1>
          <div className='grid grid-cols-3 gap-4 mt-4'>
            {user.playlists.map((item, index) => {
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
          <div className="flex items-center justify-between mt-10 font-bold">
          <h1 className="text-2xl">Feito para {user.name}</h1>
            <h3 className="text-sm text-zinc-500 cursor-pointer hover:underline">Mostrar tudo</h3>
          </div>
          <div className={`grid grid-cols-4 gap-4 mt-4`}>
            {user.playlists.map((item, index) => {
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
  )
}
