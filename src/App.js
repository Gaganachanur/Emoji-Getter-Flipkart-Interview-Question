import React, { useEffect, useState } from 'react';
import './style.css';

export default function App() {
  const [emoji, setEmoji] = useState([]);
  const [type, setType] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    const getEmoji = async () => {
      const responce = await fetch(
        `https://emojihub.yurace.pro/api/all/${type}/${value}`
      );
      const data = await responce.json();

      setEmoji(data);
    };
    getEmoji();
  }, [value]);

  return (
    <div>
      <span style={{ display: 'flex' }}>
        <h1>Emoji Getter </h1>
        <h1 dangerouslySetInnerHTML={{ __html: '\u0026#128526;' }}></h1>
      </span>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '3px',
        }}
      >
        <span>
          Type
          <select onClick={(e) => setType(e.target.value)}>
            <option> category</option>
            <option> group</option>
          </select>
        </span>
        {type === 'category' && (
          <span>
            Category
            <select onClick={(e) => setValue(e.target.value)}>
              <option>smileys-and-people</option>
              <option>animals-and-nature</option>
              <option>food-and-drink</option>
              <option>travel-and-places</option>
              <option>activities</option>
              <option>objects</option>
              <option>symbols</option>
              <option>flags</option>
            </select>
          </span>
        )}

        {type === 'group' && (
          <span>
            Group
            <select onClick={(e) => setValue(e.target.value)}>
              <option>body</option>
              <option>body</option>
              <option>cat-face</option>
              <option>clothing</option>
              <option>creature-face</option>
              <option>emotion</option>
              <option>face-negative</option>
              <option>face-neutral</option>
              <option>face-positive</option>
              <option>face-positive</option>
              <option>face-role</option>
              <option>face-sick</option>
              <option>family</option>
              <option>monkey-face</option>
              <option>person</option>
              <option>person-activity</option>
              <option>person-gesture</option>
              <option>person-role</option>
              <option>skin-tone</option>
              <option>flags</option>
            </select>
          </span>
        )}
        <input placeholder="search..." />
        <button>search</button>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginTop: '30px',
        }}
      >
        {emoji &&
          emoji.map((item) => {
            return (
              <div
                dangerouslySetInnerHTML={{ __html: `${item.htmlCode[0]}` }}
              ></div>
            );
          })}
      </div>
    </div>
  );
}
