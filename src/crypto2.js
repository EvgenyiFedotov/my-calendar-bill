import sha3 from 'crypto-js/sha3';
import rc4 from 'crypto-js/rc4';
import encUtf8 from 'crypto-js/enc-utf8';

const hash = sha3('1234567', { outputLength: 512 });

const encrypted = rc4.encrypt('Message 22 1231', hash);
console.log(encrypted);

const decrypted = rc4.decrypt(encrypted, hash);
console.log(decrypted);
console.log(decrypted.toString(encUtf8));
