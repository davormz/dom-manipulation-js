console.log('Happy hacking :)')

const baseUrl = 'https://platzi-avo.vercel.app';
// API URL
const apiUrl = '/api/avo';

const app = document.querySelector('#mount');

window.fetch(`${baseUrl}${apiUrl}`)
.then( resp => resp.json())
.then( respJson => {
    const items = [];
    respJson.data.forEach( item => {
        // const imgContainer = document.createElement('div');
        const img = document.createElement("img");
        img.width = '210';
        img.className = 'group-hover:opacity-75';
        img.src = `${baseUrl}${item.image}`;

        const title = document.createElement("h2");
        title.textContent = item.name;
        title.className= 'text-xl text-gray-900 dark:text-white mt-5 tracking-tight';

        const price = document.createElement("div");
        price.textContent = formatPrice(item.price);
        price.className = 'font-medium';

        const container = document.createElement("div");
        container.className = 'group mt-6 mx-6 rounded-lg px-4 py-8 ring-1 ring-gray-900/5 shadow-xl'
        // container.width = '3';
        container.append(img, title, price);
        
        items.push(container);
    });

    app.append(...items);

})
.catch(err => {
    console.error(err);
});

const formatPrice = (price) => {
   const newPrice =  new window.Intl.NumberFormat('en-EN', {
        style: 'currency',
        currency: 'USD'
    })
    .format(price);

    return newPrice;
};