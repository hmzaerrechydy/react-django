function exec(cmd)
{
    const childfork = require('child_process');
    return childfork.exec(cmd);
}

function makeFrontEnd(){
    return exec('cd ../.. && django-admin startapp frontend')
}

makeFrontEnd()