const db = require('../models')

//LOOKING UP EXISTING PLACE IN DATABASE
async function seed() {
    // GETTING THE PLACE
    let place = await db.Place.findOne({
        name: 'Taste-Tea Rolls'
    })

    //CREATING FAKE SAMPLE COMMENT
    let comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommended'
    })
    //ADDING THAT COMMENT TO PLACE'S COMMENT ARRAY
    place.comments.push(comment.id)

    //SAVE THE PLACE NOW THAT IT HAS COMMENT
    await place.save()

    //EXIT THE PROGRAM
    process.exit()
}

seed()