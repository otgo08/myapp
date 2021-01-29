require("@babel/polyfill");
import Search from "./model/Search";

/*
* web app төлөв
* Хайлтын query, үр дүн
* Тухайн үзүүлж байгаа жор
* Лайкласан жорууд
*Захиалж байгаа жорын найрлагууд
*/

const state = {};
const controlSearch = async () => {
    // 1. Вебээс хайлтын түлхүүр үгийг гаргаж авна.
    const query = "pizza";
    if(query){
      // 2. Шинээр хайлтын обьектыг үүсгэж өгнө.  
      state.search = new Search(quary);
    // 3. Хайлт хийхэд зориулж дэлгэцэнд UI бэлтгэнэ.

    // 4. Хайлтыг гүйцэтгэнэ.
      await state.search.doSearch();
    // 4. Хайлтын үр дүнг дэлгэцэнд үзүүлнэ.
      
    }
    
}
document.querySelector(".search").addEventListener("submit", e=> {
    e.preventDefault();
    controlSearch()

})