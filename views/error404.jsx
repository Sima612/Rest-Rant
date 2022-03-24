const React = require('react')
const Def = require('./default')

function error404() {
    return (
        <Def>
            <main>
                <img src="https://freefrontend.com/assets/img/html-funny-404-pages/HTML-Yeti-404-Page.png" width={1000} height={500} alt="Error 404" />
            </main>
        </Def>
    )
}

module.exports = error404