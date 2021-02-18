$(function(){
        //we select all elements with class panel
        const panels=$('.panel');

    //for each panel which is clicked 
        //we remove active classes
        //and add class active to this panel 
    panels.each(function(){
       $(this).on('click',function(){
            removeActiveClasses();
            $(this).addClass('active');
        });
    });

    //removes active classes
    function removeActiveClasses(){
        panels.each(function(){
            $(this).removeClass('active');
        });
}
})





