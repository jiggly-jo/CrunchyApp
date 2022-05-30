import Crunchyroll from "crunchyroll.ts";

async function autologin(){
    const auth = await Crunchyroll.login("JigglyJo", "Happy2020");
}
async function login(username, password){
    const auth = Crunchyroll.login("username", "Happy2020");
}
async function GetAnime(animeName){
    const anime = await Crunchyroll.anime(animeName);
    document.getElementById("demo").innerHTML = anime.series_id + " " + anime.name;
}