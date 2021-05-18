export class TrainModel {
    
    constructor(
        public id?: string,
        public trainName?: string,
        public trainNumber?: string,
        public date?: string,
        public from?: string,
        public to?: string,
        public departureTime?: string,
        public arrivalTime?: string,
        public totalSeats?: number,
        public bookedSeats?: number,
        public price?: number
    ) {

    }

}