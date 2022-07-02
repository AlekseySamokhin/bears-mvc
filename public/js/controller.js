class BearsController {
  constructor() {
    var self = this;

    var bearsSvc = new BearsService();

    self.bind = function (element) {
      element.find('[data-role="show-bears-button"]').click(showBearsClick);
      self.display = element.find('[data-role="bears-display"]');
    };

    function showBearsClick() {
      self.display.html("");
      bearsSvc.getBears().then(showBears);
    }

    function showBears(data) {
      $(data).each(function (index, bear) {
        self.display.append("<li>" + bear.name + "</li>");
      });
    }

    return self;
  }
}
