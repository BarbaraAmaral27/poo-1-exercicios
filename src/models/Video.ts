export class Video{
   
    constructor(
        private id: string,
        private title: string,
        private duration: number,
        private uploadAt: string
    ){}

    public getId(): string {
        return this.id;
    }
    public setId(value: string):void{
        this.id = value;
    }
    public getTitle(): string{
        return this.title;
    }
    public setTitle(value:string):void {
        this.title = value;
    }
    public getDuration(): number{
        return this.duration;
    }
    public setDuration(value:number):void {
        this.duration = value;
    }
    public getUploadAT(): string{
        return this.uploadAt;
    }
    public setUploadAT(value:string):void {
        this.uploadAt = value;
    }
}

    const video2 = new Video(
        "u003",
        "Astrodev",
        120,
        "2023-01-30 10:02:00"
    )

    console.table(video2)
    console.log("Id video:", video2.getId());
    video2.setTitle("Estudos Node")
    console.table(video2)
    

