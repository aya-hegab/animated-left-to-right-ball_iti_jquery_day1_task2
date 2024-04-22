// import $ from "jquery";

var tmp = -1;
// var currentPX;
// var currentPXSize;
// var newCurrentPX;
// var left = function (pX) {
var left = function () {
  tmp = 1;
  // pX = 700 - Number(currentPX);
  // console.log(pX);
  $("#child").animate(
    {
      // left: `${pX}px`,
      left: "700px",
    },
    2000,
    "linear",
    right
  );
};

var right = function () {
  tmp = 0;
  $("#child").animate(
    {
      left: "0px",
    },
    2000,
    "linear",
    left
  );
};

$("input").click(function () {
  if ($(this).val() == "animate") {
    $(this).val("stop");
    // tmp == -1 ? left(currentPX) : tmp == 1 ? left(currentPX) : right();
    tmp == -1 ? left() : tmp == 1 ? left() : right();
  } else {
    $(this).val("animate");
    $("#child").stop();
    // currentPXSize = $("#child").css("left").length;
    // currentPX = $("#child")
    //   .css("left")
    //   .substring(0, currentPXSize - 2);
    // console.log(currentPX);
  }
});
