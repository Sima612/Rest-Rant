const React = require('react')
const Def = require('../default')

function show(data) {
    let comments = (
        <h3 className='inactive'>
            No comments yet!
        </h3>
    )
    //Adding logic to comments
    if(data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                
                    <div className='col-md-4 border'>
                        <h2 className='rant'>
                            {c.rant 
                            ? 'Rant! 😡' 
                            : 'Rave! 😻'
                            }</h2>
                        <h4>{c.content}</h4>
                        <h3>
                            <strong>- {c.author}</strong>
                        </h3>
                        <h4>Rating: {c.stars}</h4>
                    </div>
                
            )
        })
    }

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
                        
                        <a href={`/places/${data.place.id}/edit`} className='btn btn-warning'>Edit</a>
                            
                        <form action={`/places/${data.place.id}?_method=DELETE`} method="POST">

                            <button type="submit" className='btn btn-danger'>Delete</button>

                        </form>
                        
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
                    <h3><hr />Comments</h3>
                    {comments}
                </div>
                
                {/* COMMENTS FORM */}
                <form action={`/places/${data.place.id}/comment`} method='POST'>
                    <div className='row'>
                        <div className='col-md-12 form-label mb-3'>
                            <label htmlFor="content">Content</label>
                            <input type="textarea" name='content' id='content'
                            className='form-control'/>
                        </div>

                        <div className='col-md-4 form-group'>
                            <label htmlFor="author">Author</label>
                            <input type="text" name='author' id='author'
                            className='form-control'/>
                        </div>

                        <div className='col-md-4 form-group'>
                            <label htmlFor="star-rating">Star Rating</label>
                            <input type="range" name='star-rating' id='star-rating' min={1} max={5}
                            className='form-range'/>
                        </div>

                        <div className='col-md-4'>
                            <label className='form-check-label' htmlFor="rant"> Rant </label>
                            <input type="checkbox" name='rant' id='rant' className='form-check-input'/>
                        </div>
                        
                        <div className='col-md-12'>
                            <input className='btn btn-primary' type="submit" value='Add Comment'
                            />
                        </div>
                    </div>
                </form>
                
            </main>
        </Def>
    )
}

module.exports = show
