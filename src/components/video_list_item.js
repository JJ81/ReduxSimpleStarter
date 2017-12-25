import React from 'react';

// ()안에처럼 설정하면 그 바로 하단에 선언을 할 필요가 없다. ES6
const VideoListItem = ({ video, onVideoSelect }) => {
	// const video = props.video;
	//console.log(video);
	
	
	const imageUrl = video.snippet.thumbnails.default.url;
	
	return (
		<li className="list-group-item" onClick={() => onVideoSelect(video)}>
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl} />
				</div>
				
				<div className="media-body">
					<div className="media-heading">
						{video.snippet.title}
					</div>
				</div>
			</div>
		</li>
	);
};

export default VideoListItem;