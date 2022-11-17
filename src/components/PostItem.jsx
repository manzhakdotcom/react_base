import React from 'react';
import { useNavigate } from 'react-router-dom';
import MyButton from './UI/button/MyButton';

const PostItem = props => {
  let navigate = useNavigate();
  const router = () => {
    navigate(`posts/${props.post.id}`);
  };
  return (
    <div className='post'>
      <div className='post__content'>
        <strong className='post__title'>
          {props.post.id}. {props.post.title}
        </strong>
        <div className='post__content'>{props.post.body}</div>
      </div>
      <div className='post__btns'>
        <MyButton onClick={router}>Подробнее</MyButton>
      </div>
      <div className='post__btns'>
        <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
