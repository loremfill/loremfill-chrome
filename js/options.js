jQuery(document).ready(function() {
    fill_options();
    jQuery("#EnDLrDcjbUyKCvVThsPMuGfskEDFcK2fvBAJTDEUBvmee2AKC [data-content]").popup();
    jQuery("#EnDLrDcjbUyKCvVThsPMuGfskEDFcK2fvBAJTDEUBvmee2AKC .submit.button").click(save_options);
    jQuery("#EnDLrDcjbUyKCvVThsPMuGfskEDFcK2fvBAJTDEUBvmee2AKC .reset.button").click(function() {
        get_option_element('password').val(Defaults.password);
        get_option_element('domains').val(Defaults.domains);
    });
});

function save_options() {
    var password = get_option_element('password').val();
    var domains = get_option_element('domains').val();
    var payload = {
        password: password,
        domains: domains
    }
    Store.set(payload, true);
}

function fill_options() {
    Store.refresh(function() {
        get_option_element('password').val(Store.password);
        get_option_element('domains').val(Store.domains);
    });
}

function get_option_element(name) {
    return jQuery("#EnDLrDcjbUyKCvVThsPMuGfskEDFcK2fvBAJTDEUBvmee2AKC input[name='"+ name + "']");
}