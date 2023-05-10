export interface User {
    name: string;
    profilepic: string;
    userplaylists: UserPlaylist[];
    playlists: Playlist[];
    playing: CurrentlyPlaying;
    tags: string[];
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

interface UserPlaylist {
    name: string;
    type: string;
    imageurl: string;
    songs?: number;
    artist?: string;
    owner?: string;
}