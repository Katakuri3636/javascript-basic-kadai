document.addEventListener('DOMContentLoaded', function () {

    button = document.getElementById('btn');
    
    

    button.addEventListener('click', function () {
        setTimeout(() => {
            textElement = document.getElementById('text');
            textElement.innerHTML = 'ボタンがクリックされました';
        }, 2000);
    });
});
