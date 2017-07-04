/**
 * Created by kk on 16/7/20.
 */
$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['firstPage', 'secondPage', '3rdPage','4thPage','5thPage'],
        sectionsColor: ['source/bg.jpg', '#1BBC9B', '#82EBFF',"#f90f0f","fde000"],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['First page', 'Second page','Third page','fourth page','Fifth page']

    });


    $(".header_txt").mouseenter(function () {
        $("#header_f").text("Resume");
        $("#header_p").text("移动/web开发工程师");
    }).mouseleave(function () {
        $("#header_f").text("F2E");
        $("#header_p").text("个人简历");
    });

    $(".intro_img").mouseenter(function () {

        $(".intro_img").fadeIn("slow",function () {
            $(".intro_img").attr("src","source/heade01.jpg");

        });
    }).mouseleave(function () {
               $(".intro_img").attr("src","source/head.jpg");

    });

    $("#skill_icon_1").click(function () {

        $("#skill_explain_1").fadeToggle(1000);
        $("#skill_explain_2").fadeOut(1000);
        $("#skill_explain_3").fadeOut(1000);
        $("#skill_explain_4").fadeOut(1000);

        // $("#skill_box1 .skill_arrow").css({
        //
        //     "transform":"rotate(180deg)",
        //     "-ms-transform":"rotate(180deg)",		/* IE 9 */
        //     "-webkit-transform": "rotate(180deg)",	/* Safari and Chrome */
        //     "-o-transform": "rotate(180deg)",		/* Opera */
        //     "-moz-transform": "rotate(180deg)"
        // });

    });

    $("#skill_icon_2").click(function () {

        $("#skill_explain_2").fadeToggle(1000);

        $("#skill_explain_1").fadeOut(1000);
        $("#skill_explain_3").fadeOut(1000);
        $("#skill_explain_4").fadeOut(1000);

        // $("#skill_box2 .skill_arrow").css({
        //
        //     "transform":"rotate(180deg)",
        //     "-ms-transform":"rotate(180deg)",		/* IE 9 */
        //     "-webkit-transform": "rotate(180deg)",	/* Safari and Chrome */
        //     "-o-transform": "rotate(180deg)",		/* Opera */
        //     "-moz-transform": "rotate(180deg)"
        // });
        //
        // $("#skill_box1 .skill_arrow").css({
        //     "transform":"rotate(-180deg)",
        //     "-ms-transform":"rotate(-180deg)",		/* IE 9 */
        //     "-webkit-transform": "rotate(-180deg)",	/* Safari and Chrome */
        //     "-o-transform": "rotate(-180deg)",		/* Opera */
        //     "-moz-transform": "rotate(-180deg)"
        // });
        // $("#skill_box3 .skill_arrow").css({
        //     "transform":"rotate(-180deg)",
        //     "-ms-transform":"rotate(-180deg)",		/* IE 9 */
        //     "-webkit-transform": "rotate(-180deg)",	/* Safari and Chrome */
        //     "-o-transform": "rotate(-180deg)",		/* Opera */
        //     "-moz-transform": "rotate(-180deg)"
        // });
        // $("#skill_box4 .skill_arrow").css({
        //     "transform":"rotate(-180deg)",
        //     "-ms-transform":"rotate(-180deg)",		/* IE 9 */
        //     "-webkit-transform": "rotate(-180deg)",	/* Safari and Chrome */
        //     "-o-transform": "rotate(-180deg)",		/* Opera */
        //     "-moz-transform": "rotate(-180deg)"
        // });

    });
    $("#skill_icon_3").click(function () {

        $("#skill_explain_3").fadeToggle(1000);

        $("#skill_explain_1").fadeOut(1000);
        $("#skill_explain_2").fadeOut(1000);
        $("#skill_explain_4").fadeOut(1000);

        // $("#skill_box3 .skill_arrow").css({
        //
        //     "transform":"rotate(180deg)",
        //     "-ms-transform":"rotate(180deg)",		/* IE 9 */
        //     "-webkit-transform": "rotate(180deg)",	/* Safari and Chrome */
        //     "-o-transform": "rotate(180deg)",		/* Opera */
        //     "-moz-transform": "rotate(180deg)"
        // });
        //
        // $("#skill_box1 .skill_arrow").css({
        //     "transform":"rotate(-180deg)",
        //     "-ms-transform":"rotate(-180deg)",		/* IE 9 */
        //     "-webkit-transform": "rotate(-180deg)",	/* Safari and Chrome */
        //     "-o-transform": "rotate(-180deg)",		/* Opera */
        //     "-moz-transform": "rotate(-180deg)"
        // });
        // $("#skill_box2 .skill_arrow").css({
        //     "transform":"rotate(-180deg)",
        //     "-ms-transform":"rotate(-180deg)",		/* IE 9 */
        //     "-webkit-transform": "rotate(-180deg)",	/* Safari and Chrome */
        //     "-o-transform": "rotate(-180deg)",		/* Opera */
        //     "-moz-transform": "rotate(-180deg)"
        // });
        // $("#skill_box4 .skill_arrow").css({
        //     "transform":"rotate(-180deg)",
        //     "-ms-transform":"rotate(-180deg)",		/* IE 9 */
        //     "-webkit-transform": "rotate(-180deg)",	/* Safari and Chrome */
        //     "-o-transform": "rotate(-180deg)",		/* Opera */
        //     "-moz-transform": "rotate(-180deg)"
        // });

    });
    $("#skill_icon_4").click(function () {

        $("#skill_explain_4").fadeToggle(1000);

        $("#skill_explain_1").fadeOut(1000);
        $("#skill_explain_2").fadeOut(1000);
        $("#skill_explain_3").fadeOut(1000);

        // $("#skill_box4 .skill_arrow").css({
        //
        //     "transform":"rotate(180deg)",
        //     "-ms-transform":"rotate(180deg)",		/* IE 9 */
        //     "-webkit-transform": "rotate(180deg)",	/* Safari and Chrome */
        //     "-o-transform": "rotate(180deg)",		/* Opera */
        //     "-moz-transform": "rotate(180deg)"
        // });
        //
        // $("#skill_box1 .skill_arrow").css({
        //     "transform":"rotate(-180deg)",
        //     "-ms-transform":"rotate(-180deg)",		/* IE 9 */
        //     "-webkit-transform": "rotate(-180deg)",	/* Safari and Chrome */
        //     "-o-transform": "rotate(-180deg)",		/* Opera */
        //     "-moz-transform": "rotate(-180deg)"
        // });
        // $("#skill_box2 .skill_arrow").css({
        //     "transform":"rotate(-180deg)",
        //     "-ms-transform":"rotate(-180deg)",		/* IE 9 */
        //     "-webkit-transform": "rotate(-180deg)",	/* Safari and Chrome */
        //     "-o-transform": "rotate(-180deg)",		/* Opera */
        //     "-moz-transform": "rotate(-180deg)"
        // });
        // $("#skill_box3 .skill_arrow").css({
        //     "transform":"rotate(-180deg)",
        //     "-ms-transform":"rotate(-180deg)",		/* IE 9 */
        //     "-webkit-transform": "rotate(-180deg)",	/* Safari and Chrome */
        //     "-o-transform": "rotate(-180deg)",		/* Opera */
        //     "-moz-transform": "rotate(-180deg)"
        // });

    });

});

function getmatrix(a,b,c,d,e,f){
    var aa=Math.round(180*Math.asin(a)/ Math.PI);
    var bb=Math.round(180*Math.acos(b)/ Math.PI);
    var cc=Math.round(180*Math.asin(c)/ Math.PI);
    var dd=Math.round(180*Math.acos(d)/ Math.PI);
    var deg=0;
    if(aa==bb||-aa==bb){
        deg=dd;
    }else if(-aa+bb==180){
        deg=180+cc;
    }else if(aa+bb==180){
        deg=360-cc||360-dd;
    }
    return deg>=360?0:deg;
    //return (aa+','+bb+','+cc+','+dd);
}





