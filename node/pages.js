function home(){
    return`
    <html>
    <head>
    <title> Home</title>
    </head>
    <body>
    ${menu()}
    <h1>Home</h1>
    <p> Welcome to the home! </p>
    </body>
    </html>`;
};

function About(){
    return`
    <html>
    <head>
    <title> About</title>
    </head>
    <body>
    ${menu()}
    <h1>About</h1>
    <p> Welcome to the about as! </p>
    <p> running...</p>
    </body>
    </html>`;
};

function Contact(){
    return`
    <html>
    <head>
    <title> contact</title>
    </head>
    <body>
    ${menu()}
    <h1>Contact</h1>
    <p> Welcome to the contact! </p>
    </body>
    </html>`;
};

function nopage(){
    return`
    <html>
    <head>
    <title> page not found</title>
    </head>
    <body>
    ${menu()}
    <p> Page not found! </p>
    </body>
    </html>`;
};
function menu(){
    return`
    <nav><a href ="/">home</a>
    <a href ="/about">About</a>
    <a href ="/contact">contact</a>
    <a href ="/nopage">Nopage</a>
    </nav>`;
}

export default{
    home,About,Contact,nopage,menu
}