// console.log("reshma")
// 1. array.concat
// let items=[1,2];
// //let newItems = items.concat([3, 4], [5, [6,7]]);//[ 1, 2, 3, 4, 5, [ 6, 7 ] ]
// let newItems = items.concat([3, 4], [5, 6,7]);//[ 1, 2, 3, 4, 5,  6, 7  ]
// console.log(newItems);

// //array of objects
// let people= [
//     {
//         name: 'shane'
//     },
//     {
//         name: 'ben'
//     }
// ];
// let people2= [
//     {
//         name: 'simon'
//     },
//     {
//         name: 'sally'
//     }
// ];
// people.forEach(function (person) {
//     console.log(person.name);
// })
// people2.forEach(function (person) {
//     console.log(person.name);
// })
// people
// .concat(people2)
// .forEach(function (person) {
//     console.log(person.name);
// })

// 2. array.join
// let names = ['shane', 'Alan', 'Osbourne'];
// //console.log(names[0]+ ' ' +names[1]+ ' ' + names[2]);
// console.log(names.join(' '))//names.join(',', '.')
// var help = [
//     'Usage',
//     '    foo-app <input>'
// ];
// if(process.argv[2] === 'help') {
//     console.log(help.join('\n'));
// }
// let name = 'shane osbourne';
// let upper = name.split(' ')
// //console.log(upper)
// .map(x => x.charAt(0).toUpperCase() + x.slice(1))
// .join(' ');
// console.log(upper);

// 3. array.indexOf();
//var family = ['Shane', 'Sally','Kittie', 'Isaac'];
// var kittieExists = family.indexOf('Kittie') > -1;
// if (!kittieExists){
//     family.push('reshma');
// }
//console.log(family.indexOf('Kittie', 1));
// console.log(kittieExists);
// console.log(family)

// var shane = {
//     name: 'shane'
// }
// var sally = {
//     name:'sally'
// }
// var kittie = {
//     name : 'kittie'
// }
// var family = [shane, sally, kittie];
// console.log(family.indexOf(kittie))

// var whitelist = ['.css', '.js','.html'];
// var events = [
//     {
//         file:'css/core.css'
//     },
//     {
//         file:'js/app.js'
//     },
//     {
//         file:'index.html'
//     }
// ]
// var filtered = events.filter(event => {
//     var ext = require('path').extname(event.file);
//     return whitelist.indexOf(ext) >-1;
// })
// console.log(filtered);

//4. slice
//var items = [1,2,3,4,5,6,7];
//var copy =items.slice()
//var copy =items.slice(2, -2);//(start,end)
// copy[0]=100;//[100,2,3,4,5]
//  copy.push(6);//[1,2,3,4,5,6]
// console.log(items);
// console.log(copy);
//object
// var person = {name: 'shane'};
// var items   =[1,person];
// var copy=items.slice();
// copy[1].name = 'sally';
// console.log(items);
// console.log(copy);

//practical example
// var person = {
//     name: 'shane-osbourne'
// };
// //console.log(person.name)
// var filters = {
//     'replaced':x=> x.replace('-', ' '),
//     'uppercase': x => x.toUpperCase()
// };
// var input = 'name | replaced | uppercase'; //SHANE OSBOURNE
// var sections = input.split('|').map(x => x.trim());
// //console.log(sections)
// var refer = person[sections[0]];
// //console.log(refer)
// var output = sections
// .slice(1)
// .reduce((prev, next) => {
//     if(filters[next]){
//         return filters[next].call(null, prev);
//     }
//     return prev;
// }, refer);
// console.log(output);

//5.array.sort
//var items = ['shane', 'silly', 'isaac']
// var items =[10, 20, 30, 2, 5, 50, 3, 111]

// //items.sort()
// items.sort((a, b) => a - b);
// items.sort((a, b) => b - a);
// console.log(items)

// var items = ['shane','kittie', 'silly', 'isaac']
// items.sort((a, b) => a.length - b.length);
// items.sort((a, b) => b.length - a.length);
// console.log(items)

// var lessons = [
// {
//     title: 'Javascript Array methods in depth - concat',
//     views: 1000
// },
// {
//     title: 'Javascript Array methods in depth - slice',
//     views: 1050
// },
// {
//     title: 'Javascript Array methods in depth - join',
//     views: 1025
// },
// ]
// var list = lessons
// .sort ((a,b) => b.views - a.views)
// .map(x => `   <li> ${'thebook'} ${x.title} (${x.views})</li>`)
// .join('\n');
// var output = `<ul> ${"the order"}\n${list}\n</ul>`;
// console.log(output);

//6.array.filter
// var items = [1,2,3,4,5,6,7,8];
// var filtered = items.filter(c => c < 3);
// console.log(filtered)
// console.log(items)
//object
// var people = [
//     {
//         name:'shane',
//         pets: ['cat' , 'dog']
//     },
//     {
//         name:'simon',
//         pets: ['horse']
//     },
//     {
//         name:'ben',

//     },
// ]
// var filtered = people.filter(x => x.pets);
// console.log(filtered)

// let lessons = [
//     {
//         title: 'javascript  Array methods in depth - join',
//          views: 960,
//          tags: ['array', 'join']
//     },
//     {
//         title: 'javascript  Array methods in depth - concat',
//          views: 1050,
//          tags: ['array', 'concat']
//     },
//     {
//         title: 'javascript  Array methods in depth - slice',
//          views: 2503,
//          tags: ['functions', 'slice']
//     },
//     {
//         title: 'javascript  Array methods in depth -bind',
//          views: 2500,
//          tags: ['functions', 'bind']
//     },
// ]
// var minViews = 900;
// var searchTerm = 'array' ;
// var filter = lessons
// .filter(d => d.tags.indexOf(searchTerm) > -1)
// .filter(x => x.views > minViews)
// .filter(d => {
//     d.tags.indexOf(searchTerm) > -1 &&  d.views > minViews


// })
// .sort((a, b) => a.views - b.views)
// .map(x => ` ${"The title is"} <li>${x.title}</li> `)
// .join('\n');
// console.log(` ${"The ul is"} <ul>
// ${filter}
// </ul`);

//7.array.some
// let items = [1, 2, 3, 4, 5, 6];
// let hasFour = items.some(y => (y === 8));
// console.log(hasFour)
// var tasks = [
//     {
//         title: 'Do laundry',
//        completed: true
//     },
//     {
//         title: 'Feed the cat',
//         completed: true
//     },
//     {
//         title: 'Watch the array lessons on egghead.io',
//         completed: true
//     },
//     ];
//     function addTask(title) {
//         if(tasks.some(task => task.title === title)) {
//             return ;
//         }
//         tasks.push({title: title, completed:false});
//     }
//     addTask('Do laundry');
//     console.log(tasks);
// var list = document.querySelector('.task-list');
// list.classList.add(
//     tasks.some(task => task.completed ===false)
//     ? 'task-list--uncompleted'
//     : 'task-list--completed'
// )
// list.innerHTML= tasks
// .map(x => x.completed ? `<s>${x.title}</s>` : x.title)
// .map(x => `<li>${x}</li>`)
// .join('')

//8.array.push
// const pets = ["cat", "dog"];
// const wish = ["parot", "cow", "penguin"]
// pets.push.apply(pets,wish);
//pets.push("parot", "cow");
// console.log(pets);

// const input = document.querySelector('#input')
// const button = document.querySelector('#button')
// const list = document.querySelector('#list')
// const pets = [];
// button.addEventListener("click", function (event) {
//     if(input.value.length > 0){
//         pets.push(input.value);
//         input.value = "";
//         render();
//     }

// })
// function render () {
//     list.innerHTML = pets.map(x => `<li>${x}</li>`).join('');    
// }

// 9.array.map
//const items = [1, 2, 3, 4, 5];
// const items = ["1", "2", "3", "4", "5"];
// const mapped = items.map(function (item){
//     return Number(item);
// //    return item * 2 ;
// })

// console.log(items)
// console.log(mapped)

// const items = ["   shane", "silly"];
//const names = ["shane", "silly"];
// const mapped = items.map(x => x.trim())
// console.log(mapped)
// const mapped = names.map(function (name) {
//     return {
//         firstname: name
//     }
// })
//console.log(mapped)
// mapped.forEach(function (person) {
//     console.log(person.firstname);
// })
// const items = [
//     {
//         firstname: 'shane',
//         lastname: 'Osbourne'
//     },
//     {
//         firstname: 'sally',
//         lastname: 'Osbourne'
//     }
// ]
// const mapped = items.map(x => {
//     return {
//         firstname: x.firstname,
//         lastname: x.lastname,
//         fullname: x.firstname + ' ' + x.lastname
//     }
// })
// mapped.forEach(function (person) {
//     console.log(person.fullname);
// })
//console.log(createHtmlList(['cat']));
// const mapped = items.map(x => x.firstname);
// console.log(createHtmlList(mapped));
// console.log(createHtmlList(['cat', 'dog']));
// function createHtmlList(items) {
//     const listElements = items.map(x => `\n<li> ${x} </li>`).join('');
//     return `<ul>${listElements}\n</ul> `;
//}
const items = [
    {
        active: true,
        firstname: 'shane',
        lastname: 'Osbourne'
    },
    {
        active: true,
        firstname: 'sally',
        lastname: 'Osbourne'
    },
    {
        active: false,
        firstname: 'ben',
        lastname: 'barker'
    }
]
const mapped = items
    .filter(x => x.active)
    .map(x => x.firstname);

console.log(createHtmlList(mapped));
// console.log(createHtmlList(['cat', 'dog']));
function createHtmlList(items) {
    const listElements = items.map(x => `\n<li> ${x} </li>`).join('');
    return `<ul>${listElements}\n</ul> `;
}



