import axios from'axios'
class AxiosService {
    constructor () {
        const instance = axios.create();
    }
    handleSucces (response) {
        return response;
    }
    handeError(error){
        return Promise.reject(error);
    }
    get(url){
        return this.instance.get(url);
    }
}
export default new AxiosService();