document.getElementById('startButton').addEventListener('click', function() {
    document.querySelector('.container').classList.add('hidden');
    document.getElementById('menu').classList.remove('hidden');
});

document.getElementById('backButton').addEventListener('click', function() {
    document.getElementById('menu').classList.add('hidden');
    document.querySelector('.container').classList.remove('hidden');
});
