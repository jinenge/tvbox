if (typeof Object.assign != 'function') {
    Object.assign = function () {
	var target = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
}
function getMubans() {
    var mubanDict = { // 模板字典
        mxpro: {
            title: '',
            host: '',
            // homeUrl:'/',
            url: '/vodshow/fyclass--------fypage---.html',
            searchUrl: '/vodsearch/**----------fypage---.html',
            searchable: 2,//是否启用全局搜索,
            quickSearch: 0,//是否启用快速搜索,
            filterable: 0,//是否启用分类筛选,
            headers: {//网站的请求头,完整支持所有的,常带ua和cookies
                'User-Agent': 'MOBILE_UA',
                // "Cookie": "searchneed=ok"
            },
            class_parse: '.navbar-items li:gt(2):lt(8);a&&Text;a&&href;/(\\d+).html',
            play_parse: true,
            lazy: '',
            limit: 6,
            推荐: '.tab-list.active;a.module-poster-item.module-item;.module-poster-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href',
            double: true, // 推荐内容是否双层定位
            一级: 'body a.module-poster-item.module-item;a&&title;.lazyload&&data-original;.module-item-note&&Text;a&&href',
            二级: {
                "title": "h1&&Text;.module-info-tag&&Text",
                "img": ".lazyload&&data-original",
                "desc": ".module-info-item:eq(1)&&Text;.module-info-item:eq(2)&&Text;.module-info-item:eq(3)&&Text",
                "content": ".module-info-introduction&&Text",
                "tabs": ".module-tab-item",
                "lists": ".module-play-list:eq(#id) a"
            },
            搜索: 'body .module-item;.module-card-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href;.module-info-item-content&&Text',
        },
        mxone5: {
            title: '',
            host: '',
            url: '/show/fyclass--------fypage---.html',
            searchUrl: '/search/**----------fypage---.html',
            searchable: 2,//是否启用全局搜索,
            quickSearch: 0,//是否启用快速搜索,
            filterable: 0,//是否启用分类筛选,
            class_parse: '.nav-menu-items&&li;a&&Text;a&&href;.*/(.*?).html',
            play_parse: true,
            lazy: '',
            limit: 6,
            推荐: '.module-list;.module-items&&.module-item;a&&title;img&&data-src;.module-item-text&&Text;a&&href',
            double: true, // 推荐内容是否双层定位
            一级: '.module-items .module-item;a&&title;img&&data-src;.module-item-text&&Text;a&&href',
            二级: {
                "title": "h1&&Text;.tag-link&&Text",
                "img": ".module-item-pic&&img&&data-src",
                "desc": ".video-info-items:eq(0)&&Text;.video-info-items:eq(1)&&Text;.video-info-items:eq(2)&&Text;.video-info-items:eq(3)&&Text",
                "content": ".vod_content&&Text",
                "tabs": ".module-tab-item",
                "lists": ".module-player-list:eq(#id)&&.scroll-content&&a"
            },
            搜索: '.module-items .module-search-item;a&&title;img&&data-src;.video-serial&&Text;a&&href',
        },
        首图: {
            title: '',
            host: '',
            url: '/vodshow/fyclass--------fypage---/',
            searchUrl: '/vodsearch/**----------fypage---.html',
            searchable: 2,//是否启用全局搜索,
            quickSearch: 0,//是否启用快速搜索,
            filterable: 0,//是否启用分类筛选,
            headers: {//网站的请求头,完整支持所有的,常带ua和cookies
                'User-Agent': 'MOBILE_UA',
                // "Cookie": "searchneed=ok"
            },
            class_parse: '.myui-header__menu li.hidden-sm:gt(0):lt(5);a&&Text;a&&href;/(\\d+).html',
            play_parse: true,
            lazy: '',
            limit: 6,
            推荐: 'ul.myui-vodlist.clearfix;li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
            double: true, // 推荐内容是否双层定位
            一级: '.myui-vodlist li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
            二级: {
                "title": ".myui-content__detail .title&&Text;.myui-content__detail p:eq(-2)&&Text",
                "img": ".myui-content__thumb .lazyload&&data-original",
                "desc": ".myui-content__detail p:eq(0)&&Text;.myui-content__detail p:eq(1)&&Text;.myui-content__detail p:eq(2)&&Text",
                "content": ".content&&Text",
                "tabs": ".nav-tabs:eq(0) li",
                "lists": ".myui-content__list:eq(#id) li"
            },
            搜索: '#searchList li;a&&title;.lazyload&&data-original;.text-muted&&Text;a&&href;.text-muted:eq(-1)&&Text',
        },
        首图2: {
            title: '',
            host: '',
            url: '/list/fyclass-fypage.html',
            searchUrl: '/vodsearch/**----------fypage---.html',
            searchable: 2,//是否启用全局搜索,
            quickSearch: 0,//是否启用快速搜索,
            filterable: 0,//是否启用分类筛选,
            headers: {
                'User-Agent': 'UC_UA',
                // "Cookie": ""
            },
            // class_parse:'.stui-header__menu li:gt(0):lt(7);a&&Text;a&&href;/(\\d+).html',
            class_parse: '.stui-header__menu li:gt(0):lt(7);a&&Text;a&&href;.*/(.*?).html',
            play_parse: true,
            lazy: '',
            limit: 6,
            推荐: 'ul.stui-vodlist.clearfix;li;a&&title;.lazyload&&data-original;.pic-text&&Text;a&&href',
            double: true, // 推荐内容是否双层定位
            一级: '.stui-vodlist li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
            二级: {
                "title": ".stui-content__detail .title&&Text;.stui-content__detail p:eq(-2)&&Text",
                "img": ".stui-content__thumb .lazyload&&data-original",
                "desc": ".stui-content__detail p:eq(0)&&Text;.stui-content__detail p:eq(1)&&Text;.stui-content__detail p:eq(2)&&Text",
                "content": ".detail&&Text",
                "tabs": ".stui-vodlist__head h3",
                "lists": ".stui-content__playlist:eq(#id) li"
            },
            搜索: 'ul.stui-vodlist__media:eq(0) li,ul.stui-vodlist:eq(0) li,#searchList li;a&&title;.lazyload&&data-original;.text-muted&&Text;a&&href;.text-muted:eq(-1)&&Text',
            搜索1: 'ul.stui-vodlist&&li;a&&title;.lazyload&&data-original;.text-muted&&Text;a&&href;.text-muted:eq(-1)&&Text',
            搜索2: 'ul.stui-vodlist__media&&li;a&&title;.lazyload&&data-original;.text-muted&&Text;a&&href;.text-muted:eq(-1)&&Text',
        },
        默认: {
            title: '',
            host: '',
            url: '/vodshow/fyclass--------fypage---.html',
            searchUrl: '/vodsearch/-------------.html?wd=**',
            searchable: 2,//是否启用全局搜索,
            quickSearch: 0,//是否启用快速搜索,
            filterable: 0,//是否启用分类筛选,
            headers: {
                'User-Agent': 'MOBILE_UA',
            },
            play_parse: true,
            lazy: '',
            limit: 6,
            double: true, // 推荐内容是否双层定位
        },
        vfed: {
            title: '',
            host: '',
            url: '/index.php/vod/show/id/fyclass/page/fypage.html',
            searchUrl: '/index.php/vod/search/page/fypage/wd/**.html',
            searchable: 2,//是否启用全局搜索,
            quickSearch: 0,//是否启用快速搜索,
            filterable: 0,//是否启用分类筛选,
            headers: {
                'User-Agent': 'UC_UA',
            },
            // class_parse:'.fed-pops-navbar&&ul.fed-part-rows&&a.fed-part-eone:gt(0):lt(5);a&&Text;a&&href;.*/(.*?).html',
            class_parse: '.fed-pops-navbar&&ul.fed-part-rows&&a;a&&Text;a&&href;.*/(.*