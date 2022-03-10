(function () {
    // Cutting The Mustard!
    if ('querySelector' in window.parent.document &&
        'addEventListener' in window.parent
    ) {

        // Funnel
        var funnel = {
            'funnel_name': null,
            'funnel_steps': 0,
            'step_name': null,
            'step_num': 0
        };

        if(window.parent.location.hostname === 'regist.asia.nikkei.com' && window.parent.location.pathname === '/member/register/'){
            funnel.funnel_name = 'new_subscription';
            funnel.funnel_steps = 2;
            funnel.step_name = 'start';
            funnel.step_number = 1;
        }else if(window.parent.location.hostname === 'regist.asia.nikkei.com' && window.parent.location.pathname === '/member/register/complete/'){
            funnel.funnel_name = 'new_subscription';
            funnel.funnel_steps = 2;
            funnel.step_name = 'complete';
            funnel.step_number = 2;
        }else if(window.parent.location.hostname === 'regist.asia.nikkei.com' && window.parent.location.pathname === '/member/edit/'){
            funnel.funnel_name = 'edit_info';
            funnel.funnel_steps = 2;
            funnel.step_name = 'view';
            funnel.step_number = 1;
        }else if(window.parent.location.hostname === 'regist.asia.nikkei.com' && window.parent.location.pathname === '/member/edit/plan/'){
            funnel.funnel_name = 'edit_info';
            funnel.funnel_steps = 2;
            funnel.step_name = 'updated_plan';
            funnel.step_number = 2;
        }else{
            funnel = undefined;
        }

        // Generate Ad frame target list
        var adElements = [];
        var adFrontPage = window.parent.document.getElementsByTagName("iframe");
        for (var i = 0; i < adFrontPage.length; i++) {
            if (adFrontPage[i].id.match("google_ads_iframe")) {
                adElements.push(adFrontPage[i]);
            }
        }
        var internalAd = window.parent.document.getElementsByClassName('ad-card--internal-ad');
        for (var i = 0; i < internalAd.length; i++) {
            adElements.push(internalAd[i]);
        }

        // Count paragraphs if it's an article page
        var articleBody = window.parent.document.querySelector('div.ezrichtext-field');
        var contentParagraphCount = 0;
        var contentTextLength = 0;
        var contentWordCount = 0;
        if(articleBody){
            var paragraphArray = articleBody.getElementsByTagName("p");
            if(paragraphArray.length > 0){
                contentParagraphCount = paragraphArray.length;
                contentTextLength = articleBody.textContent.length;
                contentWordCount = articleBody.textContent.replace(/(\,|\.|:|;|\!|\?|\s|--)+/g, ' ').split(' ').length - 1;
            }
        }
        // Paywall Status
        var paywallStatus = "none";
        var paywallType = "none";
        var paywallElements = document.getElementsByClassName("pw-widget--visible");
        if (paywallElements.length > 0) {
            paywallStatus = "locked";
            paywallType = paywallElements[0].id
        } else {
            paywallStatus = "opened";
        }

        // Configure
        var config = {
            'system': {
                'endpoint': 'astat.nikkei.com',
                'cookieDomain': 'nikkei.com'
            },
            'defaults': {
                'pageUrl': window.parent.document.location.href,
                'pageReferrer': window.parent.document.referrer,
                'pageTitle': '-',
            },
            'product': {
                'productFamily': 'NAR',
                'productName': 'NAR'
            },
            'options': {
                'trackClick': {
                    'enable': true,
                    'targetAttribute': 'data-trackable',
                },
                'trackLink': {
                    'enable': true,
                    'internalDomains': ['www.nikkei.com', 'mw.nikkei.com', 'r.nikkei.com', 'next.nikkei.com', 'id.nikkei.com', 'style.nikkei.com', 'asia.nikkei.com', 'regist.asia.nikkei.com', 'staging.asia.dev.nikkei.com', 'regist.asia.dev.nikkei.com'],
                    'nameAttribute': 'data-atlas-link-name',
                },
                'trackDownload': {
                    'enable': true,
                    'fileExtensions': ['pdf', 'zip', 'laz', 'tar', 'gz', 'tgz', 'docx', 'xlsx', 'pptx', 'doc', 'xls', 'ppt'],
                    'nameAttribute': 'data-atlas-link-name',
                },
                'trackPerformance': {
                    'enable': true,
                },
                'trackScroll': {
                    'enable': true,
                    'granularity': 25,
                    'threshold': 2,
                },
                'trackInfinityScroll': {
                    'enable': false,
                    'step': 600,
                    'threshold': 2,
                },
                'trackRead': {
                    'enable': true,
                    'target': articleBody,
                    'granularity': 25,
                    'milestones': [4, 15, 30, 60, 90, 120],
                },
                'trackViewability': {
                    'enable': true,
                    'targets': adElements,
                },
                'trackMedia': {
                    'enable': true,
                    'selector': 'video, audio',
                    'heartbeat': 5,
                },
                'trackForm': {
                    'enable': true,
                    'target': window.parent.document.querySelector('form#formMember'),
                },
                'trackUnload': {
                    'enable': true,
                },
                'trackThroughMessage': {
                    'enable': true,
                }
            }
        }
        atlasTracking.config(config);
        InitRealTimeSpentTracker(config);

        // Init Page data
        var authority = null;
        if(window.parent.session && window.parent.session.authority){
            authority = window.parent.session.authority;
        }else if(window.parent.authority){
            authority = window.parent.authority;
        }
        var tracking_data = window.parent.tracking_data || {};

        // Check & Build custom data for pages under regist subdomain
        var user_obj = window.parent.session || {};
        user_obj.articlesViewed = window.parent.prop30 || undefined;
        user_obj.contract_id = window.parent.contractId || undefined;

        atlasTracking.initPage({
            user: {
                'user_id': atlasTracking.getCookieValue('NID-Serial-Cookie'),
                'user_status': authority,
                'custom_object': user_obj,
                'site_session': undefined
            },
            context: {
                'app': tracking_data.asset_type || undefined,
                'app_version': undefined,
                'source': window.parent.prop12 || undefined,
                'edition': window.parent.prop21 || undefined,
                'content_id': tracking_data.article_id || undefined,
                'content_name': tracking_data.title  || undefined,
                'content_status': paywallStatus,
                'page_name': tracking_data.asset_type || 'other',
                'page_num': atlasTracking.getQueryValue('df') || 1,
                'category_l1': 'NAR',
                'category_l2': tracking_data.section || undefined,
                'category_l3': tracking_data.topic || undefined,
                'tracking_code': atlasTracking.getQueryValue('n_cid'),
                'campaign': {
                    'name': atlasTracking.getQueryValue('utm_campaign') || undefined,
                    'source': atlasTracking.getQueryValue('utm_source') || undefined,
                    'medium': atlasTracking.getQueryValue('utm_medium') || undefined,
                    'term': atlasTracking.getQueryValue('utm_term') || undefined,
                    'content': atlasTracking.getQueryValue('utm_content') || undefined,
                },
                'events': null,
                'custom_object': {
                    'content_paragraph_count': contentParagraphCount,
                    'content_text_length': contentTextLength,
                    'content_word_count': contentWordCount,
                    'primary_topic': window.parent.prop25 || undefined,
                    'primary_region': window.parent.prop26 || undefined,
                    'related_company_factset_entity_id': window.parent.prop33 || undefined,
                    'campaign_aid': window.parent.aid || undefined,
                  	'google_pts_score': window.parent.pts_score || undefined
                },
                'funnel': funnel || undefined
            }
        });

		
        // Set Custom Data
        atlasTracking.setCustomVars('flags', {
            'tracking_data': tracking_data || undefined,
            'paywall_state': window.parent.paywallState || undefined,
            'paywall_type': paywallType
        });

        // Set Custom IDs
        var rtoaster_id = atlasTracking.getCookieValue('_rt.uid');
        if (rtoaster_id) {
            atlasTracking.setCustomId('rtoaster', rtoaster_id);
        }
        if(window.parent.session && window.parent.session.memberId && window.parent.session.memberId !== '-'){
            atlasTracking.setCustomId('nar', window.parent.session.memberId);
        }else if(window.parent.memberId && window.parent.memberId !== '-'){
            atlasTracking.setCustomId('nar', window.parent.memberId);
        }

        // Send PV
        atlasTracking.trackPage();

        // Rtoaster Integration
        if(window.parent.Rtoaster && window.parent.Rtoaster.existingContent && window.parent.Rtoaster.existingContent.length > 0){
            for(var i = 0; i < window.parent.Rtoaster.existingContent.length; i++){
                atlasTracking.trackAction('dispatch', 'rtoaster', null, {
                    "name": 'rtoaster-impression',
                    "custom_vars": window.parent.Rtoaster.existingContent[i]
                });
            }
        }
    }
}());
