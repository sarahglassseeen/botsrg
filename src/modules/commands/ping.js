module.exports.config = {
    name: "ping",
    version: "1.0.0",
    creadit: "  Sarah",
    description: 'Pong!',
    usage: ''
  }
  
  module.exports.run =  function( api, event, args, client ) {
    
  }
  
  module.exports.noprefix = function ( api, event, args, client ) {
    
  }
  
  module.exports.onload = function (api, client) {
    
    console.log('Onload!')
  }