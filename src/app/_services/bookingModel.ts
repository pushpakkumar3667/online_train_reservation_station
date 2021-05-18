export class BookingFormModel
{
    constructor(
        public id?:string,
        public noOfSeats?: string,
        public trainNumber?: string,
        public trainName?: string,
        public journeyDate?: string,
        public source?: string,
        public destination?: string,
        public boardingTime?: string,
        public passengerName?: string,
        public age?: string,
        public gender?: string,
        public phonenumber?: string,
        public email?:string,
        public ticketCost?:string
    )
    {

    }
}