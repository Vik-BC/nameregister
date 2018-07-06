# Nameregister - EOS account creator

**This service based on a simple scheme - you send 4 EOS from exchange, in memo specify the `name:public-key`. BOT nameregister creates an account with your name and key and you can use new account!
You must generate the key pair separately and don't transfer the private key! Only public**

To create an account you need:

1) Generate new EOS key pair - Public and private key. You can use `get-scatter.com`. **Don't send anyone your private key!**
2) Send EOS from exchange to address: `nameregister` with a special memo:

## For example:
### `mylogin12345:EOS8EnVfm6GakLJjDs6V2R514SWbcbf1hqMu2RLo1Hy32eMAJDsgb`

`mylogin12345` - login which you want (only 12 symbol no more no less) Only letters and only this numbers - 1,2,3,4,5.
`EOS8EnVfm6GakLJjDs6V2R514SWbcbf1hqMu2RLo1Hy32eMAJDsgb` - Your generated PUBLIC key. Make sure that you have a private pair to this key.

login and key must be separated by a symbol `:`

## **IMPORTANT !!!**

* Make sure you don't send a private key.
* Make sure your username is not yet employed! You can search for a free name on the https://eospark.com/MainNet/account
* Make sure that you follow the 12-character rule and do not use forbidden characters.
* You must send at least 4 EOS + memo with login:pubkey.

After you send 4 EOS, the bot immediately tries to create an account for you. 
The conditions for creating an account are coded here [/conditions.js](https://github.com/vikxx/nameregister/blob/master/conditions.js)
You can check the `nameregister` account activity immediately after sending the coins https://eospark.com/MainNet/account/nameregister


**For sure, there may be typos from users, for example you send the wrong name and bot can't create an account automatically.
In this case Your tokens will not be lost! - Just write to me in telegram https://t.me/vikxx and I'll create a new account for you manually.**

## 🖖 Contact & Support
https://t.me/chain_cf chat 
https://t.me/cryptoporn chat 
https://t.me/vikxx pm 
github.com/vikxx 
steemit.com/@vikx 
golos.io/@vik 
