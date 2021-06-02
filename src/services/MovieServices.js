import http from './BaseService';

class MovieServices {

    getPlayList() {
        const baseUrl = 'https://gist.githubusercontent.com/mohammedhammoud/cf7aca4c87462cd061d4f2b1184392a8/raw/ea14389e293b478bdbace627d776ba6f7d735f14/teliatestdata.json';
        return http.get(baseUrl);
    }
}

export default new MovieServices();