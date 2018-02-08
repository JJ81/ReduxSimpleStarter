import React from 'react';

const VideoDetail = ({video}) => {
	// 데이터를 가져오기 전에 표시를 하고 데이터가 있을 경우 바인딩할 수 있도록 한다.
	if(!video){
		return <div>Loading...</div>;
	}
	
	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;
	
	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" frameBorder="0" src={url}></iframe>
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
};

export default VideoDetail;