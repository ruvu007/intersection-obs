let Links = document.querySelectorAll('nav a');
let secties = document.querySelectorAll('section');

const opties = {
    treshold: 1.0
};

const verwerkDoorsnijden = (entries, observer) => {
    entries.forEach( entry => {
        console.log(entry.target.id + "doorsnijdt" + entry.isIntersecting);
        if( entry.isIntersecting ) {
            let link = zoekLink('#' + entry.target.parentNode.id);
            maakActief(link);
        }
    });
}

let observer = new IntersectionObserver(verwerkDoorsnijden, opties);

// observer.observe(secties[1]);

secties.forEach( sectie => {
    observer.observe(sectie.getElementsByTagName('p')[0]);
})

const verwijderActief = () => {
    Links.forEach( (link) => {
        if( link.classList = 'actief') {
            link.classList.remove('actief');
        }
    });
}

const maakActief = (elem) => {
    verwijderActief();
    elem.classList.add('actief');
}

Links.forEach( ( link ) => {
    link.addEventListener( 'click', (e) => {
        e.preventDefault();
        maakActief(e.target);
        window.location = e.target.href;
    })
});

const zoekLink = (id) => {
    let link = document.querySelector('nav a[href="' + id + '"]');
    return link;
}