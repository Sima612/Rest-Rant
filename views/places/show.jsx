const React = require('react')
const Def = require('../default')

function show(data) {
    return (
        <Def>
            <main>
                <h1>Restaurant</h1>
                <div className='row'>
                    <div className='col-md-5'>
                        <h2>
                            {data.place.name}
                        </h2>
                        
                        <h2>Rating</h2>
                        <p>Not Rated</p>
                        
                        <h2>Description</h2>
                        <h3>
                            {data.place.showEstablished()}
                        </h3>
                        <h4>
                            Serving {data.place.cuisines}
                        </h4>
                        <div className='button'>
                            <a href={`/places/${data.id}/edit`} className='btn btn-warning'>Edit</a>
                            
                            <form action={`/places/${data.id}?_method=DELETE`} method="POST">
                                <button type="submit" className='btn btn-danger'>
                                    Delete
                                </button>
                            </form>
                        </div>
                    </div>
                        
                    <div className='col-md-5'>
                        <img className='img-fluid'
                        src={data.place.pic} alt={data.place.name} />

                        <h3>
                            Located in {data.place.city}, {data.place.state}
                        </h3>
                        
                    </div>

                </div>

                    <div>
                        <h3>Comments</h3>
                        <p>No comments yet!</p>
                    </div>
                
                

            </main>
        </Def>
    )
}

module.exports = show