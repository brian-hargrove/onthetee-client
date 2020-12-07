let APIURL = '';

switch(window.location.localhost) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:3000';
        break;
    case 'onthetee.herokuapp.com':
        APIURL = 'https://onthetee.herokuapp.com'
}

export default APIURL;