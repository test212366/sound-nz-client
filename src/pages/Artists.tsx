import { useEffect, useRef } from "react"
import Track from "../components/Track"
import { useActions, useTypeSelector } from "../hooks/redux"
import { ITrack } from "../types/tracks"
import { artists } from "../utils/routes"

const Artists = () => {
	const {allTracks, currentArtist, playlistView, loading} = useTypeSelector(state => state.tracks),
	 {getMainTracks, setCurrentArtist, setIsViewNav} = useActions(),
	 tracks = useRef<HTMLParagraphElement>(null)

	 useEffect(() => {
		setIsViewNav(false)
	}, [])

	useEffect(() => {
		if(!playlistView) {
			getMainTracks('Imagine Dragons', '', currentArtist )
			setCurrentArtist('Imagine Dragons')
			} 
		 
		 
	}, [playlistView])

	const setCurrentArt = (name: string) => {
		getMainTracks(name, '', currentArtist )
		setCurrentArtist(name)
		tracks.current?.scrollIntoView({behavior: 'smooth'})
	} 

	return (
		<section className="main">
			
			<div className="main__wrapper">
					<p className="genres__title">Artists</p>
					{artists.map((art:any, i:number) => <div key={i} onClick={() => setCurrentArt(art.name)} className={["main__photo-group mb-3", art.name === currentArtist ? 'activeA' : "" ].join(' ')}>
						 <img className="photo-group artistsIMG" src={art.imgSRC} alt="photoGroup" />
						 <div className="main__photo-name artistsDesc">{art.name}</div>
							 
								<button className="play__group artistsDesc">
									Play
								</button>
								<button className="view__all artistsDesc">
									View All
								</button>		
					</div>)}
					 
					 
					<div className="resutlts__mus">
						<p ref={tracks} className="results-title">{currentArtist}</p>
						{allTracks.map((track: ITrack, i: number) => <Track key={i} Ikey={i} trackSRC={track.trackSRC} groupName={track.groupName} imgSRC={track.imgSRC} isLike={track.isLike} name={track.name} timeTrack={track.timeTrack} />)}
						{loading && <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
					</div>

			</div>
		</section>
	)
}
export default Artists