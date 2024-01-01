module.exports = (api, client) => {

    for (let i =0; i < client.onload.length; i++) {
        client.onload[i].onload(api, client);
    };
    
    api.setOptions({ listenEvents: true})
    api.listenMqtt((err, event) => {
        client.events.forrEach((value, key) => {
            client.event.get(key).run(api, event, client)
        });
    })

}