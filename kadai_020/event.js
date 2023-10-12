document.addEventListener('DOMContentLoaded', function () {

    button = document.getElementById('btn');
    
    button.addEventListener('click', function () {
        textElement = document.getElementById('text');
        textElement.innerHTML = 'ボタンがクリックされました';
    });
});
