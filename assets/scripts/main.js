$(document).ready(function(){
    if(backstretch_images){
        $.each(backstretch_images, function(idx, val){
            var target = val.target;
            var image = val.image;
            $(target).backstretch(image);
        });
    }
});