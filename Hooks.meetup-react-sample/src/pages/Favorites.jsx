import {useContext} from 'react';

import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage(){
    const favoritesCtx=useContext(FavoritesContext);
    let content;
    if(favoritesCtx.totalFavorites===0){
        content =<p>你還沒有任何最愛的，開始新增?</p>;
    }else{
        content=<MeetupList meetups={favoritesCtx.favorites}></MeetupList>
    }

    return (
        <section>
            <h1>我的最愛My Favorites</h1>
            {content}
        </section>
    )
}
export default FavoritesPage