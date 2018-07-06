// 4KB RAM
// 1 EOS STAKE NET
// 1 EOS STAKE CPU

USERNAME = memo.split(':')[0]
PUBKEY = memo.split(':')[1]


if (
    account === "eosio.token" &&
    name === "transfer" &&
    to === "nameregister" &&
    quantity.includes(' EOS') &&
    amount > 3.99 &&
    memo.hasNameAndPubKey
) eos.transaction([{
        "account": "eosio",
        "name": "newaccount",
        "authorization": [{
            "actor": "nameregister",
            "permission": "active"
        }],
        "data": {
            "creator": "nameregister",
            "name": USERNAME,
            "owner": {
                "threshold": 1,
                "keys": [{
                    "key": PUBKEY,
                    "weight": 1
                }],
                "accounts": [],
                "waits": []
            },
            "active": {
                "threshold": 1,
                "keys": [{
                    "key": PUBKEY,
                    "weight": 1
                }],
                "accounts": [],
                "waits": []
            }
        }
    },
    {
        "account": "eosio",
        "name": "buyrambytes",
        "authorization": [{
            "actor": "nameregister",
            "permission": "active"
        }],
        "data": {
            "payer": "nameregister",
            "receiver": USERNAME,
            "bytes": 4096
        }
    }, {
        "account": "eosio",
        "name": "delegatebw",
        "authorization": [{
            "actor": "nameregister",
            "permission": "active"
        }],
        "data": {
            "from": "nameregister",
            "receiver": USERNAME,
            "stake_net_quantity": "1.0000 EOS",
            "stake_cpu_quantity": "1.0000 EOS",
            "transfer": 1
        }
    }
])
  
