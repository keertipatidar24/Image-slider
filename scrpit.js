let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
document.querySelectorAll('.see-more').forEach(button => {
    button.addEventListener('click', function() {
        const url = this.getAttribute('data-url');
        window.open(url, '_blank');
    });
});

next.addEventListener('click' , function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})
prev.addEventListener('click' , function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
})

document.getElementById('Whatsapp').addEventListener('click', function() {
    window.open('https://wa.me/', '_blank');
});

document.getElementById('facebook').addEventListener('click', function() {
    window.open('https://www.facebook.com/', '_blank');
});

document.getElementById('instagram').addEventListener('click', function() {
    window.open('https://www.instagram.com/', '_blank');
});

document.getElementById('twitter').addEventListener('click', function() {
    window.open('https://twitter.com/', '_blank');
});
