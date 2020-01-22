import app from './App'
import * as config from "./config/config"

const conf = new config.Config.Settings();

const port = conf.getConfInfo('node_port');

app.listen(port, (err) => {
    if (err) {
        return console.log(err)
    }

    return console.log(`server is listening on ${port}`)
});

var cmd=require('node-cmd');

cmd.get(
    'pwd',
    function(err, data, stderr){
        console.log('the current working dir is : ',data)
    }
);