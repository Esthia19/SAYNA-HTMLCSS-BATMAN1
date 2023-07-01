/*const iconeH = document.getElementById('iconeH');
iconeH.addEventListener('click',function()
{
    iconeH.style.backgroundColor='yellow';

});


const iconeB = document.getElementById('iconeB');
iconeB.addEventListener('click',function()
{
    iconeB.style.backgroundColor='yellow';

});
*/

/*function scrollPageH()
{
    window.scrollTo(0,0)
}
document.getElementById('iconeH').addEventListener('click',scrollPageH); //scroll vers le haut*/

function scrollPageB()
{
    window.scrollTo(0,document.body.scrollHeight)
}
document.getElementById('iconeB').addEventListener('click',scrollPageB);  //scroll vers le bas



function scrollVersHaut ()
{
    window.scrollTo(
        {
            top:0,behavior:'smooth'
        }
    );
}

var iconeH = document.getElementById('iconeH');
iconeH.addEventListener('click',scrollVersHaut);


/*const gauche = document.querySelectorAll('.gauche');
const observer = new IntersectionObserver (entries =>{
    entries.forEach(entry => 
        {
            if (entry.isIntersecting){
                entry.targer.classList.add('fade-in');
                entry.targer.classList.add('slide-in');
            }
        })
});

gauche.forEach(element => {
    observer.observe(element);
}); */