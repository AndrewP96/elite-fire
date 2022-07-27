$(document).ready(function(){
    $('.variants__slider').slick();
    $('.ready__left-block-slider').slick();
    $('.ready__right-block-slider').slick();
    $('.creation__slider').slick({
        dots: true,
    });

    $.each($('.creation__checkbox-one'), function(index, val){
        if($(this).find('input').prop('checked')==true){
            $(this).addClass('active');
        }
    });
    $(document).on('click', '.creation__checkbox-one', function(event){
        if($(this).hasClass('active')){
            $(this).find('input').prop('checked',false);
        }else{
            $(this).find('input').prop('checked',true);
        }
        $(this).toggleClass('active');

        return false;
    })
});
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
}