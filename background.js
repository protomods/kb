var numberOfBots;
var storage = chrome['storage']['local'];
var activated;
var i = 1;
chrome.runtime.onInstalled.addListener(function(details){
   if(details.reason == "update"){
	window.open("https://goo.gl/QAqq9c");

    }
});
chrome['runtime']['onMessage']['addListener'](function(_0xd288x5, _0xd288x6, _0xd288x7) {
    if (_0xd288x5 == 'startSpam') {
        storage['get']('numberOfBots', function(_0xd288x8) {
            numberOfBots = _0xd288x8['numberOfBots'] + 1;
            activated = true;
            startSpam()
        })
    };
    if (_0xd288x5 == 'nextBot') {
        if (activated == true && i < numberOfBots) {
            jQuery('body')['append']('<iframe src=\'https://kahoot.it/#/?' + i + '\'> </iframe>');
            i++;
            chrome['cookies']['getAll']({
                domain: 'kahoot.it'
            }, function(_0xd288x9) {
                for (var i = 0; i < _0xd288x9['length']; i++) {
                    chrome['cookies']['remove']({
                        url: 'https://kahoot.it' + _0xd288x9[i]['path'],
                        name: _0xd288x9[i]['name']
                    })
                }
            })
        }
    };
    if (_0xd288x5 == 'killAll') {
        jQuery('iframe')['remove']();
        activated = false;
        i = 1
    }
});

function startSpam() {
    i = 1;
    if (activated == true) {
        jQuery('body')['append']('<iframe src=\'https://kahoot.it/#/?' + i + '\'> </iframe>');
        chrome['cookies']['getAll']({
            domain: 'kahoot.it'
        }, function(_0xd288x9) {
            for (var i = 0; i < _0xd288x9['length']; i++) {
                chrome['cookies']['remove']({
                    url: 'https://kahoot.it' + _0xd288x9[i]['path'],
                    name: _0xd288x9[i]['name']
                })
            }
        })
    }
}