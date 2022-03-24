const React = require('react')
const Def = require('./default')

function error404() {
    return (
        <Def>
            <main>
                <img src="/images/error404.png" width={1000} height={500} alt="Error 404" />
            </main>
        </Def>
    )
}

module.exports = error404