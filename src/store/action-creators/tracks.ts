import { Dispatch } from "react"
import { ITrack, trackActions, TracksActionsTypes } from "../../types/tracks"

const getTracks = async (filter: string, getName: string) => {
	try {
		 
		const responce = await fetch(`https://soundnznode.herokuapp.com/api/track/${getName}`, {
			headers: {'Content-type': 'application/json'},
			body: JSON.stringify({filter}),
			method: "POST"
		}),
			data = await responce.json()
	 
			return data
	} catch(e) {
		console.log(e)
	}

}

export const getMainTracks = (nameGenre: string, currentGenre?: string, currentArtist?:string) => (dispatch: Dispatch<trackActions>) => {
	if(currentGenre && nameGenre === currentGenre ||  nameGenre === currentArtist) return
	dispatch({type: TracksActionsTypes.SET_CURRENT_GENRE, payload: nameGenre})
	dispatch({type: TracksActionsTypes.SET_ALL_TRACKS, payload:[]})
	dispatch({type: TracksActionsTypes.SET_LOADING, payload: true})
	try {
		 
		switch(nameGenre) {
			case("Main"):
				return  ( async () => {
					const responce = await fetch('https://soundnznode.herokuapp.com/api/track/getTrackMain'),
						data = await responce.json()				 
						dispatch({type: TracksActionsTypes.SET_ALL_TRACKS, payload:data})
						dispatch({type: TracksActionsTypes.SET_LOADING, payload: false})
					})()
			case('Classical music'):
					return ( async () => {
							const data = await getTracks(nameGenre, 'getGenre')
							dispatch({type: TracksActionsTypes.SET_ALL_TRACKS, payload:data})
							dispatch({type: TracksActionsTypes.SET_LOADING, payload: false})
						})()
				 
			case('Jazz'):
				return ( async () => {
					const data = await getTracks(nameGenre, 'getGenre')
					dispatch({type: TracksActionsTypes.SET_ALL_TRACKS, payload:data})
					dispatch({type: TracksActionsTypes.SET_LOADING, payload: false})
			})()
			case("Author's songs"):
				return ( async () => {
					const data = await getTracks(nameGenre, 'getGenre')
					dispatch({type: TracksActionsTypes.SET_ALL_TRACKS, payload:data})
					dispatch({type: TracksActionsTypes.SET_LOADING, payload: false})
				})()
			case('Pop music'):
			 
				return ( async () => {
					const data = await getTracks(nameGenre, 'getGenre')
					dispatch({type: TracksActionsTypes.SET_ALL_TRACKS, payload:data})
					dispatch({type: TracksActionsTypes.SET_LOADING, payload: false})
				})()
			case('Disco'):
				return ( async () => {
					const data = await getTracks(nameGenre, 'getGenre')
					dispatch({type: TracksActionsTypes.SET_ALL_TRACKS, payload:data})
					dispatch({type: TracksActionsTypes.SET_LOADING, payload: false})
				})()
				case('Rap'):
					return ( async () => {
						const data = await getTracks(nameGenre, 'getGenre')
						dispatch({type: TracksActionsTypes.SET_ALL_TRACKS, payload:data})
						dispatch({type: TracksActionsTypes.SET_LOADING, payload: false})
					})()
				case('Trance music'):
					return ( async () => {
						const data = await getTracks(nameGenre, 'getGenre')
						dispatch({type: TracksActionsTypes.SET_ALL_TRACKS, payload:data})
						dispatch({type: TracksActionsTypes.SET_LOADING, payload: false})
				})()
				case('Electronic music'):
					return ( async () => {
						const data = await getTracks(nameGenre, 'getGenre')
						dispatch({type: TracksActionsTypes.SET_ALL_TRACKS, payload:data})
						dispatch({type: TracksActionsTypes.SET_LOADING, payload: false})
					})()
				case('Imagine Dragons'): 
						return ( async () => {
							const data = await getTracks(nameGenre, 'getTracksArtist')
							dispatch({type: TracksActionsTypes.SET_ALL_TRACKS, payload:data})
							dispatch({type: TracksActionsTypes.SET_LOADING, payload: false})
					})()
				case('MORGENSHTERN'):
					return ( async () => {
						const data = await getTracks(nameGenre, 'getTracksArtist')
						dispatch({type: TracksActionsTypes.SET_ALL_TRACKS, payload:data})
						dispatch({type: TracksActionsTypes.SET_LOADING, payload: false})
				})()
				case('GONE.Fludd'):
					return ( async () => {
						const data = await getTracks(nameGenre, 'getTracksArtist')
						dispatch({type: TracksActionsTypes.SET_ALL_TRACKS, payload:data})
						dispatch({type: TracksActionsTypes.SET_LOADING, payload: false})
				})()
				case('Michael Jackson'):
					return ( async () => {
						const data = await getTracks(nameGenre, 'getTracksArtist')
						dispatch({type: TracksActionsTypes.SET_ALL_TRACKS, payload:data})
						dispatch({type: TracksActionsTypes.SET_LOADING, payload: false})
					})()	
				case('Twenty One Pilots'):
					return ( async () => {
						const data = await getTracks(nameGenre, 'getTracksArtist')
						dispatch({type: TracksActionsTypes.SET_ALL_TRACKS, payload:data})
						dispatch({type: TracksActionsTypes.SET_LOADING, payload: false})
				})()
				case('ID-Evolve'):
					return ( async () => {
						const data = await getTracks(nameGenre, 'getTracksAlbums')
						dispatch({type: TracksActionsTypes.SET_ALL_TRACKS, payload:data})
						dispatch({type: TracksActionsTypes.SET_LOADING, payload: false})
				})()
					
				case('ID-Origins'):
					return ( async () => {
						const data = await getTracks(nameGenre, 'getTracksAlbums')
						dispatch({type: TracksActionsTypes.SET_ALL_TRACKS, payload:data})
						dispatch({type: TracksActionsTypes.SET_LOADING, payload: false})
					})()
				case('ID-Beliver'):
					return ( async () => {
						const data = await getTracks(nameGenre, 'getTracksAlbums')
						dispatch({type: TracksActionsTypes.SET_ALL_TRACKS, payload:data})
						dispatch({type: TracksActionsTypes.SET_LOADING, payload: false})
					})()
				case('ID-Rock'):
						return ( async () => {
							const data = await getTracks(nameGenre, 'getTracksAlbums')
							dispatch({type: TracksActionsTypes.SET_ALL_TRACKS, payload:data})
							dispatch({type: TracksActionsTypes.SET_LOADING, payload: false})
					})()
				case('ID-Me-up'): 		
						return ( async () => {
							const data = await getTracks(nameGenre, 'getTracksAlbums')
							dispatch({type: TracksActionsTypes.SET_ALL_TRACKS, payload:data})
							dispatch({type: TracksActionsTypes.SET_LOADING, payload: false})
					})()
				case('ID-warriors'):
						return ( async () => {
							const data = await getTracks(nameGenre, 'getTracksAlbums')
							dispatch({type: TracksActionsTypes.SET_ALL_TRACKS, payload:data})
							dispatch({type: TracksActionsTypes.SET_LOADING, payload: false})
					})()
				case('ID-Mercury'):
						return ( async () => {
							const data = await getTracks(nameGenre, 'getTracksAlbums')
							dispatch({type: TracksActionsTypes.SET_ALL_TRACKS, payload:data})
							dispatch({type: TracksActionsTypes.SET_LOADING, payload: false})
						})()
				case('MOR-Million-Dollar'):
						return ( async () => {
							const data = await getTracks(nameGenre, 'getTracksAlbums')
							dispatch({type: TracksActionsTypes.SET_ALL_TRACKS, payload:data})
							dispatch({type: TracksActionsTypes.SET_LOADING, payload: false})
					})()
				case('MOR-Pl'):
						return ( async () => {
							const data = await getTracks(nameGenre, 'getTracksAlbums')
							dispatch({type: TracksActionsTypes.SET_ALL_TRACKS, payload:data})
							dispatch({type: TracksActionsTypes.SET_LOADING, payload: false})
						})()
				case('MOR-DF'):
						return ( async () => {
							const data = await getTracks(nameGenre, 'getTracksAlbums')
							dispatch({type: TracksActionsTypes.SET_ALL_TRACKS, payload:data})
							dispatch({type: TracksActionsTypes.SET_LOADING, payload: false})
					})()
				case('MOR-Wataf'):
						return ( async () => {
							const data = await getTracks(nameGenre, 'getTracksAlbums')
							dispatch({type: TracksActionsTypes.SET_ALL_TRACKS, payload:data})
							dispatch({type: TracksActionsTypes.SET_LOADING, payload: false})
					})()
				case('MOR-Yung-Hefner'):
						return ( async () => {
							const data = await getTracks(nameGenre, 'getTracksAlbums')
							dispatch({type: TracksActionsTypes.SET_ALL_TRACKS, payload:data})
							dispatch({type: TracksActionsTypes.SET_LOADING, payload: false})
					})()
				case('MOR-SV'):
						return ( async () => {
							const data = await getTracks(nameGenre, 'getTracksAlbums')
							dispatch({type: TracksActionsTypes.SET_ALL_TRACKS, payload:data})
							dispatch({type: TracksActionsTypes.SET_LOADING, payload: false})
					})()
				case('GON-Boys-dont-cry'):
						return ( async () => {
							const data = await getTracks(nameGenre, 'getTracksAlbums')
							dispatch({type: TracksActionsTypes.SET_ALL_TRACKS, payload:data})
							dispatch({type: TracksActionsTypes.SET_LOADING, payload: false})
					})()
				case('GON-Super'):
						return ( async () => {
							const data = await getTracks(nameGenre, 'getTracksAlbums')
							dispatch({type: TracksActionsTypes.SET_ALL_TRACKS, payload:data})
							dispatch({type: TracksActionsTypes.SET_LOADING, payload: false})
					})()
				case('GON-Moon'):
						return ( async () => {
							const data = await getTracks(nameGenre, 'getTracksAlbums')
							dispatch({type: TracksActionsTypes.SET_ALL_TRACKS, payload:data})
							dispatch({type: TracksActionsTypes.SET_LOADING, payload: false})
					})()
				case('GON-TwoView'):
						return ( async () => {
							const data = await getTracks(nameGenre, 'getTracksAlbums')
							dispatch({type: TracksActionsTypes.SET_ALL_TRACKS, payload:data})
							dispatch({type: TracksActionsTypes.SET_LOADING, payload: false})
					})()
				case('GON-Lil-Chill'):
						return ( async () => {
							const data = await getTracks(nameGenre, 'getTracksAlbums')
							dispatch({type: TracksActionsTypes.SET_ALL_TRACKS, payload:data})
							dispatch({type: TracksActionsTypes.SET_LOADING, payload: false})
						})()
				case('GON-3D-cat'):
						return ( async () => {
							const data = await getTracks(nameGenre, 'getTracksAlbums')
							dispatch({type: TracksActionsTypes.SET_ALL_TRACKS, payload:data})
							dispatch({type: TracksActionsTypes.SET_LOADING, payload: false})
					})()
				case('MIC-Fr'):
						return ( async () => {
							const data = await getTracks(nameGenre, 'getTracksAlbums')
							dispatch({type: TracksActionsTypes.SET_ALL_TRACKS, payload:data})
							dispatch({type: TracksActionsTypes.SET_LOADING, payload: false})
					})()
				case('MIC-SC'):
						return ( async () => {
							const data = await getTracks(nameGenre, 'getTracksAlbums')
							dispatch({type: TracksActionsTypes.SET_ALL_TRACKS, payload:data})
							dispatch({type: TracksActionsTypes.SET_LOADING, payload: false})
					})()
				case('MIC_TR'):
						return ( async () => {
							const data = await getTracks(nameGenre, 'getTracksAlbums')
							dispatch({type: TracksActionsTypes.SET_ALL_TRACKS, payload:data})
							dispatch({type: TracksActionsTypes.SET_LOADING, payload: false})
						})()
				case('MIC-FO'):
					return ( async () => {
						const data = await getTracks(nameGenre, 'getTracksAlbums')
						dispatch({type: TracksActionsTypes.SET_ALL_TRACKS, payload:data})
						dispatch({type: TracksActionsTypes.SET_LOADING, payload: false})
				})()
				case('MIC_FI'): 
						return ( async () => {
							const data = await getTracks(nameGenre, 'getTracksAlbums')
							dispatch({type: TracksActionsTypes.SET_ALL_TRACKS, payload:data})
							dispatch({type: TracksActionsTypes.SET_LOADING, payload: false})
					})()
				case('MIC_SI'):
						return ( async () => {
							const data = await getTracks(nameGenre, 'getTracksAlbums')
							dispatch({type: TracksActionsTypes.SET_ALL_TRACKS, payload:data})
							dispatch({type: TracksActionsTypes.SET_LOADING, payload: false})
					})()	
				case('MIC_SEV'):
						return ( async () => {
							const data = await getTracks(nameGenre, 'getTracksAlbums')
							dispatch({type: TracksActionsTypes.SET_ALL_TRACKS, payload:data})
							dispatch({type: TracksActionsTypes.SET_LOADING, payload: false})
					})()
			}
	} catch(e) {
		console.log(e)
	}
 
	},
	setCurrentArtist = (name: string) => (dispatch: Dispatch<trackActions>) => dispatch({type: TracksActionsTypes.SET_CURRENT_ARTIST, payload: name}),
	setIsPlay = (play: boolean) => (dispatch: Dispatch<trackActions>) => dispatch({type: TracksActionsTypes.SET_IS_PLAY, payload: play}),
	setCurrentTrack = (track: ITrack) => (dispatch: Dispatch<trackActions>) => {
		dispatch({type: TracksActionsTypes.SET_CURRENT_TRACK_NEW_AUDIO, payload: null})
		dispatch({type: TracksActionsTypes.SET_CURRENT_TRACK, payload: track})
	}  ,
	setCurrentTrackAudio = (track: any) => (dispatch: Dispatch<trackActions>) => dispatch({type: TracksActionsTypes.SET_CURRENT_TRACK_NEW_AUDIO, payload: track}),
	setTimeTrack = (time: string) => (dispatch: Dispatch<trackActions>) => dispatch({type: TracksActionsTypes.SET_TIME_TRACK, payload: time}),
	setCurrentTime = (time: string) => (dispatch: Dispatch<trackActions>) => dispatch({type: TracksActionsTypes.SET_CURRENT_TIME_TRACK, payload: time}),
	setKey = (num: number) => (dispatch: Dispatch<trackActions>) => dispatch({type: TracksActionsTypes.SET_KEY, payload: num}),
	likeTrack = (track: ITrack, tracksLiked:ITrack[]) => (dispatch: Dispatch<trackActions>) => {
		localStorage.setItem('liked', JSON.stringify([track, ...tracksLiked]))
		dispatch({type: TracksActionsTypes.SET_FAVORITIES_TRACKS, payload: [track, ...tracksLiked]})
	},
	viewLikedTracks = (favoritiesTracks: ITrack[]) => (dispatch: Dispatch<trackActions>) => dispatch({type: TracksActionsTypes.SET_ALL_TRACKS, payload: favoritiesTracks}),
	setNewPlaylist = (track: ITrack, tracks:ITrack[]) => (dispatch: Dispatch<trackActions>) => dispatch({type: TracksActionsTypes.SET_NEW_PLAYLIST, payload: [track, ...tracks]}),
	setNamePlaylistInp = (name: string) => (dispatch: Dispatch<trackActions>) => dispatch({type: TracksActionsTypes.SET_PLAYLIST_NAME_INPUT, payload: name}),
	setPlaylist = (name: string, playlistNew: ITrack[], playlistOld: ITrack[], userName?: string) => async (dispatch: Dispatch<trackActions>) => {
		if(name.length === 0) return
		try {
			dispatch({type: TracksActionsTypes.SET_PLAYLISTS, payload: [{name, playlists: playlistNew}, ...playlistOld]})
			dispatch({type: TracksActionsTypes.SET_NEW_PLAYLIST, payload: []})
			dispatch({type: TracksActionsTypes.SET_PLAYLIST_VIEW, payload: false})
			dispatch({type: TracksActionsTypes.SET_PLAYLIST_NAME_INPUT, payload: ''})
			 
			if(userName) {
				await fetch('https://soundnznode.herokuapp.com/api/user/setPlaylist', {
					headers: {'Content-type': 'application/json'},
					method: "POST",
					body: JSON.stringify({name: userName, playlists: [{name, playlists: playlistNew}, ...playlistOld]})  
				})
	
			}
		 
		} catch(e) {
			console.log(e)
		}
		 	},
	setViewPlaylist = (view: boolean) => (dispatch: Dispatch<trackActions>) => {
		dispatch({type: TracksActionsTypes.SET_PLAYLIST_VIEW, payload: view})
		if(view === false) dispatch({type: TracksActionsTypes.SET_CURRENT_PLAYLIST, payload: null})
		 
	}  ,
	seePlayList = (playlist: any) => (dispatch: Dispatch<trackActions>) => {
		dispatch({type: TracksActionsTypes.SET_CURRENT_PLAYLIST, payload: playlist})
		dispatch({type: TracksActionsTypes.SET_PLAYLIST_VIEW, payload: true})
	}
 