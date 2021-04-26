
document.querySelectorAll('.accordion__question').forEach((item) => {
    item.addEventListener('click', (event) => {
        console.log('clock!');

        // Open accordion item
        if (!item.classList.contains('open')){
            console.log('toggle accordion button');
            item.nextElementSibling.classList = 'accordion__collapse collapsing'; 

            setTimeout(() => {
                console.log('open accordion content');
                item.nextElementSibling.classList = 'accordion__collapse open';
            }, 300);
        }
        
        // Close accordion item
        else {

        }

        // add "collapsing" class to .accordion__collapse (sibling)

        //remove "collapsing" class and add "open" class

        /* toggle code

        item.classList.toggle('open');
        item.nextElementSibling.classList.toggle('open');
        
        */
    });
});