let environment = process.env.REACT_APP_ENV;
let base_api_url;
console.log('app customer REACT_APP_ENV==>', process.env.REACT_APP_ENV);
console.log('app environment==>', environment);
if (environment === 'dev') {
    console.log('app environment==>', 'dev branch');
    base_api_url = 'https://asm.japaneast.cloudapp.azure.com';
} else if (environment === 'stg') {
    console.log('app environment==>', 'stg branch');
    base_api_url = 'https://st-amai.aflac.co.jp';
} else if (environment === 'prod') {
    console.log('app environment==>', 'prod branch');
    base_api_url = 'https://amai.aflac.co.jp';
} else if (environment === 'test') {
    console.log('app environment==>', 'test branch');
    base_api_url = 'https://localhost:8090';
} else {
    console.log('app environment==>', 'else branch. default dev');
    base_api_url = 'https://asm.japaneast.cloudapp.azure.com';
}
console.log('app base_api_url=>', base_api_url);
export {
    environment,
    base_api_url
};