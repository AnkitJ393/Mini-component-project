const like=document.getElementById('likeCounter');
like.value=0;
const dislike=document.getElementById('dislikeCounter');
dislike.value=0;
function btn(){
    like.value=parseInt(like.value) +1;}
function disbtn(){
    dislike.value=parseInt(dislike.value) +1;
}