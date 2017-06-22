$(document).ready(function() {

    var icons = [
        'telicon-account',
        'telicon-account-jump',
        'telicon-apps',
        'telicon-arrow-down',
        'telicon-arrow-down--circle',
        'telicon-arrow-down--circle-o',
        'telicon-arrow-left',
        'telicon-arrow-left--circle',
        'telicon-arrow-left--circle-o',
        'telicon-arrow-right',
        'telicon-arrow-right--circle',
        'telicon-arrow-right--circle-o',
        'telicon-arrow-up',
        'telicon-arrow-up--circle',
        'telicon-arrow-up--circle-o',
        'telicon-assign',
        'telicon-available-balance',
        'telicon-billing',
        'telicon-billing-history',
        'telicon-billing-last',
        'telicon-billing-transactions',
        'telicon-calendar',
        'telicon-calendar-plus',
        'telicon-caret-up',
        'telicon-caret-right',
        'telicon-caret-down',
        'telicon-caret-left',
        'telicon-check--circle',
        'telicon-check--circle-o',
        'telicon-clock',
        'telicon-credit-card',
        'telicon-credit-card-plus',
        'telicon-credit-1x-charge',
        'telicon-credit-prorated-charge',
        'telicon-dashboard-grid',
        'telicon-dashboard-needle',
        'telicon-device-ata',
        'telicon-device-fax',
        'telicon-device-mobile',
        'telicon-device-soft-phone',
        'telicon-device-sprint-phone',
        'telicon-device-tablet',
        'telicon-device-voip-phone',
        'telicon-downgrade',
        'telicon-download',
        'telicon-enter',
        'telicon-exit',
        'telicon-extension',
        'telicon-failover',
        'telicon-file-o',
        'telicon-folder',
        'telicon-forward',
        'telicon-global',
        'telicon-headphones',
        'telicon-headphones-deafen',
        'telicon-home',
        'telicon-info--circle',
        'telicon-info--circle-o',
        'telicon-ip',
        'telicon-list',
        'telicon-list-prioritize',
        'telicon-main-office',
        'telicon-mic',
        'telicon-mic-muted',
        'telicon-minus--circle',
        'telicon-minus--circle-o',
        'telicon-move-file',
        'telicon-multiple-items',
        'telicon-num-pad',
        'telicon-number',
        'telicon-park--circle',
        'telicon-park--circle-o',
        'telicon-minus--circle-o',
        'telicon-pause--circle',
        'telicon-pause--circle-o',
        'telicon-pbx',
        'telicon-phone-answer',
        'telicon-phone-hangup',
        'telicon-phone-inbound',
        'telicon-phone-outbound',
        'telicon-phone-missed',
        'telicon-pie-chart--full',
        'telicon-pie-chart--partial',
        'telicon-play--circle',
        'telicon-play--circle-o',
        'telicon-plus--circle',
        'telicon-plus--circle-o',
        'telicon-porting',
        'telicon-question--circle',
        'telicon-question--circle-o',
        'telicon-root-level',
        'telicon-service-plan',
        'telicon-service-providers',
        'telicon-setting-cog',
        'telicon-setting-cog-double',
        'telicon-speaking',
        'telicon-two-way',
        'telicon-unassign',
        'telicon-upgrade',
        'telicon-upload',
        'telicon-user',
        'telicon-user-plus',
        'telicon-user-group',
        'telicon-user-admin',
        'telicon-voicemail',
        'telicon-warning--triangle',
        'telicon-warning--triangle-o',
        'telicon-x--circle',
        'telicon-x--circle-o',
    ];

    $.each(icons, function(index, value) {
        $('.icons').append('<div class="col--lg-3_12 col--md-4_8 col--sm"><div class="icon-container" data-clipboard-text="' + value + '"><i class="'+ value +'"></i><span>' + value + '</span></div></div>');
    });

    // instantiate search filter
    $(function() {
        $('.input--search').fastLiveFilter('.icons');
    });

    // instantiate clipboard
    var clipboard = new Clipboard('.icon-container');

    clipboard.on('success', function(e) {
        console.log(e);
    });
    clipboard.on('error', function(e) {
        console.log(e);
    });

});
