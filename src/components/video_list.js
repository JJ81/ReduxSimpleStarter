import React from 'react';
import VideoListItem from './video_list_item';

// props -> 상위에서 데이터를 내려줌
const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		/** 리스트에는 각 리스트를 구분할 수 있도록 key를 설정해주어야 한다 */
		return (
			<VideoListItem
				onVideoSelect={props.onVideoSelect}
				key={video.etag}
				video={video} />
		);
	});
	
	return (
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	);
};

export default VideoList;