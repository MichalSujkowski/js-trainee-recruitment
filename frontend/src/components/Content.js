import React from 'react';

import {Butterfly, Cheetah, Elephant, Fox, Panda, PolarBear, Squirrel} from '../img/index'

const Content = () => {

    return (
        <div className={'section'}>
            <div className={'section-article'} id={'polar-bear'}>
                <p>POLAR BEAR</p>
                <h2>Say hello to your new <span>friend</span></h2>
                <img src={PolarBear} alt={'image'}/>
            </div>

            <div className={'section-article'} id={'cheetah'}>
                <p>Cheetah</p>
                <h2>No petting before <span>eating</span></h2>
                <img src={Cheetah} alt={'image'}/>
            </div>

            <div className={'section-article'} id={'panda'}>
                <p>Panda</p>
                <h2>Eating always with<span>pleasure</span></h2>
                <img src={Panda} alt={'image'}/>
            </div>

            <div className={'section-article'} id={'fox'}>
                <p>Fox</p>
                <h2>Sometimes quite<span>suspicious</span></h2>
                <img src={Fox} alt={'image'}/>
            </div>

            <div className={'section-article'} id={'squirrel'}>
                <p>Squirrel</p>
                <h2>Staying <span>curious</span></h2>
                <img src={Squirrel} alt={'image'}/>
            </div>

            <div className={'section-article'} id={'butterfly'}>
                <p>Butterfly</p>
                <h2><span>Majestic </span>every time of a day</h2>
                <img src={Butterfly} alt={'image'}/>
            </div>

            <div className={'section-article'} id={'elephant'}>
                <p>Elephant</p>
                <h2>It makes a <span>huge</span> difference</h2>
                <img src={Elephant} alt={'image'}/>
            </div>
        </div>
    );
};

export default Content;

