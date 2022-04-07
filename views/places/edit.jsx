const React = require('react')
const Def = require('../default')

function Edit(data) {
    return (
        <Def>
            <main>
                <h1>Edit Place</h1>
                
                <form action={`/places/${data.id}?_method=PUT`} method='POST'>
                    
                    <div className='row'>
                        <div className='form-group col-md-6'>
                            <label htmlFor="name">Place Name</label>
                            <input className='form-control' id="name" name="name"  value={data.place.name} required/>
                        </div>
                        
                        <div className='form-group col-md-6'>
                            <label htmlFor="pic">Place Picture</label>
                            <input type="url" id="pic" name="pic" className='form-control'/>
                        </div>
                        
                        <div className='form-group col-md-6'>
                            <label htmlFor="state">State</label>
                            <select id="state" name="state" className='form-control'>
                                <option value=""></option>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                            </select>
                        </div>
                        
                        <div className='form-group col-md-6'>
                            <label htmlFor="city">City</label>
                            <input id="city" name="city" className='form-control'/>
                        </div>
                        
                        <div className='form-group col-md-12'>
                            <label htmlFor="cuisines">Cuisines</label>
                            <input id="cuisines" name="cuisines" className='form-control' required/>
                        </div>
                    </div>
                    <br />
                    <input type="submit" value="Add New Place" className='btn btn-primary'/>
                    
                </form>

            </main>
        </Def>
    )
}

module.exports = Edit