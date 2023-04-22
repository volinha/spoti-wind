import { CurrentlyPlaying } from "@/app/types";
import Image from "next/image";

export default function Footer({ playing } : { playing: CurrentlyPlaying }) {
  const imgSize = 76;
  return (
    <footer className='bg-zinc-900 border-t border-zinc-700 p-6 max-h-min flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Image
            className='w-full rounded'
            src={playing.coverurl}
            width={imgSize - 12}
            height={imgSize}
            alt='album cover'
          />
          <div className='flex flex-col gap-1 text-sm '>
            <strong className='font-semibold cursor-pointer hover:underline'>{playing.song}</strong>
            <span className='font-light text-zinc-300 cursor-pointer hover:underline'>
              {playing.artist}
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
            <span className='text-xs text-zinc-400'>{playing.currentTime}</span>
            <div className='h-1 rounded-full w-96 bg-zinc-600 group'>
              <div className='bg-zinc-200 w-10 h-1 rounded-full group-hover:bg-green-500 flex items-center justify-end'>
                <div className='rounded-full bg-zinc-50 w-3 h-3 invisible group-hover:visible'></div>
              </div>
            </div>
            <span className='text-xs text-zinc-400'>{playing.totalTime}</span>
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
  )
}
