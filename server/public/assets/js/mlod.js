$(document).on('click', '.map-point-sm', function () {
    var show = $(this).data('show');
    $(show).removeClass("hide").siblings().addClass("hide");
});
