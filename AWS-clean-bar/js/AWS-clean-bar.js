/**
 * JavaScript file to be loaded into matched pages
 **/
$(document).ready(function() {

  var map = {
    "API Gateway": "APIG",
    "OpsWorks": "OW",
    "Lambda": "APIG",
    "S3": "S3",
    "CloudWatch": "CW",
    "DynamoDB": "DDB",
    "CloudFormation": "CF",
    "SNS": "SNS",
    "SES": "SES",
    "SQS": "SQS"
  }

  var serviceLabels = $('#nav-shortcutBar .service-label');

  for (var i = 0; i < serviceLabels.length; i++) {
    var label = serviceLabels[i].textContent;

    if (label) {
      serviceLabels[i].textContent = map[label];
    }
  }

});
