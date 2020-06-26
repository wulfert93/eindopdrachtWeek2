//DOM IVNULLEN
Movies.forEach(function(item, index){
    //defineren van elementen
    const divFilms = document.getElementById("films");
    const divItem = document.createElement("div");
    const posterPlaatje = document.createElement("img");
    const posterLink = document.createElement("a");
    //invullen van elementen
    divItem.id=index;
    posterPlaatje.src = item.Poster;
    posterPlaatje.height = 440;
    posterLink.href = "https://www.imdb.com/title/" + item.imdbID;
    posterLink.target = "_blank";
    divItem.innerHTML = item.Title;
    //toewijzen van elementen
    divFilms.appendChild(divItem);
    posterLink.appendChild(posterPlaatje);
    divItem.appendChild(posterLink);
});
//FUNCTIES
//reset
const reset = ()=>{
    Movies.forEach(function(item, index){
    document.getElementById(index).style.display="block";
})}
//zoeken op titel
const zoek = (zoekwoord) =>
    {   Movies.forEach(function(item, index){
            const substring = zoekwoord;
            if(item.Title.includes(substring)){
            }
            else{
                document.getElementById(index).style.display="none";
            }
    })}
//zoeken door Entertoets
const zoekdoorEnter = () => 
    {
        document.addEventListener("keydown", function(event) {
            if (event.code == "Enter") {
            reset();
            const waarde = document.getElementById("cat6").value;
            zoek(waarde);
            }
        });
    }
//zoeken door knop
const zoekKnop = () => {
    reset();
    const waarde = document.getElementById("cat6").value;
    zoek(waarde);
}
//filters door 5 radiobuttons
function klC(checked) {
    switch (checked) {
        case "cat0":
            reset();    
            break;
        case "cat1":
            //nieuw films na 2014
            reset();
            Movies.forEach(function(item, index){
                const jaar = parseInt(item.Year)
                if(item.Year<2014|| jaar<2014) {
                    document.getElementById(index).style.display="none";
                }
            })
            break;
        case "cat2":
            //films met avengers in de titel
            reset();
            zoek("Avengers");
            break;
        case "cat3":
            //films met x-men in de titel
            reset();
            zoek("X-Men");
            break;
        case "cat4":
            //films met princess in de titel
            reset();
            zoek("Princess");
            break;
        case "cat5":
            //films met batman in de titel
            reset();
            zoek("Batman");
            break;
        default:
            ;
            break;
    }
}