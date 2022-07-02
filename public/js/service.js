class BearsService {
  constructor() {
    var self = this;

    self.getBears = function () {
      return $.ajax("/api/bears");
    };

    return self;
  }
}
