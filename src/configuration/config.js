const base_url = '/apigw/va2roleplay/mvp2/webapp';
let backend_url = '';
let translate_server_url = '';

const ENV = process.env.REACT_APP_CURRENT_ENV;
const PATH = process.env.CURRENT_BASE_URL;

if(PATH){
    backend_url = PATH;
}else{
    if(ENV === 'prod'){
        backend_url = "https://aflac.platformerfuji.com/apigw/va2roleplay/mvp2/webapp/backend/robot-trainer";
        translate_server_url = "https://aflac.platformerfuji.com";
    }else if(ENV === 'stage'){
        backend_url = "https://st-aflac.platformerfuji.com/apigw/va2roleplay/mvp2/webapp/backend/robot-trainer";
        translate_server_url = "https://st-aflac.platformerfuji.com";
    } else if(ENV === 'dev'){
        backend_url = "https://va2-mvp2-dev.japaneast.cloudapp.azure.com/backend/robot-trainer";
        translate_server_url = "https://va2-mvp2-dev.japaneast.cloudapp.azure.com";
    }else {
        // backend_url = "http://localhost:9090";
        // translate_server_url = "http://localhost:3001";
        backend_url = "https://va2-mvp2-dev.japaneast.cloudapp.azure.com/backend/robot-trainer";
        translate_server_url = "https://va2-mvp2-dev.japaneast.cloudapp.azure.com";
    }
}

export default backend_url;

export { base_url, backend_url, translate_server_url };
