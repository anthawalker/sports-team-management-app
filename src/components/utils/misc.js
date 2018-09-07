import React from 'react';
import { Link } from 'react-router-dom';

export const Tag = ({ bck, size, color, link, linkTo, children, add }) => {
  const template = <div
    style={{
      background: bck,
      fontSize: size,
      color: color,
      padding: '5px 10px',
      display: 'inline-block',
      fontFamily: 'Righteous',
      ...add
    }}>
      { children }
    </div>;

  if (link) {
    return (
      <Link to={linkTo}>
        {template}
      </Link>
    );
  }
  return template;
}

export const firebaseLooper = (snapshot) => {
  const data = [];
  snapshot.forEach((childSnapshot) => {
    data.push({
      ...childSnapshot.val(),
      id: childSnapshot.key
    });
  });
  return data;
}

export const reverseArray = (actualArray) => {

  return actualArray.reduce((prev, curr) => {
    prev.unshift(curr);
    return prev;
  }, []);
}