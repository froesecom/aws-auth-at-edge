# AWS Authorization@Edge example templates

This repo provides updated templates found in this blog article, [Authorization@Edge – How to Use Lambda@Edge and JSON Web Tokens to Enhance Web Application Security](https://aws.amazon.com/blogs/networking-and-content-delivery/authorizationedge-how-to-use-lambdaedge-and-json-web-tokens-to-enhance-web-application-security/). The templates found in that article are too old and do not provide working runtimes.

## What I changed

The only difference between these templates and the ones from the article is that the runtimes have been updated to match supported runtimes.

## To use

Follow the instructions in the article above, with the following exceptions:
  - upload the templates from `./templates/*.template` into a public S3 bucket on your AWS account (making sure the templates themselves are publicly available).
  - when launching the CloudFormation stack, do not use the template from the article above, instead use `./templates/edge-auth.template`, using the URL from your S3 bucket above.
      ![launch template](https://github.com/froesecom/aws-auth-at-edge/blob/main/src/images/launch-template.png)
  - before launching the stack, change the parameters to match your bucket and bucket prefix:
      ![parameters](https://github.com/froesecom/aws-auth-at-edge/blob/main/src/images/parameters.png)

## To benchmark how fast your authorisation lambda is

`yarn install`

Add the `ENDPOINT` and `JWT_TOKEN` environment variables to your environment, `ENDPOINT` being the location of your cloudfront distribution (something like https://1234.cloudfront.net), and `JWT_TOKEN` being an active token (which you can get from the browser using dev tools).

`yarn benchmark`
