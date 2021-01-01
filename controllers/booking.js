const Booking = require('../models/booking')
const bookingRouter =require('express').Router()


///create a booking
bookingRouter.post('/create', function (request,response){

    const studentID=request.body.studentID
    const goingDate=request.body.goingDate
    const returnDate=request.body.returnDate
    const reason =request.body.reason

    const newBooking = new Booking({
    studentID:studentID,
    goingDate:goingDate,
    returnDate:returnDate,
    reason :reason

    })
    newBooking.save(function (err, savedBooking){
        if(err){
            console.log(err)
            return response.status(500).send()

        }
        return response.status(200).send()
    })

})





////get a booking




//cancel a booking




















module.exports = bookingRouter