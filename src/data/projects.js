
const snakeImage = ['https://i.ibb.co/VWcds5PH/computador.png','https://i.ibb.co/ynQp1gW1/telefono-horizontal.jpg','https://i.ibb.co/wFfd2VNp/telefono-vertical.jpg'] 
const supermarket_list = ['https://i.ibb.co/WpGhz5mC/computador.png', 'https://i.ibb.co/dRNNhpB/table.png', 'https://i.ibb.co/fGYHGDsn/telefono.jpg'];
const gif_app = ['https://i.ibb.co/y3N3PJr/escritorio.png', 'https://i.ibb.co/S4f9yGBp/telefono-horizontal.jpg', 'https://i.ibb.co/SwxgJTDr/telefono-vertical.jpg'];


const projects = 
    [ 
        { 
            id: 1,
            project_file: snakeImage,
            name_project: 'Snake', 
            name_technology: ['HTML, ', 'CSS, ', 'JavaScript '], 
            project_link: 'github.com/ManuelCode98/snake',
            web_url: ''
        },
        { 
            id: 2,
            project_file: supermarket_list,
            name_project: 'Supermarket List', 
            name_technology: ['HTML, ', 'CSS, ', 'JavaScript, ', 'React, ', 'NodeJS, ', 'Prisma, ', 'Postgres'], 
            project_link: 'github.com/ManuelCode98/01-supermarket-list-frontend',
            web_url: ''
        },
        { 
            id: 3,
            project_file: gif_app,
            name_project: 'Gif App', 
            name_technology: ['HTML, ', 'CSS, ', 'JavaScript, ', 'React, '], 
            project_link: 'github.com/ManuelCode98/Search-For-Gifs',
            web_url: 'gifapp98.netlify.app/'
        }, 

    ];


export {
    projects
}