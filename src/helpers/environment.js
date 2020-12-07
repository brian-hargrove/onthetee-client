let APIURL = '';

switch(window.location.localhost) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:3000';
        break;
    case 'ontheteeclient.herokuapp.com':
        APIURL = 'https://onthetee.herokuapp.com'
}

export default APIURL;