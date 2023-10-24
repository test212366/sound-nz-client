import { useEffect } from "react"
import Track from "../components/Track"
import { useActions, useTypeSelector } from "../hooks/redux"
import { ITrack } from "../types/tracks"
import { allGenres } from "../utils/routes"

const Genres = () => {
	const {allTracks, currentGenre, playlistView, loading} = useTypeSelector(state => state.tracks),
		{getMainTracks, setIsViewNav} = useActions()

 
		useEffect(() => {
			setIsViewNav(false)
		}, [])
	useEffect(() => {
		if(!playlistView) getMainTracks('Classical music')
	}, [playlistView])


	const setGenre = (genre: string) => getMainTracks(genre, currentGenre)
 	

	return (
		<section className="main">
			 
			<div className="main__wrapper genres__wrapper">
			 
				<div className="genres__lists">
				<p className="genres__title">
					Genres
				</p>
					<div className="genres__wrap-list">
						 
						{allGenres.map((genre: string, i:number) => <div key={i} onClick={() => setGenre(genre)} className={["genres__item", currentGenre === genre ? 'activeG' : ""].join(' ')}>
						{genre}
					</div>)}
					 
					</div>
					 
					 
				</div>	
				<div className="genres__track-list">
				{loading && <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
					{ allTracks.map((track: ITrack, i: number) => <Track key={i} Ikey={i} trackSRC={track.trackSRC} groupName={track.groupName} imgSRC={track.imgSRC} isLike={track.isLike} name={track.name} timeTrack={track.timeTrack} />)}
				</div>
			</div>
		</section>
	)
}
export default Genres