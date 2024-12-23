import React from 'react';

const Link = ({route}) => {
    return (
        <li className='mr-10 hover:bg-yellow-300 px-4 py-2 rounded-lg ml-8'>
            <a href={route.path}> {route.name}</a>
        </li>
    );
};

export default Link;