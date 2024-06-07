const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.post('/naver-token', async (req, res) => {
  const { code, state } = req.body;

  // 네이버 토큰 요청
  const naverTokenURL = 'https://nid.naver.com/oauth2.0/token';
  const naverClientID = 'REACT_APP_NAVER_CLIENT_ID';
  const naverClientSecret = 'REACT_APP_NAVER_REDIRECT_URL';
  const redirectURI = 'http://localhost:3000/callback'; // 콜백 URL

  try {
    const tokenResponse = await axios.post(naverTokenURL, null, {
      params: {
        grant_type: 'authorization_code',
        client_id: naverClientID,
        client_secret: naverClientSecret,
        code,
        state,
        redirect_uri: redirectURI,
      },
    });

    const accessToken = tokenResponse.data.access_token;

    // 여기에서 accessToken을 이용하여 사용자 정보를 얻는 로직을 구현해야 합니다.

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
