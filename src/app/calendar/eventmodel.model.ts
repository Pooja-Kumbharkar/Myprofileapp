export class Eventmodel {
private eventdetails : String[] = []

constructor()
{
}

setEventDetails(eventdetails : String[])
    {
        this.eventdetails = eventdetails;
    }
getEventDetails() :String[]
{
    return this.eventdetails;
}

}

