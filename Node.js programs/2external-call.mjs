import https from 'node:https';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const url = 'https://www.google.com';

https.get(url, (res) => {
  const { statusCode, headers } = res;
  console.log('statusCode:', statusCode);
  console.log('headers:', headers);

  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('Response:', data);
  });

}).on('error', (e) => {
  console.error('Error:', e.message);
});