// Увеличить/уменшить текст
// var p = prompt('How many increase/decrease font-size of the text?', 5);
// p=Number(p);
// var c=20;
// $('#btn1').click(function(event){
// $('#s2').css('font-size', c+p+'px');
// $('#s1').text(c+p+'px');
// c+=p;
// });
// $('#btn2').click(function(event){
// $('#s2').css('font-size', c-p+'px');
// $('#s1').text(c-p+'px');
// c-=p;
// });

var sum='Вы купили: ';

$('.a1').click(function(event) {

$('.a11').animate({marginLeft : '300px', top: '323px',}, 1000);
sum+='яблоки; ';

});
$('.a2').click(function(event) {
$('.a21').animate({marginLeft : '300px', top: '323px',}, 1000);
sum+='виноград; ';
});
$('.a3').click(function(event) {
$('.a31').animate({marginLeft : '300px', top: '323px',}, 1000);
sum+='мандарины; ';
});
$('.btn1').click(function(event) {
alert(sum);
});

