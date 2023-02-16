import React from 'react';
import { Button, Logo } from '../../components';
import '../../style/profile.css';
import data from './data';

export default function Profile() {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex' }}>
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
              <a href='/'>Logout</a>
            </li>
          </ul>
        </nav>
      </aside>
      <main>
        <div className='add-form'>
          <Button style={{ padding: '0 80px' }}>Add new</Button>
          <div>
            <input
              className='add-input'
              name='title'
              id='title'
              placeholder='Title'
            />
            <input
              className='add-input'
              name='tags'
              id='tags'
              placeholder='Tags'
            />
          </div>
        </div>
        <table>
          <thead>
            <tr>
              {data.header.map(item => (
                <th key={item}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[1, 1, 1, 1, 1].map((_item, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>ABC</td>
                <td>Description</td>
                <td>HTML, CSS</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='other'>
          <button>Phần phân trang</button>
        </div>
      </main>
    </div>
  );
}
