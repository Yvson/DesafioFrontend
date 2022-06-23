class TokenService {

    getLocalAccessToken():string {
        const accessToken:string = String(window.localStorage.getItem('ACCESS_TOKEN'));
        return accessToken;
    }

    updateLocalAccessToken(token:string) {
        window.localStorage.setItem('ACCESS_TOKEN', token);
    }

  }

export default new TokenService();