export class Calendartaskcomponent {
    crNumber : string;
    eventName : string;
    summary : string;
    details : string;
    author : string;
    timerange : string;
      startdate : string;
      enddate : string;
    host : any[];


    constructor( private chngreqno : string , private alleventname : string , private summarydet : string , private desdetails : string ,private authordet: string , private timerangedet : string , private startdatedet : string , private enddatedet : string , hostdet : any[]   )
    {
        this.crNumber = chngreqno;
        this.eventName = alleventname; 
        this.summary =  summarydet;
        this.details = desdetails;
        this.author =authordet;
        this.timerange = timerangedet;
        this.startdate = startdatedet;
        this.enddate = enddatedet;
        this.host = hostdet;


    }

}

