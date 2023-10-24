import { useEffect } from "react"
import Track from "../components/Track"
import { useActions, useTypeSelector } from "../hooks/redux"
import { ITrack } from "../types/tracks"

const Favorite = () => {
	const {allTracks, favoriteTracks, playlistView} = useTypeSelector(state => state.tracks),
		{viewLikedTracks, setIsViewNav} = useActions()

	
		useEffect(() => {
			setIsViewNav(false)
		}, [])

	useEffect(() => {
		if(!playlistView || favoriteTracks.length === 0 && localStorage.getItem('liked')) viewLikedTracks(favoriteTracks)
 	}, [playlistView, favoriteTracks])
	
	return (
		<section className="main">
			<div className="main__wrapper favorities">
				<p className="genres__title">
					Favorite
				</p>
				<div className="favorities__lists">
					{allTracks.length === 0 && <p className="favorities__none">None Favorite songs</p>}
					{allTracks.map((track: ITrack, i: number) => <Track isLiked={true} key={i} Ikey={i} trackSRC={track.trackSRC} groupName={track.groupName} imgSRC={track.imgSRC} isLike={track.isLike} name={track.name} timeTrack={track.timeTrack} />)}
				</div>
			</div>
		</section>
		 
	)
}
export default Favorite