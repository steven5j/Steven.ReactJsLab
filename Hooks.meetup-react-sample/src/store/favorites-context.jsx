import { createContext,useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {},
  });

export function FavoritesContextProvider(props){
    const [userFavorites, setUserFavorites] = useState([]);
    
    function addFavoriteHandler(favoriteMeetup){
        setUserFavorites(
            (prevUserFavorites)=>{
                return prevUserFavorites.concat(favoriteMeetup);
            }
        );
    }

    function removeFavoriteHandler(meetId){
        setUserFavorites(
            (prevUserFavorites)=>{
                return prevUserFavorites.filter((meet)=>meet.id!==meetId);
            }
        );
    }

    function itemIsFavoriteHandler(meetId){
        return userFavorites.some((meet)=>meet.id===meetId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler,
      };

      return (
        <FavoritesContext.Provider value={context}>
          {props.children}
        </FavoritesContext.Provider>
      );
}


  
export default FavoritesContext;