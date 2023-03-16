<<<<<<< HEAD
import React, /*{useState}*/ from 'react';
=======
import React from 'react';
>>>>>>> 304fc81 (initial and all changes. problem with send to pull request.)
import AnchorLink from "react-anchor-link-smooth-scroll/lib/anchor-link";

const Menu = () => {
    // const [isActive, setIsActive] = useState(false);
    //
    // const handleClick = (e) => {
    //     setIsActive(current => !current);
    // };

    return (
        <div className={'menu'}>
            <p className={'menu-name'}>Your new gang</p>
            <ul className={'menu-list'}>
<<<<<<< HEAD
=======

>>>>>>> 304fc81 (initial and all changes. problem with send to pull request.)
                <AnchorLink href={'#polar-bear'} className={'anchor'}>
                    <li className={'menu-item active'}>Polar Bear</li>
                </AnchorLink>

                <AnchorLink href={'#cheetah'} className={'anchor'}>
                    <li className={'menu-item'}>Cheetah</li>
                </AnchorLink>

                <AnchorLink href={'#panda'} className={'anchor'}>
                    <li className={'menu-item'}>Panda</li>
                </AnchorLink>

                <AnchorLink href={'#fox'} className={'anchor'}>
                    <li className={`menu-item`}>Fox</li>
                </AnchorLink>

                <AnchorLink href={'#squirrel'} className={'anchor'}>
                    <li className={`menu-item`}>Squirrel</li>
                </AnchorLink>

                <AnchorLink href={'#butterfly'} className={'anchor'}>
                    <li className={'menu-item'}>Butterfly</li>
                </AnchorLink>

                <AnchorLink href={'#elephant'} className={'anchor'}>
                    <li className={'menu-item'}>Elephant</li>
                </AnchorLink>
<<<<<<< HEAD
            </ul>
        </div>
    );


=======

            </ul>
        </div>
    );
>>>>>>> 304fc81 (initial and all changes. problem with send to pull request.)
};

export default Menu;

