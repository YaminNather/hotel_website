export default class RoomInfo {
  public constructor(imageURL: string, roomType: string, cost: number) {
    this.imageURL = imageURL;
    this.roomType = roomType;
    this.cost = cost;
  }


  public imageURL: string;
  public roomType: string;
  public cost: number;
}