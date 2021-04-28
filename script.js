
document.querySelectorAll('.accordion__question').forEach((item) => {
    item.addEventListener('click', (event) => {
        console.log('clock!');
        let accCollapse = item.nextElementSibling;

        // Open accordion item
        if (!item.classList.contains('open')){
            console.log('toggle accordion button');
            

            accCollapse.style.display = 'block';
            let accHeight = accCollapse.clientHeight;
            console.log(accHeight);

            setTimeout(() => {
                accCollapse.style.height = accHeight + 'px';
                accCollapse.style.display = ''; 
            }, 1);
            
            accCollapse.classList = 'accordion__collapse collapsing'; 

            setTimeout(() => {
                console.log('open accordion content');
                accCollapse.classList = 'accordion__collapse collapse open';
                accCollapse.style.height = '';

            }, 300);
        }
        
        // Close accordion item
        else {
            accCollapse.classList = 'accordion__collapse collapsing';  

            setTimeout(() => {
                console.log('close accordion content');
                accCollapse.classList = 'accordion__collapse collapse';
            }, 300);

        }

        // add "collapsing" class to .accordion__collapse (sibling)

        //remove "collapsing" class and add "open" class

        /* toggle code

        */

        item.classList.toggle('open');

        // item.nextElementSibling.classList.toggle('open');

        
    });
});