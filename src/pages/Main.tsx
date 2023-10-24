import { useEffect, useRef } from "react"
import { NavLink } from "react-router-dom"
 
 
import Track from "../components/Track"
import { useActions, useTypeSelector } from "../hooks/redux"
import { ITrack } from "../types/tracks"
import { albums } from "../utils/routes"

 const Main = () => {
	const {allTracks, playlistView, loading} = useTypeSelector(state => state.tracks),
		{getMainTracks, setIsViewNav} = useActions(),
		image = useRef<HTMLImageElement>(null)

	useEffect(() => {
		if(!playlistView) getMainTracks("Main")
	}, [playlistView])
	
	useEffect(() => {
		setIsViewNav(false)
	}, [])
 
	const setCurrentAlbum = (name: string) => {
		getMainTracks(name)
		image.current?.scrollIntoView({
			behavior: 'smooth'
		})
	}  
	return (
		<section className="main">
			 
			<div className="main__wrapper">
			 		<div className="main__photo-group">
						 <img className="photo-group" ref={image} src="https://allaboutmusic.pl/wp-content/uploads/2022/03/imagine-dragons-2022.jpg" alt="photoGroup" />
						 <div className="main__photo-name"   >Imagine Dragons</div>
							<div className="wrapper__icon-photo">
									<img src="https://lastfm.freetls.fastly.net/i/u/avatar170s/ecbdeb2afeab1e29698b6bcf90c05a5f" alt="iconGroup" />
								</div>
								<button className="play__group">
									Play
								</button>
								<NavLink className='link' to='/artists'>
									<button className="view__all">
										View All
									</button>	
								</NavLink>
								 	
					</div>
					<article className="news">
					<div className="main__all-musics">
						<div className="wrapper__main-title">
							<p className="main__title">Musics</p>
							<NavLink className='link' to='/genres'>
								<p className="main__showAll">Show all</p>
							</NavLink>

						</div>
						{loading && <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
						{ allTracks.map((track: ITrack, i: number) => <Track key={i} Ikey={i} trackSRC={track.trackSRC} groupName={track.groupName} imgSRC={track.imgSRC} isLike={track.isLike} name={track.name} timeTrack={track.timeTrack} />)}				
					</div>
			 
				 
					<section className="main__videos">
							<div className="wrapper__main-title">
								<p className="main__title">Videos</p>
								<p className="main__showAll">Imagine Dragons</p>
							</div>
							<a href="https://www.youtube.com/watch?v=0I647GU3Jsc" target='_blank' className="link">
							<div className="main__videos-item">
								<div className="main__videos-item-desc">
									<img src="https://cdns-images.dzcdn.net/images/cover/974997a0db8d1d0c2de1ebde4275997f/264x264.jpg" alt="videoPic" />
									<div className="descVideo">
											<p className="video-item-title">
												Natural
											</p>
											<p className="video-item-chanel">
												Imagine Dragons
											</p>
									</div>
									 
								</div>
								<div className="shareTrack">
									<div className="shareTrackItem"></div>
									<div className="shareTrackItem"></div>
									<div className="shareTrackItem"></div>
								</div>
							</div>
							</a>
							<a href="https://youtu.be/7wtfhZwyrcc" target='_blank' className="link">
									<div className="main__videos-item">
										<div className="main__videos-item-desc">
											<img src="https://m.buro247.ua/images/2017/02/640_imagine-dragons-believer.jpg" alt="videoPic" />
											<div className="descVideo">
													<p className="video-item-title">
														Believer
													</p>
													<p className="video-item-chanel">
														Imagine Dragons
													</p>
											</div>
											
										</div>
										<div className="shareTrack">
											<div className="shareTrackItem"></div>
											<div className="shareTrackItem"></div>
											<div className="shareTrackItem"></div>
										</div>
									</div>
							</a>
							<a href="https://youtu.be/D9G1VOjN_84" target='_blank' className="link">
								<div className="main__videos-item">
									<div className="main__videos-item-desc">
										<img src="https://cdn.vox-cdn.com/thumbor/8Y9nalgUamWk5NTP2Zer1-tcsio=/177x0:1737x817/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22963154/Screen_Shot_2021_10_28_at_11.18.32_AM.png" alt="videoPic" />
										<div className="descVideo">
												<p className="video-item-title">
													Enemy
												</p>
												<p className="video-item-chanel">
													Imagine Dragons
												</p>
										</div>
										
									</div>
									<div className="shareTrack">
										<div className="shareTrackItem"></div>
										<div className="shareTrackItem"></div>
										<div className="shareTrackItem"></div>
									</div>
								</div>
							</a>
							 
				 </section>
				 
					</article>
					
					<div className="albumes">
						 
					<div className="wrapper__main-title">
								<p className="main__title">Albumes</p>
								<p className="main__showAll">Show All</p>
							</div>
							
							<div className="wrapper__alb">
							{albums[0].albumes.map((alb:any, i:number) => <div onClick={() => setCurrentAlbum(alb.name)} key={i} className="albumes__item">
						<img src={alb.imgSRC} alt="albumPh" />
						<div className="albumes__desc">
							View
						</div>
					</div>)}
					 
					</div>
				 
					 
				 </div>
			 </div>
			  
		</section>
	)
 }
 export default Main