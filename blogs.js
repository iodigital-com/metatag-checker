let blogs = [
    {
        title: "Het verschil tussen SEO en SEA",
        url: "https://www.intracto.com/blog/het-verschil-tussen-seo-en-sea",
        description: "Scoor in zoekmachines met de perfecte mix van SEO en SEA. Maar wat is eigenlijk het verschil tussen beide? Contentmarketeer Brecht legt uit hoe <em>search engine optimisation</em> en <em>search engine advertising</em> werken.",
        image: "blog-1.jpg",
        author: "Brecht Beertens",
        date: "14 mei 2019"
    },
    {
        title: "Zet je bedrijf op de kaart met local SEO",
        url: "https://www.intracto.com/blog/zet-je-bedrijf-op-de-kaart-met-local-seo",
        description: "Twijfel jij nog over het nut van local SEO? Weet je niet zeker of je tijd moet steken in je Google My Business-account? In deze blogpost neemt SEO-expert Michael al je twijfels weg. Laat je overtuigen door zijn cases en behaal een voorsprong op je concurrenten dankzij zijn tips!",
        image: "blog-2.jpg",
        author: "Michael Van Den Reym",
        date: "08 augustus 2019"
    },
    {
        title: "De geschiedenis en toekomst van SEO",
        url: "https://www.intracto.com/blog/de-geschiedenis-en-toekomst-van-seo",
        description: "We blikken terug op de geschiedenis van SEO. Zowel algoritmes en de resultatenpagina als het zoekgedrag, indexering en websitetechnologie maakten de voorbije jaren een hele evolutie door. Wat werkt niet meer? Wat werkt nog altijd? En wat zal in de toekomst zelfs nog beter gaan werken?",
        image: "blog-3.jpg",
        author: "Michael Van Den Reym",
        date: "17 mei 2019"
    },
    {
        title: "Hoger scoren in Google dankzij data-analyse",
        url: "https://www.intracto.com/blog/hoger-scoren-google-dankzij-data-analyse",
        description: "Laat je website beter presteren in Google door regelmatig je content te optimaliseren. Met een SEO-contentanalyse breng je alle verbeterpunten in kaart.",
        image: "blog-4.jpg",
        author: "Michael Van Den Reym",
        date: "20 april 2019"
    },
    {
        title: "Het grootmoederprincipe: schrijf betere copy met een simpel trucje",
        url: "https://www.intracto.com/blog/het-grootmoederprincipe-schrijf-betere-copy-met-een-simpel-trucje",
        description: "Benieuwd hoe je met een klein trucje betere copy gaat schrijven? En hoe je het ook toepast op je contentmarketing en -strategie? Mijn trucje dat keer op keer werkt: het grootmoederprincipe.",
        image: "blog-5.jpg",
        author: "Pieter Moons",
        date: "13 augustus 2019"
    },
    {
        title: "De toekomst van spraaktechnologie in de customer journey",
        url: "https://www.intracto.com/blog/de-toekomst-van-spraaktechnologie-de-customer-journey",
        description: "Kun je je voorstellen hoe het zou zijn als iedereen een eigen persoonlijke assistent zou hebben? Het zal niet lang duren voordat die dagdroom realiteit wordt, dankzij Google Assistant, Alexa, Siri en Cortana.",
        image: "blog-6.jpg",
        author: "Wiene Van Guyse",
        date: "28 juni 2019"
    },
    {
        title: "Trends, seizoenen en jouw online marketingstrategie",
        url: "https://www.intracto.com/nl-nl/blog/trends-seizoenen-en-jouw-online-marketingstrategie",
        description: "Een barbecue-campagne in de winter is geen goed idee en de hype rond de DVD-speler is al een tijdje over. Leer hoe je verborgen tijds- en trendspatronen in je data kan analyseren en gebruiken in je online marketingstrategie.",
        image: "blog-7.jpg",
        author: "Michael Van Den Reym",
        date: "26 juli 2019"
    },
    {
        title: "De impact van een headless CMS-aanpak op SEO",
        url: "https://www.intracto.com/blog/de-impact-van-een-headless-cms-aanpak-op-seo",
        description: "Bij een headless aanpak, worden de frontend (wat je ziet) en backend (waar de inhoud beheerd wordt) van een website van elkaar losgekoppeld. Dat kan heel wat voordelen hebben, maar er zijn ook een aantal aandachtspunten. In deze blogpost gaan we verder in op wat de impact is van het gebruik van deze technologie op vlak van SEO.",
        image: "blog-8.jpg",
        author: "Sead Memic",
        date: "17 december 2019"
    },
    {
        title: "Case: de grote impact van url's op SEO",
        url: "https://www.intracto.com/blog/case-de-grote-impact-van-urls-op-seo",
        description: "Een kleine aanpassing aan url's kan grote gevolgen hebben voor SEO. Hier lees je hoe onze technische SEO-audit een wereld van verschil maakte voor een van onze klanten.",
        image: "blog-9.jpg",
        author: "Herman Maes",
        date: "01 augustus 2018"
    }
];

let random1 = Math.floor(Math.random() * blogs.length);
let random2 = Math.floor(Math.random() * blogs.length);

while (random1 === random2) {
    random2 = Math.floor(Math.random() * blogs.length);
}

document.querySelector('.js-blog1').setAttribute("href", blogs[random1].url);
document.querySelector('.js-blog1 img').setAttribute("src", "/metatags/dest/img/" + blogs[random1].image);
document.querySelector('.js-blog1 img').setAttribute("alt", blogs[random1].title);
document.querySelector('.js-blog1-title').innerHTML = blogs[random1].title;
document.querySelector('.js-blog1-text').innerHTML = blogs[random1].description;
document.querySelector('.js-blog1-author').innerHTML = blogs[random1].author;
document.querySelector('.js-blog1-date').innerHTML = blogs[random1].date;

document.querySelector('.js-blog2').setAttribute("href", blogs[random2].url);
document.querySelector('.js-blog2 img').setAttribute("src", "/metatags/dest/img/" + blogs[random2].image);
document.querySelector('.js-blog2 img').setAttribute("alt", blogs[random2].title);
document.querySelector('.js-blog2-title').innerHTML = blogs[random2].title;
document.querySelector('.js-blog2-text').innerHTML = blogs[random2].description;
document.querySelector('.js-blog2-author').innerHTML = blogs[random2].author;
document.querySelector('.js-blog2-date').innerHTML = blogs[random2].date;
