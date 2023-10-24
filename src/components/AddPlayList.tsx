import { ChangeEvent, useEffect } from "react"
import { useActions, useTypeSelector } from "../hooks/redux"
import { ITrack } from "../types/tracks"
import Track from "./Track"

const AddPlayList = () => {
	const {viewLikedTracks, setNamePlaylistInp, setPlaylist, setViewPlaylist} = useActions(),
		{favoriteTracks, allTracks, newPlaylist, playlistNameInput, playlists,currentPlayList, playlistView} = useTypeSelector(state => state.tracks),
		{user} = useTypeSelector(state => state.login)

 

	useEffect(() => {
		if(playlistView && !currentPlayList?.name) viewLikedTracks(favoriteTracks)
		else if(currentPlayList?.name) viewLikedTracks(currentPlayList.playlists)
	}, [playlistView, currentPlayList])

	const setName = (e: ChangeEvent<HTMLInputElement>) => setNamePlaylistInp(e.target.value),
		addPlaylist = () => setPlaylist(playlistNameInput, newPlaylist, playlists, user?.name),
		close = (e: any) => {
			if(e.target.className === 'addplaylist activePlay') setViewPlaylist(false)
		}
	 
	return (
		<section className={["addplaylist", playlistView ? 'activePlay' : ""].join(' ')} onClick={close}>
			<div className="wrapper__addplaylist">
				<p className="addplaylist__title">{currentPlayList?.name ? currentPlayList?.name : 'Add songs in new playlist'}</p>
				{!currentPlayList?.name && allTracks.length === 0 && <p className="favorities__none">None Favorite songs</p>}
				{allTracks.map((track: ITrack, i: number) => <Track key={i} isPlayList={!currentPlayList?.name ? true : false} Ikey={i} trackSRC={track.trackSRC} groupName={track.groupName} imgSRC={track.imgSRC} isLike={track.isLike} name={track.name} timeTrack={track.timeTrack} />)}
				{newPlaylist.length !== 0 && <div>
						<button className="button__addPlaylist" onClick={addPlaylist}>Add new playlist</button>
						<input value={playlistNameInput} onChange={setName} className="input__addPlaylist" type="text" placeholder="confirm playlist name"/>
					</div>}
			</div>
		</section>
	)
}
export default AddPlayList