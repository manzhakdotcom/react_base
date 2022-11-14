import React, { useEffect, useState } from 'react';
import PostService from './API/PostService';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import Loader from './components/UI/Loader/Loader';
import MyModal from './components/UI/MyModal/MyModal';
import { useFetching } from './hooks/useFetching';
import { usePosts } from './hooks/usePost';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll();
    setPosts(response.data);
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = newPost => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  return (
    <div className='App'>
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} handlerFilter={setFilter} />
      {postError && <h1>Произошла ошибка {postError}</h1>}
      {isPostsLoading ? (
        <Loader />
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title='Список постов'
        />
      )}
    </div>
  );
}

export default App;
