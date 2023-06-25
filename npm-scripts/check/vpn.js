const ping = require('ping')
const host = '192.168.10.7'

const checkVpn = async () => {
  try {
    let res = await ping.promise.probe(host)
    if ( res && res.alive ) {
      console.log('VPN接続を確認')
      return true
    } else {
      console.error('VPN接続してください')
      process.exit(1)
    }
  } catch (error) {
    console.error('VPN接続してください')
    process.exit(1)
  }
}

checkVpn()
