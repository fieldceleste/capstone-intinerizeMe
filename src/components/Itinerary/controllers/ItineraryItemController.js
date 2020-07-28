import { extendObservable } from "mobx";
import PointofInterest from "./PointofInterest";

export default class ItineraryItemController {
  constructor(json = null) {
    extendObservable(this, {
      poi: null,
      title: "",
      description: ""
    });
    if (json) this.fromJSON(json);
    return this;
  }

  fromJSON(json) {
    this.title = json.title;
    this.description = json.description;
    if (json.poi) {
      let poi = new PointofInterest();
      poi.fromJSON(json.poi);
      this.poi = poi;
    }
  }
}