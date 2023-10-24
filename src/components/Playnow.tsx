import { ChangeEvent, useEffect, useState } from "react"
import { useActions, useTypeSelector } from "../hooks/redux"

const Playnow = () => {
	const {currentTrack, currentTrackNewAudio, isPlay, currentTimeTrack, allTracks, keyInAllTracksCurrent} = useTypeSelector(state => state.tracks),
		{setCurrentTrackAudio, setIsPlay, setTimeTrack, setCurrentTime, setCurrentTrack, setKey} = useActions(),
		[stateValues, setStateValues] = useState<any>({audioRange: []  })
 
	useEffect(() => {
		 
		if(currentTrack?.trackSRC) {
	 		const mus = new Audio(currentTrack.trackSRC)
			mus.play()
			mus.volume = .5
			setCurrentTrackAudio(mus)
			mus.onloadedmetadata = () => {
				//@ts-ignore
				const minutes:any = "0"+parseInt(mus.duration / 60, 10)
				//@ts-ignore
            const seconds:any = "0"+parseInt(mus.duration % 60)
				setTimeTrack(minutes + ":" + seconds.slice(-2))
			}
			const str_pad_left = (string: any,pad: any,length: number) => (new Array(length+1).join(pad)+string).slice(-length)
			mus.ontimeupdate = () => {
					const minutes = Math.floor(mus.currentTime / 60),
						seconds = Math.floor(mus.currentTime - minutes * 60),
						currentTime = str_pad_left(minutes,'0',2) + ':' + str_pad_left(seconds,'0',2)
						setCurrentTime(currentTime)
						if(currentTime === currentTrack.timeTrack) next()
			}
		}
	}, [currentTrack])
	useEffect(() => {
		if(currentTrack?.trackSRC){
			let i
			if (stateValues.audioRange.length !== 26) for (i = 0; i < 26; i++) setStateValues({ ...stateValues, audioRange: [...stateValues.audioRange, { height: `${Math.floor(Math.random() * 40) + 2}px` }] })
		}
	}, [currentTrack, stateValues.audioRange]) 
	
	const setPlay = () => {
		isPlay ? currentTrackNewAudio.play() : currentTrackNewAudio.pause()
		setIsPlay(!isPlay)
	},
		setVolume = (e:ChangeEvent<any>) => currentTrackNewAudio.volume = e.target.value / 100,
		next = () => { 
			if(allTracks[keyInAllTracksCurrent + 1]) {
				currentTrackNewAudio.pause()
				setCurrentTrack(allTracks[keyInAllTracksCurrent + 1])
				setKey(keyInAllTracksCurrent + 1)
			}
		},
		unnnext = () => {
			if(allTracks[keyInAllTracksCurrent - 1]) {
				currentTrackNewAudio.pause()
				setCurrentTrack(allTracks[keyInAllTracksCurrent - 1])
				setKey(keyInAllTracksCurrent - 1)
			}
		}
	return (
		<section className={["playnow", currentTrack ? 'activeTr' : ""].join(' ')}>
			<div className="play">
				<button className="unnext" onClick={unnnext}>
				<svg  width='15px' height='15px'  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M810.666667 512a52.92 52.92 0 0 1-25.78 45.666667l-618.666667 373.28a53.333333 53.333333 0 0 1-80.886667-45.666667V138.72a53.333333 53.333333 0 0 1 80.886667-45.666667l618.666667 373.28A52.92 52.92 0 0 1 810.666667 512z m128 405.333333V106.666667a21.333333 21.333333 0 0 0-42.666667 0v810.666666a21.333333 21.333333 0 0 0 42.666667 0z"  /></svg>
				</button>
				<button className="setPlay" onClick={setPlay}>
					{!isPlay ? <svg width="27px" height="27px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path   d="M120.16 45A20.162 20.162 0 0 0 100 65.16v381.68A20.162 20.162 0 0 0 120.16 467h65.68A20.162 20.162 0 0 0 206 446.84V65.16A20.162 20.162 0 0 0 185.84 45h-65.68zm206 0A20.162 20.162 0 0 0 306 65.16v381.68A20.162 20.162 0 0 0 326.16 467h65.68A20.162 20.162 0 0 0 412 446.84V65.16A20.162 20.162 0 0 0 391.84 45h-65.68z"/></svg>
					 : <svg width='27px' height='27px' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
					 viewBox="0 0 460.114 460.114"  >
				<g>
					<g>
						<path d="M393.538,203.629L102.557,5.543c-9.793-6.666-22.468-7.372-32.94-1.832c-10.472,5.538-17.022,16.413-17.022,28.26v396.173
							c0,11.846,6.55,22.721,17.022,28.26c10.471,5.539,23.147,4.834,32.94-1.832l290.981-198.087
							c8.746-5.954,13.98-15.848,13.98-26.428C407.519,219.477,402.285,209.582,393.538,203.629z"/>
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
				 }
					 
				</button>
				<button className="next" onClick={next}>
				<svg  width='15px' height='15px'  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M810.666667 512a52.92 52.92 0 0 1-25.78 45.666667l-618.666667 373.28a53.333333 53.333333 0 0 1-80.886667-45.666667V138.72a53.333333 53.333333 0 0 1 80.886667-45.666667l618.666667 373.28A52.92 52.92 0 0 1 810.666667 512z m128 405.333333V106.666667a21.333333 21.333333 0 0 0-42.666667 0v810.666666a21.333333 21.333333 0 0 0 42.666667 0z"  /></svg>
				</button>
			</div>
			<div className="range">
				<p className="time">{currentTimeTrack || '00:00'}</p>
				<div className="range__items">
					{stateValues.audioRange.map((item: any, i: number) => <div key={i} style={item} className="range__item"></div>)}
				</div>
				<p className="time">{currentTrack?.timeTrack}</p>
			</div>
			<div className="volume">
			<div className="descVideo mr3">
											<p className="video-item-title">
												{currentTrack?.name}
											</p>
											<p className="video-item-chanel">
												{currentTrack?.groupName}
											</p>
									</div>
									 
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
			<svg viewBox="0 0 32 32" height='25px' width='25px' xmlns="http://www.w3.org/2000/svg"><title/><g data-name="Layer 2" id="Layer_2"><path d="M19.45,4.11a1,1,0,0,0-1,.09L10.67,10H3a1,1,0,0,0-1,1V21a1,1,0,0,0,1,1h7.67l7.73,5.8A1,1,0,0,0,20,27V5A1,1,0,0,0,19.45,4.11Z"/><path d="M23,12a1,1,0,0,0-1,1v6a1,1,0,0,0,2,0V13A1,1,0,0,0,23,12Z"/><path d="M26,10a1,1,0,0,0-1,1V21a1,1,0,0,0,2,0V11A1,1,0,0,0,26,10Z"/><path d="M29,8a1,1,0,0,0-1,1V23a1,1,0,0,0,2,0V9A1,1,0,0,0,29,8Z"/></g></svg>
				<input type="range" value={currentTrackNewAudio?.volume * 100 || 50} onChange={setVolume} max={100} min={0} />
			</div>
		</section>
	)
}
export default Playnow