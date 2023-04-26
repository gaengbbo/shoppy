import React from 'react';

export default function User({user: {photoURL, displayName}}) {
  return (
    <div className='flex items-center gap-2 shrink-0'>
      <img className='w-10 h-10 rounded-full' src={photoURL} alt={displayName}></img>
      <span className='hidden md:block'>{displayName}</span>
    </div>
  );
}