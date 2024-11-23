const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Muchass gracias por perdonarme ela, te juro q voy a mejorar en todo por que no te quiero perder tu significas mucho para mi sin ti no se quien soy, ademas que nunca mas te voy a mentir siempre te voy a hacer sincero yy voy a intentar todo lo posible para que vuelvas a creer en mi palabra:3 con cariño Ronald:D')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})