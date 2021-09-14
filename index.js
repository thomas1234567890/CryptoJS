


//// Get the text from _text_input and hash it ✔️
//// Then log the hashed value ✔️
//// Then decrypt the hashed value ✔️
//// Then log the decrypt value ✔️
import './style.css';
const CryptoJS = require('./_offline_crypto');

(function() {

  //// hash one value then decrypt it
  document.getElementById('_btn_hash').addEventListener('click', () => {
    let _text = document.getElementById('_text').value.toString();

    if (_text != '') {
      console.log(`start : ${_text}`)
      var encrypted = CryptoJS.AES.encrypt(`${_text}`, "Secret Passphrase");
​       console.log(`encrypted : ${encrypted.toString()}`)
      var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
      console.log(`decrypted : ${decrypted.toString(CryptoJS.enc.Utf8)}`)
    }
  });

})();
