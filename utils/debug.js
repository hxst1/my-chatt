const red = '\x1b[31m%s\x1b[0m'
const green = '\x1b[32m%s\x1b[0m'
const yellow = '\x1b[33m%s\x1b[0m'

const debug = (message, prop) => {
  let code = message.split('/')[0]
  let msg = message.split('/')[1]

  if(msg && prop){
    console.log('\x1b[36m%s\x1b[0m', '[DEBUG] !!!! please enter a message or a prop message, both are not valid !!!!')
  } else {
    switch (code) {
      case 'r':
        console.log(red, `[DEBUG]: ${msg || prop}`)
        break;
      case 'red':
        console.log(red, `[DEBUG]: ${msg || prop}`)
        break;
      case 'g':
        console.log(green, `[DEBUG]: ${msg || prop}`)
        break;
      case 'green':
        console.log(green, `[DEBUG]: ${msg || prop}`) 
        break;
      case 'y':
        console.log(yellow, `[DEBUG]: ${msg || prop}`)
        break;
      case 'yellow':
        console.log(yellow, `[DEBUG]: ${msg || prop}`)
        break;
      default:
        console.log(`[DEBUG] ${msg || prop}`)
        break;
    } 
  }
}

export default debug
