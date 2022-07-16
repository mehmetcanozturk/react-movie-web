import { Global } from "./global";

export class Favorites {
    static likeList = [] 
    

    static getAllFavorites() {
        var values = [],
            keys = Object.keys(localStorage),
            i = keys.length;

        while (i--) {
            values.push(JSON.parse(localStorage.getItem(keys[i])));
        }

        return values;
    }

    static addFavorites(data) {
        localStorage.setItem("like-" + data.id, JSON.stringify(data))
        if(Global.pageName=="content"){
            Favorites.likeList.map((item)=>{
                if(data.id===item.id){
                    item.set(true)
                    console.log(item.id)
                }
            })
        }
    }

    static removeFavorites(data) {
        localStorage.removeItem("like-" + data.id)
        if(Global.pageName==="favorites"){
            console.log("fav")
            const element = document.getElementsByName(data.id)[0]
            element.style.display = "none";
        }
        if(Global.pageName=="content"){
            Favorites.likeList.map((item)=>{
                if(data.id===item.id){
                    item.set(false)
                    console.log(item.id)
                }
            })
        }
    }

    static IsFavorites(data) {
        if (localStorage.getItem("like-" + data.id)) {
            return true
        }
        return false
    }
}