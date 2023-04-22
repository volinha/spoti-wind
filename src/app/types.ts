export interface User {
    name: string;
    profilepic: string;
    userplaylists: string[];
    playlists: Playlist[];
    playing: CurrentlyPlaying;
}

export interface Playlist {
    name: string;
    coverurl: string;
    artists: string;
}

export interface CurrentlyPlaying {
    song: string;
    artist: string;
    currentTime: string;
    totalTime: string;
    coverurl: string;
}