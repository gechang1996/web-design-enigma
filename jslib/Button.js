function Button(sel) {
    this.my_enigma=$(sel);

    console.log("start button");
    for (var i =0;i<=25;i++){
        this.configure(i);
    }
    this.ResetConfigure();
    // console.log($(this.my_enigma.find("button")));
}



Button.prototype.ResetConfigure=function(){
    var gc=$("body").find('input[name="reset"]');

    gc.click(function (event) {
        event.preventDefault();
        $.ajax({
            url: "post/post.php",
            data:{reset:"Reset"},
            method: "POST",
            success: function(data) {
                // console.log(data);
                var json=parse_json(data);

                $(".abc").html(json.body);
                $(".cba").html(json.rotor);


            },
            error: function(xhr, status, error) {
                // Error
                that.message("<p>Error: " + error + "</p>");

            }
        });


    });
}



Button.prototype.configure=function(ndx){
    var button=$(this.my_enigma.find("button").get(ndx));
    button.children("span").css("color","white");
    var that=this;


    // console.log(button);



    button.click(function(event){
        event.preventDefault();
    });


    button.mousedown(function(event) {
        event.preventDefault();
        button.children("span").css("color","red");
        var pressed=button.val();
        console.log(button.val());
        $.ajax({
            url: "post/post.php",
            data:{key:pressed},
            method: "POST",
            success: function(data) {
                // console.log(data);
                var json=parse_json(data);


                $(".abc").html(json.body);
                $(".cba").html(json.rotor);
            },
            error: function(xhr, status, error) {
                // Error
                that.message("<p>Error: " + error + "</p>");

            }
        });
    });
    button.mouseup(function(event) {
        event.preventDefault();
        // console.log("aaa");
        button.children("span").css("color","white");
        // button.parent().removeClass("pressed");


    });
}

Button.prototype.message = function(message) {
    // do something...

    var div=$(this.my_enigma+" .message");


    div.show();
    div.html(message);
    div.delay(2000).fadeOut(1000);

}