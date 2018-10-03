import React from 'react';
import waves from '../../assets/svg/wave.svg';
import Wave from './Wave';


// https://www.npmjs.com/package/react-move could help animate it

const styles = {
    wave: {
        minWidth: '100%',
    },
    waveBackground: {
        background: 'url(' + waves + ') no-repeat top left',
    },
    background: {
        height: "auto",
        width: "100%",
        backgroundColor: '#3B4E87',
        backgroundSize: 'contain',
        position: 'relative',
    },
    pattern: {
        width: "100%",
        height: "auto",
        // background: "url(" + Wave + ") no-repeat center center",
        background: "url(" + Wave + ") ",
        // backgroundSize: 'cover',
    },
    iphone: {
        height: '400px',
        margin: '0 auto',
        textAlign: 'center',
        zIndex: '9999999',
        // position: 'absolute'
    }
};

const WaveBottom = {
    position: 'absolute',
    width: '100%',
    bottom: '-10px',
};


const Waves = () => (
    <div>
    <div style={styles.background}>
        <div style={WaveBottom}><Wave/></div>
    </div>
    </div>
);


export default Waves;