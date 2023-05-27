const btn = document.querySelector('.btn');
const btn1 = document.querySelector('.btn1')
const bloc = document.querySelector('.bloc');

btn.addEventListener('click', changertailleetcouleur);
btn1.addEventListener('click', reinitialiser);

function changertailleetcouleur(){
    bloc.classList.add('bloc_change_tc');
}
function reinitialiser(){
    bloc.classList.add('reinit');
}