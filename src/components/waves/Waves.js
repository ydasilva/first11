import React from 'react';
import waves from '../../assets/svg/wave.svg';
// import iphone from '../../assets/images/simple-dark@2x.png';
import Wave from './Wave';
import InnerWave from './InnerWave';

// https://www.npmjs.com/package/react-move could help animate it

const styles = {
    wave: {

        // backgroundSize: 'contain',
        // minWidth: '100vw',
        minWidth: '100%',
        // height: 'auto',
    },
    waveBackground: {
        background: 'url(' + waves + ') no-repeat top left',
    },
    background: {
        height: "auto",
        width: "100%",
        backgroundColor: '#3B4E87',
        // backgroundColor: 'red',
        backgroundSize: 'contain',
        // backgroundRepeat: 'no-repeat',
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

const WaveTop = {
    position: 'absolute',
    width: '100%',
    top: '-9px',
    transform: 'rotate(180deg)',
};


const WaveBottom = {
    position: 'absolute',
    width: '100%',
    bottom: '-9px',
    // top: '0px',
};


const Waves = () => (
    <div>
    <div style={styles.background}>
        <div style={WaveTop}><Wave/></div>
        <div style={styles.iphone}>
            {/*<img style={{height: '100%'}} src={iphone} alt="iphone"/>*/}
        </div>
        <div style={WaveBottom}><InnerWave/></div>
        <div style={WaveBottom}><Wave/></div>
    </div>
    </div>
);


export default Waves;