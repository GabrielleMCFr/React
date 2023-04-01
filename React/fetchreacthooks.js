import React, { useState, useEffect } from 'react';
import { get } from './mockBackend/fetch';

export default function SocialNetwork() {
  const [menu, setMenu] = useState(null);
  const [newsFeed, setNewsFeed] = useState(null);
  const [friends, setFriends] = useState(null)

  useEffect(() => {
    Promise.all([get('/menu'), get('/news-feed'), get('/friends')]).then(
      ([menuResponse, newsFeedResponse, friendsResponse]) => {
        setMenu(menuResponse.data)
        setNewsFeed(newFeedResponse.data)
        setFriends(friendsResponse.data)
      }
      /* PROMISE ALL SAME THAN :
      get('/menu').then(response => {
      setMenu(response.data)
    })
    get('/news-feed').then(response => {
      setNewsFeed(response.data)
    })
    get('/friends').then(response => {
      setFriends(response.data)
    })*/
    );
  }, []);

  /* SAME EFFECT HOOK THAN : 
  const [menu, setMenu] = useState(null);
  useEffect(() => {
    get('/menu').then(response => {
      setMenu(response.data)
    })
  }
  
  const [newsFeed, setNewsFeed] = useState(null);
  useEffect(() => {
    get('/news-feed').then(response => {
      setNewsFeed(response.data)
    })}

  const [friends, setFriends] = useState(null)
  useEffect(() => {
    get('/friends').then(response => {
      setFriends(response.data)
    })}
    
  }, []);*/

  return (
    <div className='App'>
      <h1>My Network</h1>
      {!menu ? <p>Loading..</p> : (
        <nav>
          {menu.map((menuItem) => (
            <button key={menuItem}>{menuItem}</button>
          ))}
        </nav>
      )}
      <div className='content'>
        {!newsFeed ? <p>Loading..</p> : (
          <section>
            {newsFeed.map(({ id, title, message, imgSrc }) => (
              <article key={id}>
                <h3>{title}</h3>
                <p>{message}</p>
                <img src={imgSrc} alt='' />
              </article>
            ))}
          </section>
        )}
        {!friends ? <p>Loading..</p> : (
          <aside>
            <ul>
              {friends
                .sort((a, b) => (a.isOnline && !b.isOnline ? -1 : 0))
                .map(({ id, name, isOnline }) => (
                  <li key={id} className={isOnline ? 'online' : 'offline'}>
                    {name}
                  </li>
                ))}
            </ul>
          </aside>
        )}
      </div>
    </div>
  );
}
