import React from 'react';


const Menu = () => {
    return (
        <div className={'menu'}>
            <p className={'menu-name'}>Your new gang</p>
            <ul className={'menu-list'}>
                <li className={'menu-item active'}>Polar Bear</li>
                <li className={'menu-item'}>Cheetah</li>
                <li className={'menu-item'}>Panda</li>
                <li className={'menu-item'}>Fox</li>
                <li className={'menu-item'}>Squirrel</li>
                <li className={'menu-item'}>Butterfly</li>
                <li className={'menu-item'}>Elephant</li>
            </ul>
        </div>
    );
};

export default Menu;
