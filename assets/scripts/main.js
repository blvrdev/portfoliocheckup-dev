$(document).ready(function(){
    if(backstretch_images){
        $.each(backstretch_images, function(idx, val){
            var target = val.target;
            var image = val.image;
            $(target).backstretch(image);
        });
    }

    new WOW().init();

    function centerModal() {
        $(this).css('display', 'block');
        var $dialog = $(this).find(".modal-dialog");
        var offset = ($(window).height() - $dialog.height()) / 2;
        // Center modal vertically in window
        $dialog.css("margin-top", offset);
    }

    $('#myModal').on('show.bs.modal', centerModal);
    $(window).on("resize", function () {
        $('.modal:visible').each(centerModal);
    });

    $('#myModal2').on('show.bs.modal', centerModal);
    $(window).on("resize", function () {
        $('.modal:visible').each(centerModal);
    });
	
	$('#myModal3').on('show.bs.modal', centerModal);
    $(window).on("resize", function () {
        $('.modal:visible').each(centerModal);
    });

    $("#myModal").on('hidden.bs.modal', function (e) {
        $("#myModal iframe").attr("src", $("#myModal iframe").attr("src"));
    });

    if(window.location.hash == '#demo-video'){
        $('#play').click();
    }
    
    var current_domain = document.domain.replace('www.','');    
    if(current_domain == 'strongholdfinancial.com'){
        $('#warning-modal').modal('show');
    }
    
    $('#nav-demo-link').click(function(e){
        e.preventDefault();
        $('html, body').animate({ scrollTop: $('#demo_video').offset().top - $('.nav').height() });
    });
});