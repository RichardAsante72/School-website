// Change Nav Bar Styles on Scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 0);
}); 

//show/hide faq answers

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click',() => {
        faq.classList.toggle('open');


        // change icon
        const icon = document.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus";
        } else {
            icon.className = "uil uil-pluss";

        }
    }) 
})