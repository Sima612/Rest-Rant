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
                        
                        <h3>Rating</h3>
                        <p>Not Rated</p>
                        
                        <h3>Description</h3>
                        <p>
                            Located in {data.place.city}, {data.place.state}, and serving {data.place.cuisines}
                        </p>
                    </div>
                        
                    <div className='col-md-5'>
                        <img className='img-fluid'
                        src={data.place.pic} alt={data.place.name} />
                    </div>

                    <div>
                        <h3>Comments</h3>
                        <p>No comments yet!</p>
                    </div>
                </div>
                
                <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
                    Edit
                </a>
                <form action={`/places/${data.id}?_method=DELETE`} method="POST">
                    <button type="submit" className='btn btn-danger'>
                        Delete
                    </button>
                </form>

            </main>
        </Def>
    )
}

module.exports = show