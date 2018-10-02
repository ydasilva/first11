import React, { Component } from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import seeds from '../../assets/static/seeds.json';
// import animateScrollTo from 'animated-scroll-to';


import { FaqComponent }      from '../faq/FaqComponent';
import { Contact }           from '../contact/Contact';
import { FaqGameComponent }  from '../faq/FaqGameComponent';
import { Home }              from '../home/Home';
import { StickerAppList }    from '../sticker-app/StickerAppList';
import { Customize }         from '../customize/Customize';
import { ComingSoon }        from '../coming-soon/ComingSoon';
import { Creators }          from '../creators/Creators';
import { Stories }           from '../sticker-app/Stories';
import { StickerAppDetail }  from '../sticker-app/StickerAppDetail';
import { About }             from '../about/About';
import { NotFound }          from '../404-page/404Page';
import { Brand }             from '../brand/Brand';
import { Game }              from '../game/Game';
import { GstickerssStories } from '../gstickerss-stories/GstickerssStories';
import { Story }             from '../story/Story';



export default class Main extends Component {
    render() {
        // const seeds = this.props.mainSeed;

        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />

                    <Route exact path='/apps' component={StickerAppList} />

                    <Route exact path='/apps/packs' component={Stories} />

                    <Route path='/stories' component={ComingSoon} />

                    {seeds.map(app =>
                        <Route exact path={"/apps/"+ app.alt} key={app.alt}>
                            <StickerAppDetail appData={app} />
                        </Route>
                    )}

                    <Route path='/contact/:type' component={Contact} />

                    <Route path='/customize' component={Customize} />

                    <Route path='/creators' component={Creators} />

                    <Route path='/brands' component={Brand} />

                    <Route path='/games' component={Game} />

                    <Route path='/about' component={About} />

                    <Route path='/faq' component={FaqComponent} />

                    <Route path='/gamefaq' component={FaqGameComponent} />

                    <Route path='/story/template' component={GstickerssStories} />

                    <Route path='/story/:storyId' component={Story} />

                    <Route path='/comingSoon' component={ComingSoon} />

                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        )
    }
}

