/**
 * Created by sadnana on 25/02/16.
 */

var LoadDomainOnt = "loaddomainont";
var LoadServiceOnt = "loadserviceont";
var loadedDomainOntology = "";
var loadedServiceOntology = "";
var Slash = "/";
var encode = encodeURIComponent;
var slash = function(s) {
    return Slash + s;
}
var append = function(s1, s2) {
    return s1 + s2;
}
var WS = "ws";
var service = function(service) {
    return append(WS, slash(service));
}
// return the domain ontology URI from the textbox
var domainOntURI = function() {
    return $("#domainOntologyURI").val();
}
// return the service ontology URI from the textbox
var serviceOntURI = function() {
    return $("#serviceOntologyURI").val();
}
var loadDomainOntology = function(domOntURI, handler) {
    $.ajax({
        type: "POST",
        url: service(LoadDomainOnt),
        data: JSON.stringify(loadRequest(domOntURI)),
        contentType: "application/json; charset=utf-8",
        success: function(loadedOntologyContent) {
            handler(loadedOntologyContent);
        }
    });
}
var loadServiceOntology = function(servOntURI, handler) {
    $.ajax({
        type: "POST",
        url: service(LoadServiceOnt),
        data: JSON.stringify(loadRequest(servOntURI)),
        contentType: "application/json; charset=utf-8",
        success: function(loadedOntologyContent) {
            handler(loadedOntologyContent);
        }
    });
}

var loadRequest = function(ontURI) {
    var onturi = (ontURI) ? ontURI : "";
    return {
        //iri should be matched
        iri :onturi
    };
}



// Set the button handler functions
$(document).ready(function() {

    // the URI in the textbox is now fixed for the HAI.owl, to enable set to 'enabled'
    $("#domainOntologyURI").prop("disabled",true);
    $("#serviceOntologyURI").prop("disabled",true);
    // Load PSOA RuleML/XML Rulebases when selected
    //$("#PSOARuleMLXMLKB").val(SamplePSOAKB);
    // highlight the group PSOA RuleML/XML rulebase item  when selected
    /*$('.list-group-item').on('click', function(e) {
        var previous = $(this).closest(".list-group").children(".active");
        previous.removeClass('active'); // previous list-item
        $(e.target).addClass('active'); // activated list-item
    });
    */

    // hide the loading text area hidden until load button is clicked
    $("#domainOntologyContent").hide();
    $("#serviceOntologyContent").hide();
    // load and display the domain ontology when clicked
    $('#loadDomOntBtn').click(function() {
        loadDomainOntology(encode(domainOntURI()), function(result) {
            loadedDomainOntology = result;
            $("#domainOntologyContent").val(loadedDomainOntology);
            $("#domainOntologyContent").show();
                //$("#tabs")
                //$("#tabs").tabs('select', 1);
                //alert('sucks');
                //$('#myTab a:last').tab('show');
                // enable the second tab (index starting at 0)
            $('#tabs li:eq(0) a').tab('show');

        });
    });
    // load and display the service ontology when clicked
    $('#loadServOntBtn').click(function() {
        loadServiceOntology(encode(serviceOntURI()), function(result) {
            loadedServiceOntology = result;
            $("#serviceOntologyContent").val(loadedServiceOntology);
            $("#serviceOntologyContent").show();
            //$("#tabs")
            //$("#tabs").tabs('select', 1);
            //alert('sucks');
            //$('#myTab a:last').tab('show');
            // enable the second tab (index starting at 0)
            $('#tabs li:eq(0) a').tab('show');

        });
    });
    //$("#tabs").tabs({
    //    disabled : [1, 2]
    //});
    //$("#tabs").tabs({
    //  disabled : [1, 2]
    //});
});
