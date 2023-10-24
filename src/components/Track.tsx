 
import { FC, useEffect, useState } from "react"
import { useActions, useTypeSelector } from "../hooks/redux"
 
interface TrackProps  {
	groupName: string
	imgSRC: string
	isLike: boolean
	name: string
	timeTrack:string
	trackSRC: string
	Ikey: number
	isPlayList?:boolean
	isLiked?:boolean
}
 
const Track:FC<TrackProps> = ({groupName, imgSRC, isLike,isLiked,name,timeTrack, trackSRC, Ikey, isPlayList}) => {
	const {setCurrentTrack, setKey, setIsPlay, likeTrack, setNewPlaylist} = useActions(),
		{currentTrack, currentTrackNewAudio, favoriteTracks, newPlaylist} = useTypeSelector(state => state.tracks),
		[like, setLike] = useState<boolean>(false)

	useEffect(() => {
		if(isLiked) setLike(true)
	}, [])


	const setTrack = () => {
				currentTrackNewAudio && currentTrackNewAudio.pause()
				if(isPlayList) {
					setLike(true)
					setNewPlaylist({groupName, imgSRC, trackSRC, timeTrack, name, isLike}, newPlaylist)
				} else {
					setIsPlay(false)
					setKey(Ikey)
					setCurrentTrack({groupName, imgSRC, trackSRC, timeTrack, name, isLike})
				}
		 
	},
		likeTr = (e: any) => {
			if(like) return 
			e.stopPropagation()
			setLike(true)
			likeTrack({groupName, imgSRC, isLike,name,timeTrack, trackSRC}, favoriteTracks )
		}
	
	return (
					<div className={["main__track", currentTrack?.name === name ? "activeTrack" : '' ].join(' ')} onClick={setTrack}>
							<div className="desc">
								<img src={imgSRC} alt="photoTrack" />
								<p className="track__name">{name}</p>
							</div>
							<p className="week">{groupName}</p>
							<div className="main__navig">
								<p>{timeTrack}</p>
								<div className={["addFavorite", like ? 'liked' : ""].join(' ')} onClick={(e: any) => likeTr(e)}>
									<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
											width="20px" height="20px" viewBox="0 0 343.422 343.422"  >
										<g>
											<g id="Artwork_15_">
												<g id="Layer_5_15_">
													<path d="M254.791,33.251c-46.555,0-76.089,51.899-83.079,51.899c-6.111,0-34.438-51.899-83.082-51.899
														c-47.314,0-85.947,39.021-88.476,86.27c-1.426,26.691,7.177,47.001,19.304,65.402c24.222,36.76,130.137,125.248,152.409,125.248
														c22.753,0,127.713-88.17,152.095-125.247c12.154-18.483,20.731-38.711,19.304-65.402
														C340.738,72.272,302.107,33.251,254.791,33.251"/>
												</g>
											</g>
										</g>
										<g>
										</g>
										<g>
										</g>
										<g>
										</g>
										<g>
										</g>
										<g>
										</g>
										<g>
										</g>
										<g>
										</g>
										<g>
										</g>
										<g>
										</g>
										<g>
										</g>
										<g>
										</g>
										<g>
										</g>
										<g>
										</g>
										<g>
										</g>
										<g>
										</g>
									</svg>
								</div>
								<div className="shareTrack">
									<div className="shareTrackItem"></div>
									<div className="shareTrackItem"></div>
									<div className="shareTrackItem"></div>
								</div>
							</div>
						</div>
	) 
}
export default Track