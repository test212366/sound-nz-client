export interface ITrack {
	imgSRC: string
	name: string
	groupName: string
	timeTrack: string
	isLike: boolean
	trackSRC: string
	type?: string
	genre?: string
	album?: string
}

export interface TracksState {
	allTracks: ITrack[] | []
	currentTrack: ITrack | null
	currentTrackNewAudio: any
	isPlay: boolean
	loadingAllTracks: boolean 
	volime: number
	currentTimeTrack: string
	timeTrack: string 
	keyInAllTracksCurrent: number
	currentGenre: string 
	currentArtist: string
	favoriteTracks: ITrack[] | []
	newPlaylist: ITrack[] | []
	playlists: any[] | []
	playlistNameInput: string
	playlistView: boolean
	currentPlayList: any
	loading: boolean
}
export enum TracksActionsTypes {
	SET_LOADING = 'SET_LOADING',
	SET_CURRENT_PLAYLIST = 'SET_CURRENT_PLAYLIST',
	SET_PLAYLIST_VIEW = 'SET_PLAYLIST_VIEW',
	SET_PLAYLIST_NAME_INPUT = 'SET_PLAYLIST_NAME_INPUT',
	SET_NEW_PLAYLIST = 'SET_NEW_PLAYLIST',
	SET_PLAYLISTS = 'SET_PLAYLISTS',
	SET_FAVORITIES_TRACKS = 'SET_FAVORITIES_TRACKS',
	SET_CURRENT_ARTIST = 'SET_CURRENT_ARTIST',
	SET_CURRENT_TRACK_NEW_AUDIO = 'SET_CURRENT_TRACK_NEW_AUDIO',
	SET_CURRENT_GENRE = 'SET_CURRENT_GENRE',
	SET_KEY = 'SET_KEY',
	SET_ALL_TRACKS = 'SET_ALL_TRACKS',
	SET_CURRENT_TRACK = 'SET_CURRENT_TRACK',
	SET_IS_PLAY = 'SET_IS_PLAY',
	SET_LOADING_ALL_TRACKS = 'SET_LOADING_ALL_TRACKS',
	SET_VOLIME = 'SET_VOLIME',
	SET_CURRENT_TIME_TRACK = 'SET_CURRENT_TIME_TRACK',
	SET_TIME_TRACK = 'SET_TIME_TRACK'
}
interface setLoading {
	type: TracksActionsTypes.SET_LOADING
	payload: boolean
}
interface setCurrentPlaylist {
	type: TracksActionsTypes.SET_CURRENT_PLAYLIST
	payload: any
}
interface setPlaylistView {
	type: TracksActionsTypes.SET_PLAYLIST_VIEW
	payload: boolean
}
interface setPlaylistNameInput {
	type: TracksActionsTypes.SET_PLAYLIST_NAME_INPUT
	payload: string
}
interface setNewPlaylist {
	type: TracksActionsTypes.SET_NEW_PLAYLIST
	payload: ITrack[]
}
interface setPlaylists {
	type: TracksActionsTypes.SET_PLAYLISTS
	payload: any[]
}
interface setFavoritiesTracks {
	type: TracksActionsTypes.SET_FAVORITIES_TRACKS
	payload: ITrack[]
}
interface setCurrentArtist {
	type: TracksActionsTypes.SET_CURRENT_ARTIST
	payload: string
}
interface setCurrentGenre {
	type: TracksActionsTypes.SET_CURRENT_GENRE
	payload: string
}
interface setKey {
	type: TracksActionsTypes.SET_KEY
	payload: number
}
interface setCurrentTrackNewAudio {
	type: TracksActionsTypes.SET_CURRENT_TRACK_NEW_AUDIO
	payload: ITrack | null
}
interface setAllTracks {
	type: TracksActionsTypes.SET_ALL_TRACKS
	payload: any[]
}
interface setCurrentTrack {
	type: TracksActionsTypes.SET_CURRENT_TRACK
	payload: any
}
interface setIsPlay {
	type: TracksActionsTypes.SET_IS_PLAY
	payload: boolean
}
interface setLoadingAllTracks {
	type: TracksActionsTypes.SET_LOADING_ALL_TRACKS
	payload: boolean
}
interface setVolume {
	type: TracksActionsTypes.SET_VOLIME
	payload: number
}
interface setCurrentTimeTrack {
	type: TracksActionsTypes.SET_CURRENT_TIME_TRACK
	payload: string
}
interface setTimeTrack {
	type: TracksActionsTypes.SET_TIME_TRACK
	payload: string
}
export type trackActions = setAllTracks | setCurrentTrack | setIsPlay
| setLoadingAllTracks | setVolume | setCurrentTimeTrack
| setTimeTrack | setCurrentTrackNewAudio | setKey
| setCurrentGenre | setCurrentArtist | setFavoritiesTracks
| setPlaylists | setNewPlaylist | setPlaylistNameInput
| setPlaylistView | setCurrentPlaylist | setLoading