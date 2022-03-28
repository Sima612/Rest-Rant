const React = require('react')

function Def(html) {
    return (
        <html>
            <head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.11.0/mdb.min.css" rel="stylesheet"/>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet"/>
            <link rel="stylesheet" href="/css/style.css"></link>
            <title>REST-RANT</title>
            </head>
            <body>
                <div className='wrapper'>
                    <nav>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/places">Places</a>
                            </li>
                            <li>
                                <a href="/places/new">Add Place</a>
                            </li>
                        </ul>
                    </nav>
                    {html.children}

                    <div className='push'></div>
                </div>
                <footer class="bg-light text-center text-white">
                    {/*<!-- Grid container -->*/}
                    <div class="container p-4 pb-0">
                        {/*<!-- Section: Social media -->*/}
                        <section class="mb-4">
                        {/*<!-- Instagram -->*/}
                        <a class="btn btn-primary btn-floating m-1" href="https://www.myperfectresume.com/me/b554-220122160957" role="button"><i class="fab fa-file"></i></a>
                        {/*<!-- Linkedin -->*/}
                        <a class="btn btn-primary btn-floating m-1" href="https://www.linkedin.com/in/rachasima-tran-073808168/" role="button" ><i class="fab fa-linkedin-in"></i></a>
                        {/*<!-- Github -->*/}
                        <a class="btn btn-primary btn-floating m-1" href="https://github.com/Sima612" role="button"><i class="fab fa-github"></i></a>
                        </section>
                    </div>
                </footer>
            </body>
        </html>
    )
}

module.exports = Def