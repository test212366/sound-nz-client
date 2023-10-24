import { trackActions, TracksActionsTypes, TracksState } from "../../types/tracks"

const initinalState:TracksState = {
	allTracks: [],
	currentTimeTrack: '',
	favoriteTracks: [],
	timeTrack: '',
	currentTrack: null,
	isPlay: false,
	loadingAllTracks: false,
	currentTrackNewAudio: null,
	volime: 0,
	keyInAllTracksCurrent: -1,
	currentGenre: '',
	currentArtist: '',
	newPlaylist: [],
	playlists: [{name: 'generated', playlists: [
		{
			imgSRC: 'https://lastfm.freetls.fastly.net/i/u/avatar170s/ecbdeb2afeab1e29698b6bcf90c05a5f',
			name: 'Natural',
			groupName: 'Imagine Dragons',
			timeTrack: '3:11',
			isLike: false,
			trackSRC: 'https://res.cloudinary.com/diny9etcf/video/upload/v1661611556/Imagine_Dragons_-_Natural_megasongs.me_a7ytnn.mp3'
		},
		{
			imgSRC: 'https://www.classicalmusicnews.ru/wp-content/uploads/2014/03/klassicheskaya-muzyika.jpg',
			name: 'Fantazy',
			groupName: 'Chopin',
			timeTrack: "5:38",
			isLike: false,
			trackSRC: 'https://res.cloudinary.com/diny9etcf/video/upload/v1661772299/%D0%A4%D1%80%D0%B8%D0%B4%D0%B5%D1%80%D0%B8%D0%BA_%D0%A8%D0%BE%D0%BF%D0%B5%D0%BD_-_%D0%A4%D0%B0%D0%BD%D1%82%D0%B0%D0%B7%D0%B8%D1%8F-%D1%8D%D0%BA%D1%81%D0%BF%D1%80%D0%BE%D0%BC%D1%82_%D0%B4%D0%BE-%D0%B4%D0%B8%D0%B5%D0%B7-%D0%BC%D0%B8%D0%BD%D0%BE%D1%80_%D0%B0%D1%80%D1%84%D0%B0_megasongs.me_od61dk.mp3'
		}
	]}],
	playlistNameInput: '',
	playlistView: false,
	currentPlayList: null,
	loading: false
}
export const trackReducer = (state: TracksState = initinalState, action: trackActions):TracksState => {
	switch (action.type) {
		case TracksActionsTypes.SET_LOADING:
			return {...state, loading: action.payload}
		case TracksActionsTypes.SET_CURRENT_PLAYLIST: 
			return {...state, currentPlayList: action.payload}
		case TracksActionsTypes.SET_PLAYLIST_VIEW:
			return {...state, playlistView: action.payload}
		case TracksActionsTypes.SET_PLAYLIST_NAME_INPUT:
			return {...state, playlistNameInput: action.payload}
		case TracksActionsTypes.SET_NEW_PLAYLIST:
			return {...state, newPlaylist: action.payload}
		case TracksActionsTypes.SET_PLAYLISTS:
			return {...state, playlists: action.payload}
		case TracksActionsTypes.SET_FAVORITIES_TRACKS:
			return {...state, favoriteTracks: action.payload}
		case TracksActionsTypes.SET_CURRENT_ARTIST:
			return {...state, currentArtist: action.payload}
		case TracksActionsTypes.SET_CURRENT_GENRE:
			return {...state, currentGenre: action.payload} 
		case TracksActionsTypes.SET_KEY:
			return {...state, keyInAllTracksCurrent: action.payload}
		case TracksActionsTypes.SET_CURRENT_TRACK_NEW_AUDIO:
			return {...state, currentTrackNewAudio: action.payload}
		case TracksActionsTypes.SET_IS_PLAY:
			return {...state, isPlay: action.payload}
		case TracksActionsTypes.SET_ALL_TRACKS:
			return {...state, allTracks: action.payload}
		case TracksActionsTypes.SET_CURRENT_TIME_TRACK:
			return {...state, currentTimeTrack: action.payload}
		case TracksActionsTypes.SET_TIME_TRACK: 
			return {...state, timeTrack: action.payload}
		case TracksActionsTypes.SET_VOLIME:
			return {...state, volime: action.payload}
		case TracksActionsTypes.SET_LOADING_ALL_TRACKS:
			return {...state, loadingAllTracks: action.payload}
		case TracksActionsTypes.SET_CURRENT_TRACK:
			return {...state, currentTrack: action.payload}
		default: 
			return state
	}
}