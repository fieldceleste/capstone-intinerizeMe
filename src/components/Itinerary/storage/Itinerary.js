import { extendObservable, computed } from "mobx";
import { leadingZero, monthName } from "../ApiControls";
import ItineraryItem from "./ItineraryItem";

export default class Itinerary{
  date = null;
  index = 0;

  constructor(index, json = null) {
    extendObservable(this, {
      items: [],
      dateString: computed(() => {
        if (!this.date) return "";
        return (
          this.date.getFullYear() +
          "-" +
          leadingZero(this.date.getMonth() + 1) +
          "-" +
          this.date.getDate()
        );
      }),
      humanDateString: computed(() => {
        if (!this.date) return "";
        return this.date.getDate() + " " + monthName(this.date.getMonth());
      })
    });

    this.index = index;
    if (json) this.fromJSON(json);

    return this;
  }

  fromJSON(json) {
    this.date = new Date(json.date);
    this.items.clear();
    json.itinerary_items.forEach(item => {
      let dayPlanItem = new ItineraryItem(item);
      this.items.push(dayPlanItem);
    });
  }
}