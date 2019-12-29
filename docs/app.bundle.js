﻿zuix.bundle(
/*
 * zUIx Application Bundle
 * 
 * app.bundle.js generated by *zuix-bundler*
 *   on 2019-12-29T18:17:19.807Z
 * 
 * Resource list (9):
 * 
 * - [js] 
 *   ./service-worker.js (_res/script/script-605580544)
 * 
 * - [css] 
 *   ./index.css (_res/style/style-1784725062)
 * 
 * - [html] [css] [js] 
 *   layout/header
 * 
 * - [css] 
 *   //zuixjs.github.io/zkit/css/flex-layout-attribute.min.css (_res/style/style--1101994688)
 * 
 * - [html] [css] [js] 
 *   layout/footer
 * 
 * - [html] [css] [js] 
 *   pages/home
 * 
 * - [html] [css] [js] 
 *   pages/map
 * 
 * - [html] [css] [js] 
 *   pages/drinks
 * 
 * - [html] [css] [js] 
 *   pages/about
 * 
 * 
*/

[{"componentId":"_res\u002Fscript\u002Fscript-605580544","view":null,"css":null,"controller":"if ('serviceWorker' in navigator) {\n    const p = navigator.serviceWorker\n        .register('.\u002Fsw.js')\n        .then(reg =\u003E console.log('PWA service-worker ready.', reg))\n        .catch(err =\u003E console.error('Could not load service-worker.', err));\n}\n","using":".\u002Fservice-worker.js"},{"componentId":"_res\u002Fstyle\u002Fstyle-1784725062","view":null,"css":"\u002F* CSS files add styling rules to your content *\u002F\n\nbody {\n    font-family: \"Benton Sans\", \"Helvetica Neue\", helvetica, arial, sans-serif;\n    font-size: 16px;\n    margin: 0; padding: 0;\n    background: black;\n    -webkit-user-select:none;\n    -moz-user-select:none;\n    -ms-user-select:none;\n    user-select:none;\n    overscroll-behavior-y: contain;\n}\n\n.drawer {\n    background: black;\n}\n","controller":null,"using":".\u002Findex.css"},{"componentId":"layout\u002Fheader","view":"\u003Cdiv class=\"header\"\u003E\n\n\u003C\u002Fdiv\u003E\n\u003Cdiv data-ui-field=\"header-box\" layout=\"row\"\u003E\n    \u003Cdiv class=\"title\"\u003E\n        Home\n    \u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"title\"\u003E\n        Dojazd\n    \u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"title\"\u003E\n        Drineczki\n    \u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"title\"\u003E\n        Plejlista\n    \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv data-ui-field=\"header-tools\"\u003E\n    \u003Cdiv class=\"topics\" data-ui-load=\"@lib\u002Fcontrollers\u002Fview_pager\" data-ui-options=\"options.topicIndicator\"\u003E\n\n    \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E","css":". {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: auto;\n    background: rgba(0, 0, 0, 0.97);\n    border-bottom: solid 1px rgba(0, 0, 0, 0.25);\n    box-shadow: 0 6px 2px -2px rgba(100, 100, 100, 0.25);\n    z-index: 100;\n}\n\n.header {\n    height: 56px;\n    max-height: 56px;\n}\n\n.title {\n    position: absolute;\n    color: orange;\n    top: 12px;\n    left: 80px;\n    font-size: 180%;\n}\n\n.profile {\n    position: absolute;\n    left: 20px;\n    top: 8px;\n    width: 42px;\n    height: 42px;\n    background: #f5f8fa;\n    border-radius: 50%;\n    border: solid 1px #00aced;\n    overflow: hidden;\n    cursor: pointer;\n}\n\n.profile img {\n    margin-left: -2px;\n    height: 44px;\n}\n\n.topics {\n    width: 100%;\n    height: 40px;\n}\n\n.topics div {\n    font-size: 16px;\n    height: 36px;\n    min-width: 96px;\n    text-align: center;\n    vertical-align: middle;\n    line-height: 36px;\n    border-bottom: solid 4px transparent;\n    cursor: pointer;\n}\n\n.active {\n    color: initial;\n    font-weight: bold;\n    border-bottom: solid 4px #00aced !important;\n}\n\n[data-ui-field=\"header-box\"] {\n    padding-left: 72px;\n    padding-right: 16px;\n    height: 100%;\n}\n\n\n\u002F* Pulse Animation from https:\u002F\u002Fcodepen.io\u002Folam\u002Fpen\u002Fzcqea *\u002F\n\n.pulse {\n    box-shadow: 0 0 0 rgba(204, 169, 44, 0.4);\n    animation: pulse 2s infinite;\n}\n\n.pulse:hover {\n    animation: none;\n}\n\n@-webkit-keyframes pulse {\n    0% {\n        -webkit-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0.4);\n    }\n    70% {\n        -webkit-box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);\n    }\n    100% {\n        -webkit-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);\n    }\n}\n\n@keyframes pulse {\n    0% {\n        -moz-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0.4);\n        box-shadow: 0 0 0 0 rgba(204, 169, 44, 0.4);\n    }\n    70% {\n        -moz-box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);\n        box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);\n    }\n    100% {\n        -moz-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);\n        box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);\n    }\n}","controller":function(){}},{"componentId":"_res\u002Fstyle\u002Fstyle--1101994688","view":null,"css":"\u002F**\n * Flex layout attribute\n * HTML layout helper based on CSS flexbox specification.\n * \n * VERSION: v1.0.3\n * DATE:    2016-06-21\n * URL:     http:\u002F\u002Fprogressivered.com\u002Ffla\u002F\n * AUTHOR:  Stefan Kovac | stef@progressivered.com | http:\u002F\u002Fprogressivered.com\u002F\n * LICENSE: MIT \n *\u002F\n \nhtml{box-sizing:border-box}*,:after,:before{box-sizing:inherit}[layout]{display:-ms-flexbox;display:flex}[layout*=column],[layout*=row]{width:100%;max-width:100%}[layout^=row]{-ms-flex-direction:row;flex-direction:row}[layout^=column]{-ms-flex-direction:column;flex-direction:column}[layout*=row][layout*=reverse]{-ms-flex-direction:row-reverse;flex-direction:row-reverse}[layout*=column][layout*=reverse]{-ms-flex-direction:column-reverse;flex-direction:column-reverse}[layout*=columns],[layout*=rows]{-ms-flex-wrap:wrap;flex-wrap:wrap}[layout=none]{-ms-flex:none;flex:none}[layout*=column][layout*=top-],[layout*=row][layout*=-left]{-ms-flex-pack:start;justify-content:flex-start}[layout*=column][layout*=center-],[layout*=row][layout*=-center],[layout~=centered]{-ms-flex-pack:center;justify-content:center}[layout*=column][layout*=bottom-],[layout*=row][layout*=-right]{-ms-flex-pack:end;justify-content:flex-end}[layout*=column][layout*=spread-],[layout*=row][layout*=-spread]{-ms-flex-pack:distribute;justify-content:space-around}[layout*=column][layout*=justify-],[layout*=row][layout*=-justify]{-ms-flex-pack:justify;justify-content:space-between}[layout*=column][layout*=-left],[layout*=row][layout*=top-]{-ms-flex-align:start;-ms-grid-row-align:flex-start;align-items:flex-start}[layout*=column][layout*=-center],[layout*=row][layout*=center-],[layout~=centered]{-ms-flex-align:center;-ms-grid-row-align:center;align-items:center}[layout*=column][layout*=-right],[layout*=row][layout*=bottom-]{-ms-flex-align:end;-ms-grid-row-align:flex-end;align-items:flex-end}[layout*=column][layout*=-stretch],[layout*=row][layout*=stretch-]{-ms-flex-align:stretch;-ms-grid-row-align:stretch;align-items:stretch}[layout*=columns][layout*=-left],[layout*=rows][layout*=top-]{-ms-flex-line-pack:start;align-content:flex-start}[layout*=columns][layout*=-right],[layout*=rows][layout*=bottom-]{-ms-flex-line-pack:end;align-content:flex-end}[layout*=columns][layout*=-center],[layout*=rows][layout*=center-]{-ms-flex-line-pack:center;align-content:center}[layout*=columns][layout*=-justify],[layout*=rows][layout*=justify-]{-ms-flex-line-pack:justify;align-content:space-between}[layout*=columns][layout*=-spread],[layout*=rows][layout*=spread-]{-ms-flex-line-pack:distribute;align-content:space-around}[layout*=columns][layout*=-stretch],[layout*=rows][layout*=stretch-]{-ms-flex-line-pack:stretch;align-content:stretch}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){[layout*=column]:not([layout*=row])\u003E*{max-width:auto}[layout*=column][self*=top]{height:auto!important}[self~=size-]\u003E*{height:auto}}[layout*=column]:not([layout*=row]) [self*=left],[layout*=row]:not([layout*=column]) [self*=top]{-ms-flex-item-align:start;align-self:flex-start}[self~=center]{-ms-flex-item-align:center;align-self:center}[layout*=column]:not([layout*=row]) [self*=right],[layout*=row]:not([layout*=column]) [self*=bottom]{-ms-flex-item-align:end;align-self:flex-end}[self*=stretch]{-ms-flex-item-align:stretch;align-self:stretch}[layout][self*=center]{margin-left:auto;margin-right:auto}[layout][self*=right]{margin-right:0}[layout][self*=left]{margin-left:0}[layout*=column] [self*=bottom]{margin-top:auto}[layout*=column] [self*=top]{margin-bottom:auto}[layout*=row] [self*=left]{margin-right:auto}[layout*=row] [self*=right]{margin-left:auto}[self~=size-1of5]{width:20%}[self~=size-1of4]{width:25%}[self~=size-1of3]{width:33.33333%}[self~=size-2of5]{width:40%}[self~=size-1of2]{width:50%}[self~=size-3of5]{width:60%}[self~=size-2of3]{width:66.6666%}[self~=size-3of4]{width:75%}[self~=size-4of5]{width:80%}[self~=size-1of1]{width:100%}[layout*=column][layout*=stretch-]\u003E:not([self*=size-]),[layout*=row][layout*=-stretch]\u003E:not([self*=size-]),[self~=size-x1]{-ms-flex:1 0 0%!important;flex:1 0 0%!important}[self~=size-x2]{-ms-flex:2 0 0%!important;flex:2 0 0%!important}[self~=size-x3]{-ms-flex:3 0 0%!important;flex:3 0 0%!important}[self~=size-x4]{-ms-flex:4 0 0%!important;flex:4 0 0%!important}[self~=size-x5]{-ms-flex:5 0 0%!important;flex:5 0 0%!important}[self~=size-x6]{-ms-flex:6 0 0%!important;flex:6 0 0%!important}[self~=size-x7]{-ms-flex:7 0 0%!important;flex:7 0 0%!important}[self~=size-x8]{-ms-flex:8 0 0%!important;flex:8 0 0%!important}[self~=size-x9]{-ms-flex:9 0 0%!important;flex:9 0 0%!important}[self*=size-auto]{-ms-flex:1 1 auto;flex:1 1 auto}[self*=size-x0]{-ms-flex:0 0 auto;flex:0 0 auto}[self~=size-xxlarge]{max-width:1440px;width:100%}[self~=size-xlarge]{max-width:1200px;width:100%}[self~=size-large]{max-width:960px;width:100%}[self~=size-larger]{max-width:840px;width:100%}[self~=size-medium]{max-width:720px;width:100%}[self~=size-smaller]{max-width:600px;width:100%}[self~=size-small]{max-width:480px;width:100%}[self~=size-xsmall]{max-width:360px;width:100%}[self~=size-xxsmall]{max-width:240px;width:100%}[self*=size-x]:not([self*=small]):not([self*=large]){-ms-flex-negative:1;flex-shrink:1}[self~=first]{-ms-flex-order:-1;order:-1}[self~=order-1]{-ms-flex-order:1;order:1}[self~=order-2]{-ms-flex-order:2;order:2}[self~=order-3]{-ms-flex-order:3;order:3}[self~=last]{-ms-flex-order:999;order:999}[layout*=column]:not([layout*=row])\u003E*{-ms-flex-negative:0;flex-shrink:0;-ms-flex-preferred-size:auto;flex-basis:auto}@media screen and (max-width:64em){[layout*=lg-row]{-ms-flex-direction:row;flex-direction:row}[layout*=lg-column]{-ms-flex-direction:column;flex-direction:column}[layout*=lg-columns],[layout*=lg-rows]{-ms-flex-wrap:wrap;flex-wrap:wrap}}@media screen and (max-width:52em){[layout*=md-row]{-ms-flex-direction:row;flex-direction:row}[layout*=md-column]{-ms-flex-direction:column;flex-direction:column}[layout*=md-columns],[layout*=md-rows]{-ms-flex-wrap:wrap;flex-wrap:wrap}}@media screen and (max-width:40em){[layout*=sm-row]{-ms-flex-direction:row;flex-direction:row}[layout*=sm-column]{-ms-flex-direction:column;flex-direction:column}[layout*=sm-columns],[layout*=sm-rows]{-ms-flex-wrap:wrap;flex-wrap:wrap}}@media screen and (max-width:64em){[self*=lg-full]{-ms-flex:1 1 100%!important;flex:1 1 100%!important;width:100%;max-width:100%}[self*=lg-half]{-ms-flex:1 1 50%!important;flex:1 1 50%!important;width:50%;max-width:50%}[self~=lg-first]{-ms-flex-order:-1;order:-1}[self~=lg-last]{-ms-flex-order:999;order:999}[self~=lg-hide]{display:none}[self~=lg-show]{display:inherit}}@media screen and (max-width:52em){[self*=md-full]{-ms-flex:1 1 100%!important;flex:1 1 100%!important;width:100%;max-width:100%}[self*=md-half]{-ms-flex:1 1 50%!important;flex:1 1 50%!important;width:50%;max-width:50%}[self~=md-first]{-ms-flex-order:-1;order:-1}[self~=md-last]{-ms-flex-order:999;order:999}[self~=md-hide]{display:none}[self~=md-show]{display:inherit}}@media screen and (max-width:40em){[self*=sm-full]{-ms-flex:1 1 100%!important;flex:1 1 100%!important;width:100%;max-width:100%}[self*=sm-half]{-ms-flex:1 1 50%!important;flex:1 1 50%!important;width:50%;max-width:50%}[self~=sm-first]{-ms-flex-order:-1;order:-1}[self~=sm-last]{-ms-flex-order:999;order:999}[self~=sm-hide]{display:none}[self~=sm-show]{display:inherit}}","controller":null,"using":"\u002F\u002Fzuixjs.github.io\u002Fzkit\u002Fcss\u002Fflex-layout-attribute.min.css"},{"componentId":"layout\u002Ffooter","view":"\u003Cbutton class=\"active\"\u003E\n  \u003Ci class=\"material-icons md-48\"\u003Ehome\u003C\u002Fi\u003E\n\u003C\u002Fbutton\u003E\n\u003Cbutton\u003E\n  \u003Ci class=\"material-icons md-48\"\u003Emap\u003C\u002Fi\u003E\n\u003C\u002Fbutton\u003E\n\u003Cbutton\u003E\n  \u003Ci class=\"material-icons md-48\"\u003Elocal_drink\u003C\u002Fi\u003E\n\u003C\u002Fbutton\u003E\n\u003Cbutton\u003E\n  \u003Ci class=\"material-icons md-48\"\u003Eaudiotrack\u003C\u002Fi\u003E\n\u003C\u002Fbutton\u003E","css":". {\n    position: fixed;\n    left:0; bottom:0; right: 0;\n    height: 56px;\n    \u002F* background: rgba(240,240,240,0.97); *\u002F\n    background: rgba(0,0,0,0.97);\n    border-top: solid 1px rgba(0,0,0,0.25);\n    box-shadow: 0 -6px 2px -2px rgba(100,100,100,0.25);\n    text-align: center;\n    z-index: 100;\n    overflow: hidden;\n}\n\nbutton {\n    padding: 12px;\n    max-height: 56px;\n    margin-left: 8px;\n    margin-right: 8px;\n    background: transparent;\n    border: none;\n    border-radius: 8px;\n    color: rgba(240,240,240,0.5);\n    -webkit-transition: all .3s; \u002F* Safari *\u002F\n    transition: all .3s;\n}\nbutton:hover {\n    background: rgba(255,255,255,0.25);\n}\nbutton:focus {outline:0;}\nbutton i {font-size: 32px !important;}\n\n.active {\n    transform: scale(1.2);\n    color: orange;\n    text-shadow:\n            1px 1px 0 orange,\n            -1px -1px 0 orange,\n            1px -1px 0 orange,\n            -1px 1px 0 orange,\n            1px 1px 0 orange;\n}\n","controller":function(){}},{"componentId":"pages\u002Fhome","view":"\u003Cdiv class=\"calendarContainer\"\u003E\n    \u003Ciframe class=\"calendar\" src=\"https:\u002F\u002Fcalendar.google.com\u002Fcalendar\u002Fembed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FAmsterdam&amp;src=aDMwYWY3anRrc2tlN2tjc210MHNlZXNxdWtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23336699&amp;mode=AGENDA&amp;showNav=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;title=Sylwester%20agenda\"\n        width=\"300\" height=\"500\" frameborder=\"0\"\u003E\u003C\u002Fiframe\u003E\n\u003C\u002Fdiv\u003E","css":".calendarContainer {\n    height: 0;\n    overflow: hidden;\n    \u002F* padding-bottom: 80%; *\u002F\n    \u002F* desired aspect ratio *\u002F\n    \u002F* position: relative; *\u002F\n}\n\n.calendar {\n    top: 15%;\n    border: 0;\n    height: 70%;\n    left: 0;\n    position: absolute;\n    width: 100%;\n}","controller":function(){}},{"componentId":"pages\u002Fmap","view":"\u003C!-- \u003Cdiv self=\"stretch-stretch\" layout=\"row center-center\"\u003E --\u003E\n\u003Cdiv class=\"flexContainer\"\u003E\n\n    \u003Cdiv id=\"mapContainer\"\u003E\n        \u003Ciframe class=\"googlemap\" src=\"https:\u002F\u002Fwww.google.com\u002Fmaps\u002Fembed?pb=!1m18!1m12!1m3!1d5893.164393385241!2d19.3683209300737!3d51.73990120286878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a357e77a8b8cd%3A0x687adb8ad1a4049f!2zS29sYXJza2EgMTY3LCA5MC0wMDEgxYHDs2TFug!5e0!3m2!1sen!2spl!4v1576932228172!5m2!1sen!2spl\"\n            width=\"300\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen\u003E\u003C\u002Fiframe\u003E\u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"tipsContainer\"\u003E\n        \u003Ch2\u003E Jak dojechać \u003C\u002Fh2\u003E\n        \u003Cp\u003EAutobus: 69 ( ͡° ͜ʖ ͡°) (dworzec Łódź-Widzew)\u003C\u002Fp\u003E\n        \u003Cp\u003ETramwaj: 10 (Dworzec Łódź Widzew) lub 12(Dworzec Łódź-Fabryczna)\u003C\u002Fp\u003E\n    \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C!-- \u003C\u002Fdiv\u003E --\u003E","css":"\u002F* .mapContainer iframe {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100% !important;\n    height: 100% !important;\n}\n\n.mapContainer {\n    position: relative;\n    padding-bottom: 75%;\n    height: 0;\n    overflow: hidden;\n} *\u002F\n\n.mapContainer {\n    height: 0;\n    overflow: hidden;\n    padding-bottom: 60%;\n    \u002F* desired aspect ratio *\u002F\n    position: relative;\n}\n\n.googlemap {\n    top: 10%;\n    border: 0;\n    height: 50%;\n    left: 0;\n    position: absolute;\n    width: 100%;\n}\n\n.tipsContainer {\n    border: 0;\n    height: 40%;\n    left: 0;\n    position: absolute;\n    margin: 10;\n    padding: 10;\n    top: 60%;\n    color: white;\n}","controller":function(){}},{"componentId":"pages\u002Fdrinks","view":"\u003Cdiv class=\"message\" self=\"stretch-stretch\" layout=\"row center-center\"\u003E\n    \u003Cdiv\u003EDrineczki\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E","css":".message {\n    color: darkgrey;\n    min-height: 100vh;\n    width: 100vw;\n    font-size: 200%;\n}\n.message i {\n    margin-left: 16px;\n    color: darkgrey;\n    font-size: 150%;\n}\n","controller":function(){}},{"componentId":"pages\u002Fabout","view":"\u003Cdiv self=\"size-small center-center spotifyContainer\"\u003E\n    \u003Ch2\u003EPrawilna playlista\u003C\u002Fh2\u003E\n    \u003Ciframe class=\"spotify\" src=\"https:\u002F\u002Fopen.spotify.com\u002Fembed\u002Fplaylist\u002F0w4Dh5V1zZo4cKWxoJp7Lx\" width=\"300\" height=\"600\" frameborder=\"0\" allowtransparency=\"true\" allow=\"encrypted-media\"\u003E\u003C\u002Fiframe\u003E\n\u003C\u002Fdiv\u003E","css":".spotifyContainer {\n    height: 0;\n    overflow: hidden;\n    padding-bottom: 60%;\n    \u002F* desired aspect ratio *\u002F\n    position: relative;\n}\n\n.spotify {\n    top: 10%;\n    border: 0;\n    height: 75%;\n    left: 0;\n    position: absolute;\n    width: 100%;\n}","controller":function(){}}]);