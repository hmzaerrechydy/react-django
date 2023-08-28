function exec(cmd)
{
    const childfork = require('child_process');
    return childfork.exec(cmd);
}

exec('mv frontend ../..')