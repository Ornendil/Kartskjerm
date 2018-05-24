
var kommunekart = new Kommunekart.Map({
    container: 'container',
    appId: 'Kommunekart',
    municipality: '0235',
    measure:true
});
        
var kommunekartLoaded = function () {
    if ($('input[name^="search_input"]').length >= 1) {
        tastatur();
    } else {
        setTimeout(kommunekartLoaded, 1000);
    }
};
setTimeout(kommunekartLoaded, 1000);

var tastatur = function () {
    $('input[name="text_input"]').attr('readonly', "true");
    $('input[name^="search_input"]').keyboard({
        display: {
            'bksp'   :  "\u2190",
            'accept' : 'Søk',
            'normal' : 'ABC',
            'meta1'  : '.?123',
            'meta2'  : '#+='
        },
        usePreview : false,
        position: false,
        layout: 'custom',
        customLayout: {
            'normal': [
                'q w e r t y u i o p å {bksp}',
                'a s d f g h j k l ø æ {accept}',
                '{s} z x c v b n m , . - \' {accept}',
                '{meta1} {space} {meta1}'
            ],
            'shift': [
                'Q W E R T Y U I O P Å {bksp}',
                'A S D F G H J K L Ø Æ {accept}',
                '{s} Z X C V B N M ; : _ " {accept}',
                '{meta1} {space} {meta1}'
            ],
            'meta1': [
                '| 1 2 3 4 5 6 7 8 9 0 {bksp}',
                '@ # $ % & * ~ ! ? + = {accept}',
                '{sp:1} ( ) [ ] { } / \\ &lt; &gt; ^ {accept}',
                '{normal} {space} {normal}'
            ]
        },
        restrictInput : true,
        css : {
            buttonEmpty    : 'ui-keyboard-empty'
        },
        accepted: function(event, keyboard, el) {
            if (el.value) {
                if ( $(el).attr("name") == "search_input_1" ){
                    $('button[name="submit_button"]').click();
                } else if ( $(el).attr("name") == "search_input_2" ) {
                    $('button[name="submit_button_2"]').click();
                }
            }
        }
    })
};