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

    $("#myModal").on('hidden.bs.modal', function (e) {
        $("#myModal iframe").attr("src", $("#myModal iframe").attr("src"));
    });

    if(window.location.hash == '#demo-video'){
        $('#play').click();
    }
    
    if(window.location.href == "https://www.strongholdfinancial.com/"){
        $('#warning').click();
    }

    if(window.location.href == "http://www.strongholdfinancial.com/"){
        $('#warning').click();  
    }
    if(window.location.href == "www.strongholdfinancial.com/"){
        $('#warning').click();
    }
    if(window.location.href == "strongholdfinancial.com/"){
        $('#warning').click();
    }
});