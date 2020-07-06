var blocks=document.querySelectorAll('.item__btn');
for(var i=0;i<blocks.length;i++){
blocks[i].onmousemove=function(){
  this.style.background='#C90000';
  this.style.color='#FFFFFF';
  this.style.border='none';
  }
blocks[i].onmouseout=function(){
  this.style.background='#fff';
  this.style.color='#6E7782';
  this.style.border='1px solid #E2E5EB';
  }
}
