import { useEffect, useRef } from "react"
import Track from "../components/Track"
import { useActions, useTypeSelector } from "../hooks/redux"
import { ITrack } from "../types/tracks"
import { albums } from "../utils/routes"

const Album = () => {
	const {allTracks, playlistView, loading} = useTypeSelector(state => state.tracks),
		{getMainTracks, setIsViewNav} = useActions(),
		results = useRef<HTMLParagraphElement>(null)

		useEffect(() => {
			setIsViewNav(false)
		}, [])
		useEffect(() => {
			if(!playlistView) getMainTracks('MOR-Million-Dollar')
		}, [playlistView])

	const setCurrentAlbum = (name: string) => {
		getMainTracks(name)
		results?.current?.scrollIntoView({behavior: 'smooth'})
	}  
	return (
		<section className="main">
			
			<div className="main__wrapper">
				<p className="genres__title">
					Album
				</p>
				{albums.map((album: any, i:number) => <div key={i} className="albums__lists">
					<div className="album__item">
						<p className="alb__title">{album.nameGroup}</p>
						<div className="albumes">
					<div className="wrapper__main-title">
								<p className="main__title albums__title">Albumes</p>
							 
							</div>
							<div className="wrapper__alb">
								{album.albumes.map((alb:any, i:number) => <div onClick={() => setCurrentAlbum(alb.name)} key={i} className="albumes__item">
						<img src={alb.imgSRC} alt="albumPh" />
						<div className="albumes__desc">
							View
						</div>
					</div>)}
							 
				 
					 
					 
					</div>
				 
					 
				 </div>
					</div>
				</div>)}
				 
				 
				<p className="alb__title mb-3" ref={results}>Results Tracks</p>
				<div className="wrapper_alb">
					{allTracks.map((track: ITrack, i: number) => <Track key={i} Ikey={i} trackSRC={track.trackSRC} groupName={track.groupName} imgSRC={track.imgSRC} isLike={track.isLike} name={track.name} timeTrack={track.timeTrack} />)}
					{loading && <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
				</div>
				 </div>
		</section>
		 
	)
}
export default Album