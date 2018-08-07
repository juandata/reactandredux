import React from 'react';

export function Article(props){
  return (
    <article>Article <h1>{props.layout} comes from Redux Store and is in Props of Parent Component</h1></article>
  )
}
