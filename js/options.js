jQuery(document).ready(function() {
    fill_options();
    jQuery("[data-content]").popup();
    jQuery(".submit.button").click(save_options);
    jQuery(".reset.button").click(function() {
        jQuery("input[name='password']").val(Defaults.password);
        jQuery("input[name='domains']").val(Defaults.domains);
    });
});

function save_options() {
    var password = jQuery("input[name='password']").val();
    var domains = jQuery("input[name='domains']").val();
    var payload = {
        password: password,
        domains: domains
    }
    Store.set(payload, true);
}

function fill_options() {
    Store.refresh(function() {
        jQuery("input[name='password']").val(Store.password);
        jQuery("input[name='domains']").val(Store.domains);
    });
}