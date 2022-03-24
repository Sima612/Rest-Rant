const React = require('react')
const Def = require('./default')

function home() {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/donuts.jpeg" width={500} alt="donuts on tray"></img>
                </div>
                <div>
                    Photo by <a href="https://unsplash.com/@sheri_silver?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">sheri silver</a> on <a href="https://unsplash.com/s/photos/free-food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
                </div>
                <a href="/places">
                    <button className='btn-primary'>Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home