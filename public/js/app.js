$(function () {
  $("[data-controller]").each(function (index, element) {
    var target = $(element);
    var controllerName = target.data().controller;
    var controllerInstance = eval("new " + controllerName + "()");
    controllerInstance.bind(target);
  });
});
