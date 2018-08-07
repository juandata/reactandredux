import React from 'react';

export function Section(props){
  return (
    <section>Section <h1>{props.layout} comes from Redux Store and is in Props of Parent Component</h1></section>
  )
}
