const client = require('./client');

async function init() {
    // await client.set ("msg:5", "Hello World");
    await client.expire("msg:5", 10);
    const result = await client.get("msg:5");
    console.log(result);
}

init();