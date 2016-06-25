import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return d3.csv("data/all.csv")
      .row(function(d) {
        if (d["Object"] === "") return;
        return {
          ldMinimum: +(d["CA DistanceMinimum(LD/AU)"].split("/")[0]),
          ldNominal: +(d["CA DistanceNominal(LD/AU)"].split("/")[0]),
          closeApproach: moment(d["Close-Approach (CA) Date (TDB)YYYY-mmm-DD HH:MM ± D_HH:MM"].split("±")[0].trim(), "YYYY-MMMM-DD HH:mm"),
          h: +d["H(mag)"],
          name: d["Object"]
        }
      });
  }
});
