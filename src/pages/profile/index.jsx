import React, { useEffect, useState } from 'react';
import { Button, Logo } from '../../components';
import '../../style/profile.css';
import data from './data';
import { host } from '../../constant';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const [posts, setPosts] = useState({});
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const nav = useNavigate();

  const getPosts = async () => {
    const response = await fetch(host + 'posts', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
      },
    });
    const json = await response.json();
    setPosts(json);
    console.log(json);
  };

  const getPostsWithParams = async () => {
    let url = host + 'posts?';
    if (!title) {
      if (!tags) {
        await getPosts();
        return;
      } else {
        url += 'tags=' + tags;
      }
    } else {
      url += 'title=' + title + (tags && '&tags=' + tags);
    }
    // console.log(url);
    const response = await fetch(url, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
      },
    });
    const json = await response.json();
    console.log(json);
    setPosts(json);
  };

  const deletePost = async id => {
    const response = await fetch(host + 'posts/' + id, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
      },
    });
    const json = await response.text();
    console.log(json);
    alert('Post deleted successfully!');
    await getPosts();
  };

  const logOut = async () => {
    const response = await fetch(host + 'auth/logout', {
      method: 'DELETE',
    });
    const text = await response.text();
    console.log(text);
    localStorage.clear();
    nav('/');
  };

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    getPostsWithParams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, tags]);

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        height: '100%',
        display: 'flex',
      }}
    >
      <Modal
        visible={modalVisible}
        setVisible={setModalVisible}
        afterSubmit={getPosts}
      />
      <aside>
        <div className='logo-wrapper'>
          <Logo />
        </div>
        <nav>
          <ul>
            <li>
              <a href='/'>Posts</a>
            </li>
            <li>
              <a
                href='/'
                onClick={event => {
                  event.preventDefault();
                  logOut();
                }}
              >
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      <main>
        <div className='top-row'>
          <Button onClick={() => setModalVisible(true)}>Add new</Button>
          <div>
            <input
              className='input'
              name='title'
              id='title'
              placeholder='Title'
              value={title}
              onChange={event => setTitle(event.target.value)}
            />
            <input
              className='input'
              name='tags'
              id='tags'
              placeholder='Tags'
              value={tags}
              onChange={event => setTags(event.target.value)}
            />
          </div>
        </div>
        {posts?.posts && (
          <>
            <table>
              <thead>
                <tr>
                  {data.header.map(item => (
                    <th key={item}>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {posts?.posts.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.tags.join(', ')}</td>
                    <td>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <div className='action-btn'>
                          <BsFillPencilFill />
                        </div>
                        <div
                          className='action-btn'
                          onClick={() => deletePost(item.id)}
                        >
                          <BsFillTrashFill />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className='pagination'>
              <Pagination
                current={posts.current_page}
                total={posts.total_page}
                setPosts={setPosts}
              />
            </div>
          </>
        )}
      </main>
    </div>
  );
}

const Pagination = ({ current, total, setPosts }) => {
  const changePage = async pageNum => {
    const response = await fetch(host + 'posts?page=' + pageNum, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
      },
    });
    const json = await response.json();
    console.log(json);
    setPosts(json);
  };

  if (current === total && current === 1) {
    return <button disabled>1</button>;
  } else {
    return (
      <>
        {Array(total)
          .fill('')
          .map((_, index) => (
            <button
              key={index}
              disabled={current === index + 1}
              onClick={() => changePage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
      </>
    );
  }
};

const Modal = ({ visible, setVisible, afterSubmit }) => {
  const [data, setData] = useState({ title: '', description: '', tags: '' });

  const createPost = async () => {
    const response = await fetch(host + 'posts', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...data, tags: data.tags.split(', ') }),
    });
    const json = await response.json();
    console.log(json);
    alert('Post created successfully!');
    await afterSubmit();
    setData({ title: '', description: '', tags: '' });
    setVisible(false);
  };

  return (
    <div
      className='new-post-modal'
      onClick={() => setVisible(false)}
      style={{ display: visible ? 'flex' : 'none' }}
    >
      <form
        className='new-post-form'
        onClick={event => {
          event.stopPropagation();
        }}
        onSubmit={event => {
          event.preventDefault();
          createPost();
        }}
      >
        <h3 style={{ marginBottom: 20, fontSize: 30 }}>Create new post</h3>
        <div className='input-wrapper'>
          <label className='modal-label' htmlFor='title-input'>
            Title
          </label>
          <input
            className='input'
            style={{
              height: 50,
              width: '100%',
              margin: '10px 0 20px',
              padding: '0 16px',
            }}
            id='title-input'
            name='title'
            value={data.title}
            onChange={event => setData({ ...data, title: event.target.value })}
            type='text'
            required
          />
        </div>
        <div className='input-wrapper'>
          <label className='modal-label' htmlFor='description-input'>
            Description
          </label>
          <input
            className='input'
            style={{
              height: 50,
              width: '100%',
              margin: '10px 0 20px',
              padding: '0 16px',
            }}
            value={data.description}
            onChange={event =>
              setData({ ...data, description: event.target.value })
            }
            id='description-input'
            name='description'
            type='text'
            required
          />
        </div>
        <div className='input-wrapper'>
          <label className='modal-label' htmlFor='tags-input'>
            Tags
          </label>
          <input
            className='input'
            style={{
              height: 50,
              width: '100%',
              margin: '10px 0 20px',
              padding: '0 16px',
            }}
            value={data.tags}
            onChange={event => setData({ ...data, tags: event.target.value })}
            id='tags-input'
            name='tags'
            type='text'
            required
          />
        </div>
        <Button type='submit' style={{ marginTop: 30 }}>
          Create
        </Button>
      </form>
    </div>
  );
};
