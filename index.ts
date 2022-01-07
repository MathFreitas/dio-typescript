//Exemplo com jquery

import $ from 'jquery';

$.fn.extend({
    novaFuncao() {
        console.log('Chamou nova função');
    }
});

$('body').novaFuncao();