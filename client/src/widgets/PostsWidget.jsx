import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setPosts} from '../state/index.js';
import PostWidget from './PostWidget.jsx';
import BaseLink from '../data/BaseLink.js';

const PostsWidget = ({userId, isProfile = false}) => {
	const dispatch = useDispatch();
	const posts = useSelector((state) => state.posts);
	const token = useSelector((state) => state.token);

	const getPosts = async () => {
		const response = await fetch(`${BaseLink}/posts`, {
			method: 'GET',
			headers: {Authorization: `Bearer ${token}`},
		});

		const data = await response.json();
		dispatch(setPosts({posts: data}));

		console.log(data);
	};

	const getUserPosts = async () => {
		const response = await fetch(
			`${BaseLink}/posts/${userId}/posts`,
			{
				method: 'GET',
				headers: {Authorization: `Bearer ${token}`},
			}
		);

		const data = await response.json();
		dispatch(setPosts({posts: data}));
	};

	useEffect(() => {
		console.log('hi');
		if (isProfile) {
			getUserPosts();
		} else {
			getPosts();
		}
	}, []); //eslint-disable-line react-hooks/exhaustive-deps

	return (
		<>
			{posts.map(
				({
					_id,
					userId,
					firstName,
					lastName,
					description,
					location,
					picturePath,
					userPicturePath,
					likes,
					comments,
				}) => (
					<PostWidget
						key={_id}
						postId={_id}
						postUserId={userId}
						name={`${firstName} ${lastName}`}
						description={description}
						location={location}
						picturePath={picturePath}
						userPicturePath={userPicturePath}
						likes={likes}
						comments={comments}
					/>
				)
			)}
		</>
	);
};

export default PostsWidget;
