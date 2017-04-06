/**
 * JavaScript file to be loaded into matched pages
 **/
$(document).ready(function() {

  var map = {
    "API Gateway": "APIG",
    "Application Discovery Service": "ADS",
    "Appstream 2.0": "As2",
    "Athena": "A",
    "AWS IoT": "IoT",
    "Batch": "B",
    "Certificate Manager": "CM",
    "CloudFormation": "CFm",
    "CloudFront": "CFr",
    "CloudSearch": "CS",
    "CloudTrail": "CT",
    "CloudWatch": "CW",
    "CodeBuild": "CB",
    "CodeCommit": "CC",
    "CodeDeploy": "CD",
    "CodePipeline": "CP",
    "Cognito": "C",
    "Compliance Reports": "CR",
    "Config": "Cfg",
    "Data Pipeline": "DP",
    "Device Farm": "DF",
    "Direct Connect": "DC",
    "Directory Service": "DS",
    "DMS": "DMS",
    "DynamoDB": "DDB",
    "EC2": "EC2",
    "EC2 Container Service": "EC2CS",
    "EFS": "EFS",
    "Elastic Beanstalk": "EB",
    "Elastic Transcoder": "ET",
    "Elasticache": "Ec",
    "Elasticsearch Service": "Es",
    "EMR": "EMR",
    "GameLift": "GL",
    "Glacier": "G",
    "IAM": "IAM",
    "Inspector": "I",
    "Kinesis": "K",
    "Lambda": "λ",
    "Lex": "L",
    "Lightsail": "Ls",
    "Machine Learning": "ML",
    "Managed Services": "MS",
    "Mobile Analytics": "MA",
    "Mobile Hub": "MH",
    "OpsWorks": "OW",
    "Pinpoint": "Pp",
    "Polly": "P",
    "QuickSight": "QS",
    "RDS": "RDS",
    "Redshift": "Rs",
    "Rekognition": "R",
    "Route 53": "R53",
    "S3": "S3",
    "Server Migration": "SM",
    "Service Catalog": "SC",
    "SES": "SES",
    "Snowball": "Sb",
    "Simple Notification Service": "SNS",
    "Simple Queue Service": "SQS",
    "Step Functions": "SF",
    "Storage Gateway": "SG",
    "SWF": "SWF",
    "Trusted Advisor": "TA",
    "VPC": "VPC",
    "WAF & Shield": "WAF&S",
    "WorkDocs": "WD",
    "WorkMail": "WM",
    "WorkSpaces": "WS"
  }

  var serviceLabels = $('#nav-shortcutBar .service-label');

  for (var i = 0; i < serviceLabels.length; i++) {
    var label = serviceLabels[i].textContent;

    if (label) {
      serviceLabels[i].textContent = map[label];
    }
  }

  // Force the pin button to adjust it's position.
  window.dispatchEvent(new Event('resize'));

});
