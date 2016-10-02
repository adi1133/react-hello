import run from './run'
import bundle from './bundle'

async function start() {
    await run(bundle);
    require('../build/server')
}

export default start