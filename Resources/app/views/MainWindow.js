module.exports = function (Como) {
    var _ = require('/lib/Underscore/underscore.min'),
        $ = require('/lib/Como/Utils'),
        UI = Como.loadUI(),
        create;
        
    create = function() {
        var win = new UI.win({
            backgroundImage: '/images/mainBg.png',
            exitOnClose: true,
            navBarHidden: true
        });
        
        var content = new UI.view({
            height: Ti.UI.SIZE,
            layout: 'vertical',
            top: '7%',
            width: Ti.UI.SIZE
        });
        
        var infoWrapper = new UI.view({
            height: Ti.UI.SIZE,
            layout: 'vertical',
            left: '4%',
            right: '4%',
            top: 0
        });
        
        var subtitle = new UI.label({
            color: '#FFF',
            font: {
                fontSize: '18dp',
                fontWeight: 'bold'
            },
            left: 0,
            text: 'graphic designer',
            top: 0
        });
        
        var mainTitle = new UI.label({
            color: '#FFF',
            font: {
                fontSize: '48dp',
                fontWeight: 'bold'
            },
            left: 0,
            text: 'toysoldier',
            top: '1%'
        });
        
        var desc = new UI.label({
            font: {
                fontSize: '11dp'
            },
            left: 0,
            text: 'I wanna explore the world of design.\nThere, I give hope, joy and passion through my artwork.\nThere is why I live & why I design.',
            top: '2%'
        });
        
        var btnGo = new UI.button({
            backgroundImage: '/images/buttonGo.png',
            height: '36dp',
            left: '4%',
            top: '10%',
            width: '169dp'
        });
        btnGo.on('click', 'Toysoldier/dashboard');
        
        var toy = Ti.UI.createImageView({
            bottom: '5%',
            image: '/images/soldierHome.png',
            height: '209dp',
            right: '7%',
            width: '80dp'
        });
        
        var badge = Ti.UI.createImageView({
            image: '/images/mainLol.png',
            height: '55dp',
            right: 0,
            top: 0,
            width: '55dp'
        });
        
        infoWrapper.addAll([subtitle, mainTitle, desc]);
        content.add(infoWrapper);
        content.add(btnGo);
        win.add(badge);
        win.add(content);
        win.add(toy);
         
        var ob1 = {a: {x:1}}, ob2 = {a: {y:2, z:3}}, ob3 = $.extend(ob1, ob2, true);
        
        Ti.API.info(JSON.stringify(ob1));
        Ti.API.info(JSON.stringify(ob2));
        Ti.API.info(JSON.stringify(ob3));
            
        return win;
    };
        
    return {
        create: create
    };
};
