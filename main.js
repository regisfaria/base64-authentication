const apiKey = 'YOUR-API-KEY-HERE';
const apiSecret = 'YOUR-API-SECRET-HERE';
 
const authorization = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');

console.log(`AUTHORIZATION: ${authorization}`)
