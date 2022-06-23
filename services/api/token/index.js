class TokenService {

    getLocalAccessToken() {
        const accessToken = process.env['ACCESS_TOKEN'] || '';
        return accessToken;
    }

    updateLocalAccessToken(token) {
        process.env['ACCESS_TOKEN'] = token;
    }

  }

module.exports = new TokenService();