/**
 * Created by sadnana on 25/02/16.
 */

var LoadDomainOnt = "loaddomainont";
var LoadServiceOnt = "loadserviceont";
var Viewsourcecode = "viewsourcecode";
var Serviceclass = "serviceclass";
var Dbconnectionclass = "dbconnectionclass";
var Webxmlconf = "webxmlconf";
var Indexjsp = "indexjsp";
var Pomxml = "pomxml";

var loadedDomainOntology = "";
var loadedServiceOntology = "";
var loadedServiceClassCode = "";
var loadedDBConnClassCode = "";
var loadedwebxmlconf = "";
var loadedindexjsp = "";
var loadedpomxml = "";

var Slash = "/";
var encode = encodeURIComponent;
var slash = function(s) {
    return Slash + s;
};
var append = function(s1, s2) {
    return s1 + s2;
};
var WS = "ws";
var service = function(service) {
    return append(WS, slash(service));
};
// return the domain ontology URI from the textbox
var domainOntURI = function() {
    return $("#domainOntologyURI").val();
};
// return the service ontology URI from the textbox
var serviceOntURI = function() {
    return $("#serviceOntologyURI").val();
};
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
};
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
};

var loadServiceClassCode = function(handler) {
    $.ajax({
        type: "GET",
        url: service(Viewsourcecode + slash(Serviceclass)),
        contentType: "application/json; charset=utf-8",
        success: function(loadedServiceClassCode) {
            handler(loadedServiceClassCode);
        }
    });
};

var loadDBConnClassCode = function(handler) {
    $.ajax({
        type: "GET",
        url: service(Viewsourcecode + slash(Dbconnectionclass)),
        contentType: "application/json; charset=utf-8",
        success: function(loadedDBConnClassCode) {
            handler(loadedDBConnClassCode);
        }
    });
};

var loadWebXMLConfCode = function(handler) {
    $.ajax({
        type: "GET",
        url: service(Viewsourcecode + slash(Webxmlconf)),
        contentType: "application/json; charset=utf-8",
        success: function(loadedwebxmlconf) {
            handler(loadedwebxmlconf);
        }
    });
};

var loadIndexJSPCode = function(handler) {
    $.ajax({
        type: "GET",
        url: service(Viewsourcecode + slash(Indexjsp)),
        contentType: "application/json; charset=utf-8",
        success: function(loadedindexjsp) {
            handler(loadedindexjsp);
        }
    });
};


var loadPomXMLConf  = function(handler) {
    $.ajax({
        type: "GET",
        url: service(Viewsourcecode + slash(Pomxml)),
        contentType: "application/json; charset=utf-8",
        success: function(loadedpomxml) {
            handler(loadedpomxml);
        }
    });
};


var loadRequest = function(ontURI) {
    var onturi = (ontURI) ? ontURI : "";
    return {
        //iri should be matched
        iri :onturi
    };
};



// Set the button handler functions
$(document).ready(function() {

    var mappingRulesLoadClicked = false;
    var domainOntLoadClicked = false;
    var serviceOntLoadClicked = false;
    var loadSourceCodeBtnClicked = false;


    $('#rootwizard').bootstrapWizard({'nextSelector': '.button-next', 'previousSelector': '.button-previous'});

    $("#go2DemoBtn").click(function() {
        $('#tabs li:eq(1) a').tab('show');
    });

    $("#go2OntlolgiesTabBtn").click(function() {

        $('#tabs li:eq(2) a').tab('show');
    });

    $("#go2mappingRulesTabBtn").click(function() {

        if(domainOntLoadClicked ===  true && serviceOntLoadClicked === true)
            $('#tabs li:eq(3) a').tab('show');
        else
            alert('Both ontologies must be loaded before generating SADI service code.')

    });

    $("#go2SourceCodeBtn").click(function() {
        if(mappingRulesLoadClicked === true)
            $('#tabs li:eq(4) a').tab('show');
        else
            alert('Mapping rules must be loaded before generating SADI service code.')
    });




    // load the mapping rules when clicked

    $("#loadPSOAMappingRulesBtn").click(function() {
        $("#PSOAMappingRulesContentID").val(psoaRuleMLMapping);
        mappingRulesLoadClicked = true;
        // enable the first tab (index starting at 0)
        $('#tabs li:eq(3) a').tab('show');
    });
    $("#PSOAMappingRulesContentID").prop("readonly",true);

    // MAGNIFY the TOHDW image 1.6 times the original size when hovering over
    $('#TOWDASchemaImageID').hover(function() {
        $("#TOWDASchemaImageID").addClass('transition');

    }, function() {
        $("#TOWDASchemaImageID").removeClass('transition');
    });

    // the URI in the textbox is now fixed for the HAI.owl, to enable set to 'enabled'
    $("#domainOntologyURI").prop("readonly",true);
    $("#serviceOntologyURI").prop("readonly",true);
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
    //$("#domainOntologyContent").hide();
    //$("#serviceOntologyContent").hide();
    // load and display the domain ontology when clicked
    $('#loadDomOntBtn').click(function() {
        loadDomainOntology(encode(domainOntURI()), function(result) {
            domainOntLoadClicked = true;
            loadedDomainOntology = result;
            $("#domainOntologyContent").val(loadedDomainOntology);
            $("#domainOntologyContent").show();
            //$("#tabs")
            //$("#tabs").tabs('select', 1);
            //alert('sucks');
            //$('#myTab a:last').tab('show');
            // enable the second tab (index starting at 0)
            $('#tabs li:eq(2) a').tab('show');

        });
    });

    // load and display the service ontology when clicked
    $('#loadServOntBtn').click(function() {
        serviceOntLoadClicked = true;
        loadServiceOntology(encode(serviceOntURI()), function(result) {
            loadedServiceOntology = result;
            $("#serviceOntologyContent").val(loadedServiceOntology);
            $("#serviceOntologyContent").show();
            //$("#tabs")
            //$("#tabs").tabs('select', 1);
            //alert('sucks');
            //$('#myTab a:last').tab('show');
            // enable the second tab (index starting at 0)
            $('#tabs li:eq(2) a').tab('show');

        });
    });

    // load and display the service ontology when clicked
    $('#loadSourceCodeBtn').click(function() {

        if(loadSourceCodeBtnClicked ===  true)
        {

            loadServiceClassCode(function(result) {
                loadedServiceClassCode = result;
                /*
                 loadedServiceClassCode = '<p>' + '<pre>'+
                 ' <code class="language-java">' + result + '</pre>'+ ' </code>' + '</p>';

                 $("#serviceClassTab").append(loadedServiceClassCode);
                 */
                $("#serviceClassCodeTextareaID").val(loadedServiceClassCode);
                $("#serviceClassTab").show();
            });

            loadDBConnClassCode(function(result) {
                loadedDBConnClassCode = result;
                /*
                 loadedDBConnClassCode = '<p>' + '<pre>'+
                 ' <code class="language-java">' + result + '</pre>'+ ' </code>' + '</p>';
                 $('#mysqlConnectionTab').append(loadedDBConnClassCode);
                 */
                $("#mysqlConnCodeTextareaID").val(loadedDBConnClassCode);
                //$("#serviceClassTab").show();
                //$('#tabs li:eq(1) a').tab('show');

            });

            loadWebXMLConfCode(function(result) {
                loadedwebxmlconf = result;
                /*
                 loadedwebxmlconf = '<p>' + '<pre>'+
                 ' <code class="language-xml">' + result + '</pre>'+ ' </code>' + '</p>';
                 $('#webXMLTab').append(loadedwebxmlconf);
                 */
                $("#webXMLConfTextareaID").val(loadedwebxmlconf);
                //$("#serviceClassTab").show();
                //$('#tabs li:eq(1) a').tab('show');

            });

            loadIndexJSPCode(function(result) {
                loadedindexjsp = result;
                /*
                 loadedindexjsp = '<p>' + '<pre>'+
                 ' <code class="language-jsp">' + result + '</pre>'+ ' </code>' + '</p>';
                 $('#indexJSPTab').append(loadedindexjsp);
                 */
                $("#indexJSPCodeTextareaID").val(loadedindexjsp);
                //$("#serviceClassTab").show();
                //$('#tabs li:eq(1) a').tab('show');

            });

            loadPomXMLConf(function(result) {
                loadedpomxml = result;
                /*
                 loadedpomxml = '<p>' + '<pre>'+
                 ' <code class="language-java">' + loadedpomxml + '</pre>'+ ' </code>' + '</p>';
                 $('#pomXMLTab').append(loadedpomxml);
                 */
                $("#pomXMLConfTextareaID").val(loadedpomxml);
                //$("#serviceClassTab").show();
                //$('#tabs li:eq(1) a').tab('show');

            });
            $('#tabs li:eq(4) a').tab('show');
        }
        else{
            alert('Select a service to generate code.');
            $('#tabs li:eq(4) a').tab('show');
        }


    });




    $("#serviceDropDownID").on("click", "li a", function() {
        var serviceSelected = $(this).text();


        // set parameters for the first service
        if (serviceSelected === 'getDiagnosisIDByPatientID'){

            loadSourceCodeBtnClicked = true;

            $('#ServiceNameID').val(serviceSelected);
            $('#ServiceNameID').prop("readonly",true);
            $('#ServiceClassID').val('ca.unbsj.cbakerlab.' + serviceSelected + '_Demo.' + serviceSelected);
            $('#ServiceClassID').prop("readonly",true);
            $('#InputClassID').val('http://cbakerlab.unbsj.ca:8080/haitohdemo/haitoh-sadi-service-ontology.owl#' + serviceSelected + '_Input');
            $('#InputClassID').prop("readonly",true);
            $('#OutputClassID').val('http://cbakerlab.unbsj.ca:8080/haitohdemo/haitoh-sadi-service-ontology.owl#' + serviceSelected + '_Output');
            $('#OutputClassID').prop("readonly",true);
            $('#DescriptionID').val('Gets patient\'s diagnosis id based on the patient id');
            $('#DescriptionID').prop("readonly",true);
            $('#EmailID').val('sadnanalmanir@gmail.com');
            $('#EmailID').prop("readonly",true);
        }
        // set parameters for the first service
        if (serviceSelected === 'getDiagnosisCodeByDiagnosisID'){

            loadSourceCodeBtnClicked = true;

            $('#ServiceNameID').val(serviceSelected);
            $('#ServiceNameID').prop("readonly",true);
            $('#ServiceClassID').val('ca.unbsj.cbakerlab.' + serviceSelected + '_Demo.' + serviceSelected);
            $('#ServiceClassID').prop("readonly",true);
            $('#InputClassID').val('http://cbakerlab.unbsj.ca:8080/haitohdemo/haitoh-sadi-service-ontology.owl#' + serviceSelected + '_Input');
            $('#InputClassID').prop("readonly",true);
            $('#OutputClassID').val('http://cbakerlab.unbsj.ca:8080/haitohdemo/haitoh-sadi-service-ontology.owl#' + serviceSelected + '_Output');
            $('#OutputClassID').prop("readonly",true);
            $('#DescriptionID').val('Gets patient\'s diagnosis code based on the diagnosis id');
            $('#DescriptionID').prop("readonly",true);
            $('#EmailID').val('sadnanalmanir@gmail.com');
            $('#EmailID').prop("readonly",true);
        }




    });





    //$("#tabs").tabs({
    //    disabled : [1, 2]
    //});
    //$("#tabs").tabs({
    //  disabled : [1, 2]

//});
});