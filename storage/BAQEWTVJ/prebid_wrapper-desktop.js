//load the apstag.js library
!function(a9,a,p,s,t,A,g){if(a[a9])return;function q(c,r){a[a9]._Q.push([c,r])}a[a9]={init:function(){q("i",arguments)},fetchBids:function(){q("f",arguments)},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]};A=p.createElement(s);A.async=!0;A.src=t;g=p.getElementsByTagName(s)[0];g.parentNode.insertBefore(A,g)}("apstag",window,document,"script","//c.amazon-adsystem.com/aax2/apstag.js");

//initialize the apstag.js library on the page to allow bidding
apstag.init({
    pubID: '6883ebf6-22e0-4be1-84c2-3c9b38d9bb5a',
    adServer: 'googletag',
    simplerGPT: true
});

// var isHome = document.querySelector('body').classList.contains('home');
// var isHome = window.location.origin + '/' == window.location.href;
var isHome = window.location.pathname == '/' ;
var rgbAdsData = document.querySelector('#rgb-ads-data-information');
var pageType = rgbAdsData.getAttribute('data-page_type');

var latest_page ='';
if (window.location.href.indexOf("latest") > -1){
    latest_page = 'Latest';
}
if (isHome) {
    var prebidadUnits = [{
        // TOI_Desktop/HP_Top
        code: 'div-gpt-ad-HP_Top',
        mediaTypes: {
            banner: {
                sizes: [
                    [728, 90],
                    [970, 90],
                    [970, 250]
                ],
            },
        },
        bids: [            {
            bidder: 'criteo',
            params: {
                networkId: 10937,
            },
        },
            {
                bidder: 'pubmatic',
                params: {
                    publisherId: '161199',
                    adSlot: '4079803',
                },
            },
		   {
                bidder: 'outbrain',
                params: {
                    publisher: {
              	 id: '0077faadb481c38184e9aeab3bf24190a5'}
                },
            },
            {
                bidder: 'sovrn',
                params: {
                    tagid: '889971',
                },
            },
            {
                bidder: 'teads',
                params: {
                    pageId: 133226,
                    placementId: 146269,
                },
            },
            {
                bidder: 'onemobile',
                params: {
                    dcn: '8a9691e0017a7aaabe49aca7592a0030',
                    pos: '8a969547017a7aaac2a8acab8d2c0037',
                },
            },
            {
                bidder: 'nativo',
                params: {
                    placementId: 1127466,
                },
            },
            {
                bidder: 'openx',
                params: {
                    delDomain: 'timesofisrael-d.openx.net',
                    unit: '544045815',
                },
            },
            {
                bidder: 'appnexus',
                params: {
                    placementId: 21661345,
                },
            },
            {
                bidder: 'sharethrough',
                params: {
                    pkey: 'KBxbofEqd587DFjYnBaNxlBb',
                },
            },
            {
                bidder: 'ix',
                params: {
                    siteId: '674462',
                    size: [728, 90],
                },
            },
            {
                bidder: 'ix',
                params: {
                    siteId: '674463',
                    size: [970, 250],
                },
            },
            {
                bidder: 'triplelift',
                params: {
                    inventoryCode: 'TimesofIsrael_Billboard',
                },
            },
        ],
    },
        {
            // TOI_Desktop/HP_300x250_Sidebar_Right_1
            code: 'div-gpt-ad-HP_300x250_Sidebar_Right_1',
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250]
                    ],
                },
            },
            bids: [                {
                bidder: 'criteo',
                params: {
                    networkId: 10937,
                },
            },
                {
                    bidder: 'pubmatic',
                    params: {
                        publisherId: '161199',
                        adSlot: '4079804',
                    },
                },
                {
                    bidder: 'sovrn',
                    params: {
                        tagid: '889966',
                    },
                },
			  {
                bidder: 'outbrain',
                params: {
                    publisher: {
              	 id: '0077faadb481c38184e9aeab3bf24190a5'}
                },
                },
                {
                    bidder: 'teads',
                    params: {
                        pageId: 133226,
                        placementId: 146269,
                    },
                },
                {
                    bidder: 'onemobile',
                    params: {
                        dcn: '8a9691e0017a7aaabe49aca7592a0030',
                        pos: '8a9691e0017a7aaabe49acab8f0b0039',
                    },
                },
                {
                    bidder: 'nativo',
                    params: {
                        placementId: 1127467,
                    },
                },
                {
                    bidder: 'openx',
                    params: {
                        delDomain: 'timesofisrael-d.openx.net',
                        unit: '544045818',
                    },
                },
                {
                    bidder: 'appnexus',
                    params: {
                        placementId: 21661341,
                    },
                },
                {
                    bidder: 'sharethrough',
                    params: {
                        pkey: 'EmGhDL1x7t1sijYOWhYwPKLg',
                    },
                },
                {
                    bidder: 'ix',
                    params: {
                        siteId: '674459',
                        size: [300, 250],
                    },
                },
                {
                    bidder: 'triplelift',
                    params: {
                        inventoryCode: 'TimesofIsrael_InContent_Desktop',
                    },
                },
            ],
        }, {
            // TOI_Desktop/HP_300x600_Sidebar_Right_1
            code: 'div-gpt-ad-HP_300x600_Sidebar_Right_1',
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 600]
                    ],
                },
            },
            bids: [                {
                bidder: 'criteo',
                params: {
                    networkId: 10937,
                },
            },
                {
                    bidder: 'pubmatic',
                    params: {
                        publisherId: '161199',
                        adSlot: '4079805',
                    },
                },
			  {
                bidder: 'outbrain',
                params: {
                    publisher: {
              	 id: '0077faadb481c38184e9aeab3bf24190a5'}
                },
                },
                {
                    bidder: 'sovrn',
                    params: {
                        tagid: '889966',
                    },
                },
                {
                    bidder: 'teads',
                    params: {
                        pageId: 133226,
                        placementId: 146269,
                    },
                },
                {
                    bidder: 'onemobile',
                    params: {
                        dcn: '8a9691e0017a7aaabe49aca7592a0030',
                        pos: '8a969978017a7aaabab4acab911e0039',
                    },
                },
                {
                    bidder: 'nativo',
                    params: {
                        placementId: 1127468,
                    },
                },
                {
                    bidder: 'openx',
                    params: {
                        delDomain: 'timesofisrael-d.openx.net',
                        unit: '544045820',
                    },
                },
                {
                    bidder: 'appnexus',
                    params: {
                        placementId: 21661340,
                    },
                },
                {
                    bidder: 'sharethrough',
                    params: {
                        pkey: 'swqcFwKuDcrnUOtlGIPCOPXG',
                    },
                },
                {
                    bidder: 'ix',
                    params: {
                        siteId: '674461',
                        size: [300, 600],
                    },
                },
                {
                    bidder: 'triplelift',
                    params: {
                        inventoryCode: 'TimesofIsrael_InContent_Desktop',
                    },
                },
            ],
        }, {
            // TOI_Desktop/HP_Middle_1
            code: 'div-gpt-ad-HP_Middle_1',
            mediaTypes: {
                banner: {
                    sizes: [
                        [728, 90]
                    ],
                },
            },
            bids: [                {
                bidder: 'criteo',
                params: {
                    networkId: 10937,
                },
            },
                {
                    bidder: 'pubmatic',
                    params: {
                        publisherId: '161199',
                        adSlot: '4079806',
                    },
                },
			  {
                bidder: 'outbrain',
                params: {
                    publisher: {
              	 id: '0077faadb481c38184e9aeab3bf24190a5'}
                },
                },
                {
                    bidder: 'sovrn',
                    params: {
                        tagid: '889955',
                    },
                },
                {
                    bidder: 'teads',
                    params: {
                        pageId: 126182,
                        placementId: 137437,
                    },
                },
                {
                    bidder: 'onemobile',
                    params: {
                        dcn: '8a9691e0017a7aaabe49aca7592a0030',
                        pos: '8a969547017a7aaac2a8acab934b0038',
                    },
                },
                {
                    bidder: 'nativo',
                    params: {
                        placementId: 1127469,
                    },
                },
                {
                    bidder: 'openx',
                    params: {
                        delDomain: 'timesofisrael-d.openx.net',
                        unit: '544045823',
                    },
                },
                {
                    bidder: 'appnexus',
                    params: {
                        placementId: 21661349,
                    },
                },
                {
                    bidder: 'sharethrough',
                    params: {
                        pkey: 'mC9NQoCK48uuMw9lbwfLPuCE',
                    },
                },
                {
                    bidder: 'ix',
                    params: {
                        siteId: '674462',
                        size: [728, 90],
                    },
                },
                {
                    bidder: 'triplelift',
                    params: {
                        inventoryCode: 'TimesofIsrael_HDX',
                    },
                },
            ],
        },
    ];
} else {
    var prebidadUnits = [{
        // TOI_Desktop/Top
        code: 'div-gpt-ad-Top',
        mediaTypes: {
            banner: {
                sizes: [
                    [728, 90],
                    [970, 90],
                    [970, 250]
                ],
            },
        },
        bids: [            {
            bidder: 'criteo',
            params: {
                networkId: 10937,
            },
        },
            {
                bidder: 'pubmatic',
                params: {
                    publisherId: '161199',
                    adSlot: '4079793',
                },
            },
            {
                bidder: 'sovrn',
                params: {
                    tagid: '889952',
                },
            },
            {
                bidder: 'teads',
                params: {
                    pageId: 133226,
                    placementId: 146269,
                },
            },
		   {
                bidder: 'outbrain',
                params: {
                    publisher: {
              	 id: '0077faadb481c38184e9aeab3bf24190a5'}
                },
            },
            {
                bidder: 'onemobile',
                params: {
                    dcn: '8a9691e0017a7aaabe49aca7592a0030',
                    pos: '8a969547017a7aaac2a8acab642d0030',
                },
            },
            {
                bidder: 'openx',
                params: {
                    delDomain: 'timesofisrael-d.openx.net',
                    unit: '544045753',
                },
            },
            {
                bidder: 'appnexus',
                params: {
                    placementId: 21661331,
                },
            },
            {
                bidder: 'sharethrough',
                params: {
                    pkey: 'JNOEOkjBDQcffBw4hMrfu9Th',
                },
            },
            {
                bidder: 'ix',
                params: {
                    siteId: '674462',
                    size: [728, 90],
                },
            },
            {
                bidder: 'ix',
                params: {
                    siteId: '674463',
                    size: [970, 250],
                },
            },
            {
                bidder: 'triplelift',
                params: {
                    inventoryCode: 'TimesofIsrael_Billboard',
                },
            },
        ],
    },
        {
            // TOI_Desktop/336x280_Middle_3
            code: 'div-gpt-ad-336x280_Middle_3',
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250],
                        [336, 280]
                    ],
                },
            },
            bids: [                {
                bidder: 'criteo',
                params: {
                    networkId: 10937,
                },
            },
                {
                    bidder: 'pubmatic',
                    params: {
                        publisherId: '161199',
                        adSlot: '4079794',
                    },
                },
                {
                    bidder: 'sovrn',
                    params: {
                        tagid: '889958',
                    },
                },
                {
                    bidder: 'teads',
                    params: {
                        pageId: 133225,
                        placementId: 146268,
                    },
                },
			  {
                bidder: 'outbrain',
                params: {
                    publisher: {
              	 id: '0077faadb481c38184e9aeab3bf24190a5'}
                },
                },
                {
                    bidder: 'onemobile',
                    params: {
                        dcn: '8a9691e0017a7aaabe49aca7592a0030',
                        pos: '8a969547017a7aaac2a8acab72bc0033',
                    },
                },
                {
                    bidder: 'nativo',
                    params: {
                        placementId: 1127458,
                    },
                },
                {
                    bidder: 'openx',
                    params: {
                        delDomain: 'timesofisrael-d.openx.net',
                        unit: '544045817',
                    },
                },
                {
                    bidder: 'appnexus',
                    params: {
                        placementId: 21661333,
                    },
                },
                {
                    bidder: 'sharethrough',
                    params: {
                        pkey: 'fG3kMExowJ9RxWkI6V3sxYGl',
                    },
                },
                {
                    bidder: 'ix',
                    params: {
                        siteId: '674459',
                        size: [300, 250],
                    },
                },
                {
                    bidder: 'triplelift',
                    params: {
                        inventoryCode: 'TimesofIsrael_Middle_MPU',
                    },
                },
            ],
        },
        {
            // TOI_Desktop/336x280_Middle_2
            code: 'div-gpt-ad-336x280_Middle_2',
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250],
                        [336, 280]
                    ],
                },
            },
            bids: [                {
                bidder: 'criteo',
                params: {
                    networkId: 10937,
                },
            },
		   {
                bidder: 'outbrain',
                params: {
                    publisher: {
              	 id: '0077faadb481c38184e9aeab3bf24190a5'}
                },
                },
                {
                    bidder: 'pubmatic',
                    params: {
                        publisherId: '161199',
                        adSlot: '4079795',
                    },
                },
                {
                    bidder: 'sovrn',
                    params: {
                        tagid: '889960',
                    },
                },
                {
                    bidder: 'teads',
                    params: {
                        pageId: 133225,
                        placementId: 146268,
                    },
                },
                {
                    bidder: 'onemobile',
                    params: {
                        dcn: '8a9691e0017a7aaabe49aca7592a0030',
                        pos: '8a9691e0017a7aaabe49acab74af0035',
                    },
                },
                {
                    bidder: 'nativo',
                    params: {
                        placementId: 1127459,
                    },
                },
                {
                    bidder: 'openx',
                    params: {
                        delDomain: 'timesofisrael-d.openx.net',
                        unit: '544045821',
                    },
                },
                {
                    bidder: 'appnexus',
                    params: {
                        placementId: 21661335,
                    },
                },
                {
                    bidder: 'sharethrough',
                    params: {
                        pkey: 'lORYu4EzUHZ3kXeGOJjn6XAo',
                    },
                },
                {
                    bidder: 'ix',
                    params: {
                        siteId: '674459',
                        size: [300, 250],
                    },
                },
                {
                    bidder: 'triplelift',
                    params: {
                        inventoryCode: 'TimesofIsrael_Middle_MPU',
                    },
                },
            ],
        },
        {
            // TOI_Desktop/336x280_Middle_1
            code: 'div-gpt-ad-336x280_Middle_1',
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250],
                        [336, 280]
                    ],
                },
            },
            bids: [                {
                bidder: 'criteo',
                params: {
                    networkId: 10937,
                },
            },
                {
                    bidder: 'pubmatic',
                    params: {
                        publisherId: '161199',
                        adSlot: '4079796',
                    },
                },
                {
                    bidder: 'sovrn',
                    params: {
                        tagid: '889962',
                    },
                },
			  {
                bidder: 'outbrain',
                params: {
                    publisher: {
              	 id: '0077faadb481c38184e9aeab3bf24190a5'}
                },
                },
                {
                    bidder: 'teads',
                    params: {
                        pageId: 133225,
                        placementId: 146268,
                    },
                },
                {
                    bidder: 'onemobile',
                    params: {
                        dcn: '8a9691e0017a7aaabe49aca7592a0030',
                        pos: '8a9691e0017a7aaabe49acab7b200036',
                    },
                },
                {
                    bidder: 'nativo',
                    params: {
                        placementId: 1127460,
                    },
                },
                {
                    bidder: 'openx',
                    params: {
                        delDomain: 'timesofisrael-d.openx.net',
                        unit: '544045824',
                    },
                },
                {
                    bidder: 'appnexus',
                    params: {
                        placementId: 21661336,
                    },
                },
                {
                    bidder: 'sharethrough',
                    params: {
                        pkey: 'RENvpvk05hjpmloe9dOlpKvI',
                    },
                },
                {
                    bidder: 'ix',
                    params: {
                        siteId: '674459',
                        size: [300, 250],
                    },
                },
                {
                    bidder: 'triplelift',
                    params: {
                        inventoryCode: 'TimesofIsrael_Middle_MPU',
                    },
                },
            ],
        },
        {
            // TOI_Desktop/Live_Middle_2
            code: 'div-gpt-ad-Live_Middle_2',
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250],
                        [336, 280]
                    ],
                },
            },
            bids: [                {
                bidder: 'triplelift',
                params: {
                    inventoryCode: 'TimesofIsrael_InContent_Desktop',
                },
            },
                {
                    bidder: 'criteo',
                    params: {
                        networkId: 10937,
                    },
                },
 			  {
                bidder: 'outbrain',
                params: {
                    publisher: {
              	 id: '0077faadb481c38184e9aeab3bf24190a5'}
                },
                },
                {
                    bidder: 'pubmatic',
                    params: {
                        publisherId: '161199',
                        adSlot: '4079798',
                    },
                },
                {
                    bidder: 'sovrn',
                    params: {
                        tagid: '895854',
                    },
                },
                {
                    bidder: 'teads',
                    params: {
                        pageId: 133225,
                        placementId: 146268,
                    },
                },
                {
                    bidder: 'onemobile',
                    params: {
                        dcn: '8a9691e0017a7aaabe49aca7592a0030',
                        pos: '8a969547017a7aaac2a8acab7f790035',
                    },
                },
                {
                    bidder: 'nativo',
                    params: {
                        placementId: 1127462,
                    },
                },
                {
                    bidder: 'openx',
                    params: {
                        delDomain: 'timesofisrael-d.openx.net',
                        unit: '544045830',
                    },
                },
                {
                    bidder: 'appnexus',
                    params: {
                        placementId: 21661339,
                    },
                },
                {
                    bidder: 'sharethrough',
                    params: {
                        pkey: 'MWHKahHz67loGH30SckU5Ehq',
                    },
                },
                {
                    bidder: 'ix',
                    params: {
                        siteId: '674459',
                        size: [300, 250],
                    },
                },
            ],
        },
        {
            // TOI_Desktop/300x600_SideBar_Right_1
            code: 'div-gpt-ad-300x600_SideBar_Right_1',
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 600]
                    ],
                },
            },
            bids: [                {
                bidder: 'criteo',
                params: {
                    networkId: 10937,
                },
            },
                {
                    bidder: 'pubmatic',
                    params: {
                        publisherId: '161199',
                        adSlot: '4079799',
                    },
                },
 			  {
                bidder: 'outbrain',
                params: {
                    publisher: {
              	 id: '0077faadb481c38184e9aeab3bf24190a5'}
                },
                },
                {
                    bidder: 'sovrn',
                    params: {
                        tagid: '889966',
                    },
                },
                {
                    bidder: 'teads',
                    params: {
                        pageId: 133226,
                        placementId: 146269,
                    },
                },
                {
                    bidder: 'onemobile',
                    params: {
                        dcn: '8a9691e0017a7aaabe49aca7592a0030',
                        pos: '8a9691e0017a7aaabe49acab81ce0037',
                    },
                },
                {
                    bidder: 'nativo',
                    params: {
                        placementId: 1127461,
                    },
                },
                {
                    bidder: 'openx',
                    params: {
                        delDomain: 'timesofisrael-d.openx.net',
                        unit: '544045833',
                    },
                },
                {
                    bidder: 'appnexus',
                    params: {
                        placementId: 21661340,
                    },
                },
                {
                    bidder: 'sharethrough',
                    params: {
                        pkey: 'swqcFwKuDcrnUOtlGIPCOPXG',
                    },
                },
                {
                    bidder: 'ix',
                    params: {
                        siteId: '674461',
                        size: [300, 600],
                    },
                },
                {
                    bidder: 'triplelift',
                    params: {
                        inventoryCode: 'TimesofIsrael_SideBar ',
                    },
                },
            ],
        },
        {
            // TOI_Desktop/300x250_SideBar_Right_1
            code: 'div-gpt-ad-300x250_SideBar_Right_1',
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250]
                    ],
                },
            },
            bids: [                {
                bidder: 'triplelift',
                params: {
                    inventoryCode: 'TimesofIsrael_SideBar ',
                },
            },
                {
                    bidder: 'pubmatic',
                    params: {
                        publisherId: '161199',
                        adSlot: '4079800',
                    },
                },
 			  {
                bidder: 'outbrain',
                params: {
                    publisher: {
              	 id: '0077faadb481c38184e9aeab3bf24190a5'}
                },
                },
                {
                    bidder: 'sovrn',
                    params: {
                        tagid: '889967',
                    },
                },
                {
                    bidder: 'teads',
                    params: {
                        pageId: 133226,
                        placementId: 146269,
                    },
                },
                {
                    bidder: 'onemobile',
                    params: {
                        dcn: '8a9691e0017a7aaabe49aca7592a0030',
                        pos: '8a969978017a7aaabab4acab84250037',
                    },
                },
                {
                    bidder: 'nativo',
                    params: {
                        placementId: 1127463,
                    },
                },
                {
                    bidder: 'openx',
                    params: {
                        delDomain: 'timesofisrael-d.openx.net',
                        unit: '544045836',
                    },
                },
                {
                    bidder: 'appnexus',
                    params: {
                        placementId: 21661341,
                    },
                },
                {
                    bidder: 'sharethrough',
                    params: {
                        pkey: 'EmGhDL1x7t1sijYOWhYwPKLg',
                    },
                },
                {
                    bidder: 'ix',
                    params: {
                        siteId: '674459',
                        size: [300, 250],
                    },
                },
                {
                    bidder: 'criteo',
                    params: {
                        networkId: 10937,
                    },
                },
            ],
        },
        {
            // TOI_Desktop/300x250_SideBar_Right_2
            code: 'div-gpt-ad-300x250_SideBar_Right_2',
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250]
                    ],
                },
            },
            bids: [                {
                bidder: 'triplelift',
                params: {
                    inventoryCode: 'TimesofIsrael_SideBar ',
                },
            },
                {
                    bidder: 'criteo',
                    params: {
                        networkId: 10937,
                    },
                },
 			  {
                bidder: 'outbrain',
                params: {
                    publisher: {
              	 id: '0077faadb481c38184e9aeab3bf24190a5'}
                },
                },
                {
                    bidder: 'pubmatic',
                    params: {
                        publisherId: '161199',
                        adSlot: '4079801',
                    },
                },
                {
                    bidder: 'sovrn',
                    params: {
                        tagid: '889968',
                    },
                },
                {
                    bidder: 'teads',
                    params: {
                        pageId: 133226,
                        placementId: 146269,
                    },
                },
                {
                    bidder: 'onemobile',
                    params: {
                        dcn: '8a9691e0017a7aaabe49aca7592a0030',
                        pos: '8a969547017a7aaac2a8acab867d0036',
                    },
                },
                {
                    bidder: 'nativo',
                    params: {
                        placementId: 1127464,
                    },
                },
                {
                    bidder: 'openx',
                    params: {
                        delDomain: 'timesofisrael-d.openx.net',
                        unit: '544045839',
                    },
                },
                {
                    bidder: 'appnexus',
                    params: {
                        placementId: 21661342,
                    },
                },
                {
                    bidder: 'sharethrough',
                    params: {
                        pkey: '2vWivM38OAHxirwVE5gmOecU',
                    },
                },
                {
                    bidder: 'ix',
                    params: {
                        siteId: '674459',
                        size: [300, 250],
                    },
                },
            ],
        },
        {
            // TOI_Desktop/336x260_InContent_1
            code: 'div-gpt-ad-336x260_InContent_1',
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250],
                        [336, 280]
                    ],
                },
            },
            bids: [                {
                bidder: 'sovrn',
                params: {
                    tagid: '889969',
                },
            },
                {
                    bidder: 'pubmatic',
                    params: {
                        publisherId: '161199',
                        adSlot: '4079802',
                    },
                },
 			  {
                bidder: 'outbrain',
                params: {
                    publisher: {
              	 id: '0077faadb481c38184e9aeab3bf24190a5'}
                },
                },
                {
                    bidder: 'teads',
                    params: {
                        pageId: 133225,
                        placementId: 146268,
                    },
                },
                {
                    bidder: 'onemobile',
                    params: {
                        dcn: '8a9691e0017a7aaabe49aca7592a0030',
                        pos: '8a969978017a7aaabab4acab8aea0038',
                    },
                },
                {
                    bidder: 'nativo',
                    params: {
                        placementId: 1127465,
                    },
                },
                {
                    bidder: 'openx',
                    params: {
                        delDomain: 'timesofisrael-d.openx.net',
                        unit: '544045811',
                    },
                },
                {
                    bidder: 'appnexus',
                    params: {
                        placementId: 21661344,
                    },
                },
                {
                    bidder: 'sharethrough',
                    params: {
                        pkey: '5fIeT2s7zbxlaEEREbQv9Wvm',
                    },
                },
                {
                    bidder: 'ix',
                    params: {
                        siteId: '674459',
                        size: [300, 250],
                    },
                },
                {
                    bidder: 'triplelift',
                    params: {
                        inventoryCode: 'TimesofIsrael_InContent_Desktop ',
                    },
                },
                {
                    bidder: 'criteo',
                    params: {
                        networkId: 10937,
                    },
                },
            ],
        },
    ];

}

var googletag = window.googletag || {cmd: []};
var refreshPages = checkRefreshedPages();
googletag.cmd.push(function(){
    if (refreshPages.length) {
        googletag.pubads().setTargeting("pageRefresh", String(refreshPages[1]));
    }
    googletag.pubads().setTargeting("site", "TOI");
    if (typeof(rgbAdsData) != 'undefined' && rgbAdsData != null) {
        if (rgbAdsData.getAttribute('data-page_category')) {
            googletag.pubads().setTargeting("category", rgbAdsData.getAttribute('data-page_category'));
        }
        if (rgbAdsData.getAttribute('data-page_type')) {
            googletag.pubads().setTargeting("pagetype", rgbAdsData.getAttribute('data-page_type'));
        }
        if (rgbAdsData.getAttribute('data-page_id')) {
            googletag.pubads().setTargeting("article", rgbAdsData.getAttribute('data-page_id'));
        }
    }
    googletag.pubads().collapseEmptyDivs();
});

googletag.cmd.push(function() {
    if (isHome) {
        googletag.defineSlot('/3933714/TOI_Desktop/HP_Top', [[728,90],[970,250],[970,90]], 'div-gpt-ad-HP_Top').addService(googletag.pubads());
        googletag.defineSlot('/3933714/TOI_Desktop/HP_300x250_Sidebar_Right_1', [[300,250]], 'div-gpt-ad-HP_300x250_Sidebar_Right_1').addService(googletag.pubads());
        googletag.defineSlot('/3933714/TOI_Desktop/HP_300x600_Sidebar_Right_1', [[300,600]], 'div-gpt-ad-HP_300x600_Sidebar_Right_1').addService(googletag.pubads());
        googletag.defineSlot('/3933714/TOI_Desktop/HP_Middle_1', [[728,90]], 'div-gpt-ad-HP_Middle_1').addService(googletag.pubads());
        googletag.defineSlot('/3933714/TOI_Desktop/Partners_LB', [[1150,134]], 'div-gpt-ad-Partners_LB').addService(googletag.pubads());
    } else {
        if(pageType !='Writers' && pageType !='Topic' && pageType !='Sections' && latest_page !='Latest' ) {

            googletag.defineSlot('/3933714/TOI_Desktop/Top', [[970,250],[970,90],[728,90]], 'div-gpt-ad-Top')
                .addService(googletag.pubads());
            googletag.defineSlot('/3933714/TOI_Desktop/336x280_Middle_3', [[300,250],[336,280]], 'div-gpt-ad-336x280_Middle_3')
                .addService(googletag.pubads());
            googletag.defineSlot('/3933714/TOI_Desktop/336x280_Middle_2', [[300,250],[336,280]], 'div-gpt-ad-336x280_Middle_2')
                .addService(googletag.pubads());
            googletag.defineSlot('/3933714/TOI_Desktop/336x280_Middle_1', [[300,250],[336,280]], 'div-gpt-ad-336x280_Middle_1')
                .addService(googletag.pubads());
            if (pageType == 'LiveBlog') {
                googletag.defineSlot('/3933714/TOI_Desktop/Live_Middle_1', [[300,250],'fluid'], 'div-gpt-ad-Live_Middle_1')
                    .addService(googletag.pubads());
                googletag.defineSlot('/3933714/TOI_Desktop/Live_Middle_2', [[300,250],'fluid'], 'div-gpt-ad-Live_Middle_2')
                    .addService(googletag.pubads());
                googletag.defineSlot('/3933714/TOI_Desktop/300x600_SideBar_Right_1', [[300,600]], 'div-gpt-ad-300x600_SideBar_Right_1')
                    .addService(googletag.pubads());
            }
            googletag.defineSlot('/3933714/TOI_Desktop/300x250_SideBar_Right_1', [[300,250]], 'div-gpt-ad-300x250_SideBar_Right_1')
                .addService(googletag.pubads());
            googletag.defineSlot('/3933714/TOI_Desktop/300x250_SideBar_Right_2', [[300,250]], 'div-gpt-ad-300x250_SideBar_Right_2')
                .addService(googletag.pubads());
            googletag.defineSlot('/3933714/TOI_Desktop/336x260_InContent_1', [[300,250],[336,280]], 'div-gpt-ad-336x260_InContent_1')
                .addService(googletag.pubads());
            googletag.defineSlot('/3933714/TOI_Desktop/Partners_LB', [[1150,134]], 'div-gpt-ad-Partners_LB')
                .addService(googletag.pubads());

        } else {
            googletag.defineSlot('/3933714/TOI_Desktop/Top', [[970, 250], [970, 90], [728, 90]], 'div-gpt-ad-Top')
                .addService(googletag.pubads());
            googletag.defineSlot('/3933714/TOI_Desktop/300x250_SideBar_Right_1', [[300, 250]], 'div-gpt-ad-300x250_SideBar_Right_1')
                .addService(googletag.pubads());
            googletag.defineSlot('/3933714/TOI_Desktop/300x250_SideBar_Right_2', [[300, 250]], 'div-gpt-ad-300x250_SideBar_Right_2')
                .addService(googletag.pubads());

        }
    }

    googletag.pubads().enableSingleRequest();
    googletag.pubads().enableLazyLoad({
        fetchMarginPercent: 0,
        renderMarginPercent: 0,
        mobileScaling: 0
    });
    googletag.pubads().disableInitialLoad();
    googletag.enableServices();
});

pbjs.bidderSettings = {
    unruly: {
        bidCpmAdjustment: function(bidCpm, bid) {
            return bidCpm * .6;
        }
    },
};

var PREBID_TIMEOUT = 2500;
var FAILSAFE_TIMEOUT = 3000;

var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];
pbjs.que.push(function() {
    pbjs.addAdUnits(prebidadUnits);
    pbjs.setConfig({
        priceGranularity: 'high',
 	   outbrain: {
 	   bidderUrl: 'https://b1h-euc1.zemanta.com/api/bidder/prebid/bid/',
 	   usersyncUrl: 'https://b1h-euc1.zemanta.com/usersync/prebid'
 	   },
        useBidCache: true,
        disableAjaxTimeout: true,
        userSync: {
	   aliasSyncEnabled: true,
            filterSettings: {
                iframe: {
                    bidders: '*',   // '*' means all bidders
                    filter: 'include'
                },
            },
            pixelEnabled: true,
            syncsPerBidder: 50,
          userIds: [{
                name: "id5Id",
                params: {
               partner: 992
            },
            storage: {
                type: "html5",
                name: "id5id",
                expires: 90,
                refreshInSeconds: 8*3600
                }
            }],
            auctionDelay: 50
            },
        consentManagement: {
            gdpr: {
                cmpApi: 'iab',
                timeout: 8000 // GDPR timeout 3000ms
            },
            usp: {
                timeout: 100 // US Privacy timeout 100ms
            }
        }
    });


    /*pbjs.requestBids({
        bidsBackHandler: initAdserver,
        timeout: PREBID_TIMEOUT
    });*/
});

function initAdserver() {
    if (pbjs.initAdserverSet) return;

    pbjs.initAdserverSet = true;
    googletag.cmd.push(function() {
        pbjs.que.push(function() {
            pbjs.setTargetingForGPTAsync();
            //googletag.pubads().refresh();
        });
    });
}
setTimeout(function() {
    initAdserver()
}, FAILSAFE_TIMEOUT);


/** Executes a parallel auction with prebid **/
function executeParallelAuctionAlongsidePrebid() {

    var FAILSAFE_TIMEOUT = 2000;
    var requestManager = {
        adserverRequestSent: false,
        aps: false,
        prebid: false
    };

    // when both APS and Prebid have returned, initiate ad request

    function biddersBack() {
        if (requestManager.aps && requestManager.prebid) {
            sendAdserverRequest();
        }

        return;
    }

    // sends adserver request
    function sendAdserverRequest() {

        if (requestManager.adserverRequestSent === true) {
            return;
        }

        requestManager.adserverRequestSent = true;
        googletag.cmd.push(function() {
            googletag.pubads().refresh();
        });
    }

    // sends bid request to APS and Prebid
    function requestHeaderBids() {
        if(isHome) {
            var apstagSlotsMapping = [{
                slotID: 'div-gpt-ad-HP_Top',
                slotName: '/3933714/TOI_Desktop/HP_Top',
                sizes: [[728, 90], [970, 250], [970, 90]]
            },{
                slotID: 'div-gpt-ad-HP_300x250_Sidebar_Right_1',
                slotName: '/3933714/TOI_Desktop/HP_300x250_Sidebar_Right_1',
                sizes: [[300, 250]]
            },{
                slotID: 'div-gpt-ad-HP_300x600_Sidebar_Right_1',
                slotName: '/3933714/TOI_Desktop/HP_300x600_Sidebar_Right_1',
                sizes: [[300, 600]]
            },{
                slotID: 'div-gpt-ad-HP_Middle_1',
                slotName: '/3933714/TOI_Desktop/HP_Middle_1',
                sizes: [[728, 90]]
            }];
        } else {
            var apstagSlotsMapping = [{
                slotID: 'div-gpt-ad-Top',
                slotName: '/3933714/TOI_Desktop/Top',
                sizes: [[728, 90], [970, 250], [970, 90]]
            },{
                slotID: 'div-gpt-ad-336x280_Middle_3',
                slotName: '/3933714/TOI_Desktop/336x280_Middle_3',
                sizes: [[300, 250], [336, 280]]
            },{
                slotID: 'div-gpt-ad-336x280_Middle_2',
                slotName: '/3933714/TOI_Desktop/336x280_Middle_2',
                sizes: [[300, 250], [336, 280]]
            },{
                slotID: 'div-gpt-ad-336x280_Middle_1',
                slotName: '/3933714/TOI_Desktop/336x280_Middle_1',
                sizes: [[300, 250], [336, 280]]
            },{
                slotID: 'div-gpt-ad-Live_Middle_2',
                slotName: '/3933714/TOI_Desktop/Live_Middle_2',
                sizes: [[300, 250], [336, 280]]
            },{
                slotID: 'div-gpt-ad-300x600_SideBar_Right_1',
                slotName: '/3933714/TOI_Desktop/300x600_SideBar_Right_1',
                sizes: [[300, 600]]
            },{
                slotID: 'div-gpt-ad-300x250_SideBar_Right_1',
                slotName: '/3933714/TOI_Desktop/300x250_SideBar_Right_1',
                sizes: [[300, 250]]
            },{
                slotID: 'div-gpt-ad-300x250_SideBar_Right_2',
                slotName: '/3933714/TOI_Desktop/300x250_SideBar_Right_2',
                sizes: [[300, 250]]
            },{
                slotID: 'div-gpt-ad-336x260_InContent_1',
                slotName: '/3933714/TOI_Desktop/336x260_InContent_1',
                sizes: [[300, 250], [336, 280]]
            }];
        }

        // APS request
        apstag.fetchBids({
            slots: apstagSlotsMapping
        },function(bids) {
            googletag.cmd.push(function() {
                apstag.setDisplayBids();
                requestManager.aps = true; // signals that APS request has completed
                biddersBack(); // checks whether both APS and Prebid have returned
            });
        });

        // put prebid request here
        pbjs.que.push(function() {
            pbjs.requestBids({
                bidsBackHandler: function() {
                    googletag.cmd.push(function() {
                        pbjs.setTargetingForGPTAsync();
                        requestManager.prebid = true; // signals that Prebid request has completed
                        biddersBack(); // checks whether both APS and Prebid have returned
                    })
                }
            });
        });
    }

    // initiate bid request
    requestHeaderBids();

    // set failsafe timeout
    window.setTimeout(function() {
        sendAdserverRequest();
    }, FAILSAFE_TIMEOUT);

};

executeParallelAuctionAlongsidePrebid();