export const html = (options,token)=>{
    return  `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><!--[if IE]><html xmlns="http://www.w3.org/1999/xhtml" class="ie"><![endif]--><!--[if !IE]><!--><html style="margin: 0;padding: 0;" xmlns="http://www.w3.org/1999/xhtml"><!--<![endif]--><head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
<meta name="viewport" content="width=device-width"><style type="text/css">
@media only screen and (min-width: 620px){* [lang=x-wrapper] h1{}* [lang=x-wrapper] h1{font-size:26px !important;line-height:34px !important}* [lang=x-wrapper] h2{}* [lang=x-wrapper] h2{font-size:20px !important;line-height:28px !important}* [lang=x-wrapper] h3{}* [lang=x-layout__inner] p,* [lang=x-layout__inner] ol,* [lang=x-layout__inner] ul{}* div [lang=x-size-8]{font-size:8px !important;line-height:14px !important}* div [lang=x-size-9]{font-size:9px !important;line-height:16px !important}* div [lang=x-size-10]{font-size:10px !important;line-height:18px !important}* div [lang=x-size-11]{font-size:11px !important;line-height:19px !important}* div [lang=x-size-12]{font-size:12px !important;line-height:19px !important}* div [lang=x-size-13]{font-size:13px !important;line-height:21px !important}* div [lang=x-size-14]{font-size:14px !important;line-height:21px !important}* div 
[lang=x-size-15]{font-size:15px !important;line-height:23px !important}* div [lang=x-size-16]{font-size:16px !important;line-height:24px !important}* div [lang=x-size-17]{font-size:17px !important;line-height:26px !important}* div [lang=x-size-18]{font-size:18px !important;line-height:26px !important}* div [lang=x-size-18]{font-size:18px !important;line-height:26px !important}* div [lang=x-size-20]{font-size:20px !important;line-height:28px !important}* div [lang=x-size-22]{font-size:22px !important;line-height:31px !important}* div [lang=x-size-24]{font-size:24px !important;line-height:32px !important}* div [lang=x-size-26]{font-size:26px !important;line-height:34px !important}* div [lang=x-size-28]{font-size:28px !important;line-height:36px !important}* div [lang=x-size-30]{font-size:30px !important;line-height:38px !important}* div [lang=x-size-32]{font-size:32px 
!important;line-height:40px !important}* div [lang=x-size-34]{font-size:34px !important;line-height:43px !important}* div [lang=x-size-36]{font-size:36px !important;line-height:43px !important}* div [lang=x-size-40]{font-size:40px !important;line-height:47px !important}* div [lang=x-size-44]{font-size:44px !important;line-height:50px !important}* div [lang=x-size-48]{font-size:48px !important;line-height:54px !important}* div [lang=x-size-56]{font-size:56px !important;line-height:60px !important}* div [lang=x-size-64]{font-size:64px !important;line-height:63px !important}}
</style>
<style type="text/css">
body {
margin: 0;
padding: 0;
}
table {
border-collapse: collapse;
table-layout: fixed;
}
* {
line-height: inherit;
}
[x-apple-data-detectors],
[href^="tel"],
[href^="sms"] {
color: inherit !important;
text-decoration: none !important;
}
.wrapper .footer__share-button a:hover,
.wrapper .footer__share-button a:focus {
color: #ffffff !important;
}
.btn a:hover,
.btn a:focus,
.footer__share-button a:hover,
.footer__share-button a:focus,
.email-footer__links a:hover,
.email-footer__links a:focus {
opacity: 0.8;
}
.preheader,
.header,
.layout,
.column {
transition: width 0.25s ease-in-out, max-width 0.25s ease-in-out;
}
.layout,
.header {
max-width: 400px !important;
-fallback-width: 95% !important;
width: calc(100% - 20px) !important;
}
div.preheader {
max-width: 360px !important;
-fallback-width: 90% !important;
width: calc(100% - 60px) !important;
}
.snippet,
.webversion {
Float: none !important;
}
.column {
max-width: 400px !important;
width: 100% !important;
}
.fixed-width.has-border {
max-width: 402px !important;
}
.fixed-width.has-border .layout__inner {
box-sizing: border-box;
}
.snippet,
.webversion {
width: 50% !important;
}
.ie .btn {
width: 100%;
}
.ie .column,
[owa] .column,
.ie .gutter,
[owa] .gutter {
display: table-cell;
float: none !important;
vertical-align: top;
}
.ie div.preheader,
[owa] div.preheader,
.ie .email-footer,
[owa] .email-footer {
max-width: 560px !important;
width: 560px !important;
}
.ie .snippet,
[owa] .snippet,
.ie .webversion,
[owa] .webversion {
width: 280px !important;
}
.ie .header,
[owa] .header,
.ie .layout,
[owa] .layout,
.ie .one-col .column,
[owa] .one-col .column {
max-width: 600px !important;
width: 600px !important;
}
.ie .fixed-width.has-border,
[owa] .fixed-width.has-border,
.ie .has-gutter.has-border,
[owa] .has-gutter.has-border {
max-width: 602px !important;
width: 602px !important;
}
.ie .two-col .column,
[owa] .two-col .column {
width: 300px !important;
}
.ie .three-col .column,
[owa] .three-col .column,
.ie .narrow,
[owa] .narrow {
width: 200px !important;
}
.ie .wide,
[owa] .wide {
width: 400px !important;
}
.ie .two-col.has-gutter .column,
[owa] .two-col.x_has-gutter .column {
width: 290px !important;
}
.ie .three-col.has-gutter .column,
[owa] .three-col.x_has-gutter .column,
.ie .has-gutter .narrow,
[owa] .has-gutter .narrow {
width: 188px !important;
}
.ie .has-gutter .wide,
[owa] .has-gutter .wide {
width: 394px !important;
}
.ie .two-col.has-gutter.has-border .column,
[owa] .two-col.x_has-gutter.x_has-border .column {
width: 292px !important;
}
.ie .three-col.has-gutter.has-border .column,
[owa] .three-col.x_has-gutter.x_has-border .column,
.ie .has-gutter.has-border .narrow,
[owa] .has-gutter.x_has-border .narrow {
width: 190px !important;
}
.ie .has-gutter.has-border .wide,
[owa] .has-gutter.x_has-border .wide {
width: 396px !important;
}
.ie .fixed-width .layout__inner {
border-left: 0 none white !important;
border-right: 0 none white !important;
}
.ie .layout__edges {
display: none;
}
.mso .layout__edges {
font-size: 0;
}
.layout-fixed-width,
.mso .layout-full-width {
background-color: #ffffff;
}
@media only screen and (min-width: 620px) {
.column,
.gutter {
display: table-cell;
Float: none !important;
vertical-align: top;
}
div.preheader,
.email-footer {
max-width: 560px !important;
width: 560px !important;
}
.snippet,
.webversion {
width: 280px !important;
}
.header,
.layout,
.one-col .column {
max-width: 600px !important;
width: 600px !important;
}
.fixed-width.has-border,
.fixed-width.ecxhas-border,
.has-gutter.has-border,
.has-gutter.ecxhas-border {
max-width: 602px !important;
width: 602px !important;
}
.two-col .column {
width: 300px !important;
}
.three-col .column,
.column.narrow {
width: 200px !important;
}
.column.wide {
width: 400px !important;
}
.two-col.has-gutter .column,
.two-col.ecxhas-gutter .column {
width: 290px !important;
}
.three-col.has-gutter .column,
.three-col.ecxhas-gutter .column,
.has-gutter .narrow {
width: 188px !important;
}
.has-gutter .wide {
width: 394px !important;
}
.two-col.has-gutter.has-border .column,
.two-col.ecxhas-gutter.ecxhas-border .column {
width: 292px !important;
}
.three-col.has-gutter.has-border .column,
.three-col.ecxhas-gutter.ecxhas-border .column,
.has-gutter.has-border .narrow,
.has-gutter.ecxhas-border .narrow {
width: 190px !important;
}
.has-gutter.has-border .wide,
.has-gutter.ecxhas-border .wide {
width: 396px !important;
}
}
@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx) {
.fblike {
background-image: url(https://i3.createsend1.com/static/eb/customise/13-the-blueprint-3/images/fblike@2x.png) !important;
}
.tweet {
background-image: url(https://i4.createsend1.com/static/eb/customise/13-the-blueprint-3/images/tweet@2x.png) !important;
}
.linkedinshare {
background-image: url(https://i6.createsend1.com/static/eb/customise/13-the-blueprint-3/images/lishare@2x.png) !important;
}
.forwardtoafriend {
background-image: url(https://i5.createsend1.com/static/eb/customise/13-the-blueprint-3/images/forward@2x.png) !important;
}
}
@media (max-width: 321px) {
.fixed-width.has-border .layout__inner {
border-width: 1px 0 !important;
}
.layout,
.column {
min-width: 320px !important;
width: 320px !important;
}
.border {
display: none;
}
}
.mso div {
border: 0 none white !important;
}
.mso .w560 .divider {
Margin-left: 260px !important;
Margin-right: 260px !important;
}
.mso .w360 .divider {
Margin-left: 160px !important;
Margin-right: 160px !important;
}
.mso .w260 .divider {
Margin-left: 110px !important;
Margin-right: 110px !important;
}
.mso .w160 .divider {
Margin-left: 60px !important;
Margin-right: 60px !important;
}
.mso .w354 .divider {
Margin-left: 157px !important;
Margin-right: 157px !important;
}
.mso .w250 .divider {
Margin-left: 105px !important;
Margin-right: 105px !important;
}
.mso .w148 .divider {
Margin-left: 54px !important;
Margin-right: 54px !important;
}
.mso .font-avenir,
.mso .font-cabin,
.mso .font-open-sans,
.mso .font-ubuntu {
font-family: sans-serif !important;
}
.mso .font-bitter,
.mso .font-merriweather,
.mso .font-pt-serif {
font-family: Georgia, serif !important;
}
.mso .font-lato,
.mso .font-roboto {
font-family: Tahoma, sans-serif !important;
}
.mso .font-pt-sans {
font-family: "Trebuchet MS", sans-serif !important;
}
.mso .footer__share-button p {
margin: 0;
}
@media only screen and (min-width: 620px) {
.wrapper .size-8 {
font-size: 8px !important;
line-height: 14px !important;
}
.wrapper .size-9 {
font-size: 9px !important;
line-height: 16px !important;
}
.wrapper .size-10 {
font-size: 10px !important;
line-height: 18px !important;
}
.wrapper .size-11 {
font-size: 11px !important;
line-height: 19px !important;
}
.wrapper .size-12 {
font-size: 12px !important;
line-height: 19px !important;
}
.wrapper .size-13 {
font-size: 13px !important;
line-height: 21px !important;
}
.wrapper .size-14 {
font-size: 14px !important;
line-height: 21px !important;
}
.wrapper .size-15 {
font-size: 15px !important;
line-height: 23px !important;
}
.wrapper .size-16 {
font-size: 16px !important;
line-height: 24px !important;
}
.wrapper .size-17 {
font-size: 17px !important;
line-height: 26px !important;
}
.wrapper .size-18 {
font-size: 18px !important;
line-height: 26px !important;
}
.wrapper .size-20 {
font-size: 20px !important;
line-height: 28px !important;
}
.wrapper .size-22 {
font-size: 22px !important;
line-height: 31px !important;
}
.wrapper .size-24 {
font-size: 24px !important;
line-height: 32px !important;
}
.wrapper .size-26 {
font-size: 26px !important;
line-height: 34px !important;
}
.wrapper .size-28 {
font-size: 28px !important;
line-height: 36px !important;
}
.wrapper .size-30 {
font-size: 30px !important;
line-height: 38px !important;
}
.wrapper .size-32 {
font-size: 32px !important;
line-height: 40px !important;
}
.wrapper .size-34 {
font-size: 34px !important;
line-height: 43px !important;
}
.wrapper .size-36 {
font-size: 36px !important;
line-height: 43px !important;
}
.wrapper .size-40 {
font-size: 40px !important;
line-height: 47px !important;
}
.wrapper .size-44 {
font-size: 44px !important;
line-height: 50px !important;
}
.wrapper .size-48 {
font-size: 48px !important;
line-height: 54px !important;
}
.wrapper .size-56 {
font-size: 56px !important;
line-height: 60px !important;
}
.wrapper .size-64 {
font-size: 64px !important;
line-height: 63px !important;
}
}
.mso .size-8,
.ie .size-8 {
font-size: 8px !important;
line-height: 14px !important;
}
.mso .size-9,
.ie .size-9 {
font-size: 9px !important;
line-height: 16px !important;
}
.mso .size-10,
.ie .size-10 {
font-size: 10px !important;
line-height: 18px !important;
}
.mso .size-11,
.ie .size-11 {
font-size: 11px !important;
line-height: 19px !important;
}
.mso .size-12,
.ie .size-12 {
font-size: 12px !important;
line-height: 19px !important;
}
.mso .size-13,
.ie .size-13 {
font-size: 13px !important;
line-height: 21px !important;
}
.mso .size-14,
.ie .size-14 {
font-size: 14px !important;
line-height: 21px !important;
}
.mso .size-15,
.ie .size-15 {
font-size: 15px !important;
line-height: 23px !important;
}
.mso .size-16,
.ie .size-16 {
font-size: 16px !important;
line-height: 24px !important;
}
.mso .size-17,
.ie .size-17 {
font-size: 17px !important;
line-height: 26px !important;
}
.mso .size-18,
.ie .size-18 {
font-size: 18px !important;
line-height: 26px !important;
}
.mso .size-20,
.ie .size-20 {
font-size: 20px !important;
line-height: 28px !important;
}
.mso .size-22,
.ie .size-22 {
font-size: 22px !important;
line-height: 31px !important;
}
.mso .size-24,
.ie .size-24 {
font-size: 24px !important;
line-height: 32px !important;
}
.mso .size-26,
.ie .size-26 {
font-size: 26px !important;
line-height: 34px !important;
}
.mso .size-28,
.ie .size-28 {
font-size: 28px !important;
line-height: 36px !important;
}
.mso .size-30,
.ie .size-30 {
font-size: 30px !important;
line-height: 38px !important;
}
.mso .size-32,
.ie .size-32 {
font-size: 32px !important;
line-height: 40px !important;
}
.mso .size-34,
.ie .size-34 {
font-size: 34px !important;
line-height: 43px !important;
}
.mso .size-36,
.ie .size-36 {
font-size: 36px !important;
line-height: 43px !important;
}
.mso .size-40,
.ie .size-40 {
font-size: 40px !important;
line-height: 47px !important;
}
.mso .size-44,
.ie .size-44 {
font-size: 44px !important;
line-height: 50px !important;
}
.mso .size-48,
.ie .size-48 {
font-size: 48px !important;
line-height: 54px !important;
}
.mso .size-56,
.ie .size-56 {
font-size: 56px !important;
line-height: 60px !important;
}
.mso .size-64,
.ie .size-64 {
font-size: 64px !important;
line-height: 63px !important;
}
.footer__share-button p {
margin: 0;
}
</style>

<title></title>
<!--[if !mso]><!--><style type="text/css">
@import url(https://fonts.googleapis.com/css?family=Bitter:400,700,400italic|Cabin:400,700,400italic,700italic|Open+Sans:400italic,700italic,700,400);
</style><link href="https://fonts.googleapis.com/css?family=Bitter:400,700,400italic|Cabin:400,700,400italic,700italic|Open+Sans:400italic,700italic,700,400" rel="stylesheet" type="text/css"><!--<![endif]--><style type="text/css">
body{background-color:#f5f7fa}.mso h1{}.mso h1{font-family:sans-serif !important}.mso h2{}.mso h3{}.mso .column,.mso .column__background td{}.mso .column,.mso .column__background td{font-family:sans-serif !important}.mso .btn a{}.mso .btn a{font-family:sans-serif !important}.mso .webversion,.mso .snippet,.mso .layout-email-footer td,.mso .footer__share-button p{}.mso .webversion,.mso .snippet,.mso .layout-email-footer td,.mso .footer__share-button p{font-family:sans-serif !important}.mso .logo{}.mso .logo{font-family:Tahoma,sans-serif !important}.logo a:hover,.logo a:focus{color:#859bb1 !important}.mso .layout-has-border{border-top:1px solid #b1c1d8;border-bottom:1px solid #b1c1d8}.mso .layout-has-bottom-border{border-bottom:1px solid #b1c1d8}.mso .border,.ie .border{background-color:#b1c1d8}@media only screen and (min-width: 620px){.wrapper h1{}.wrapper h1{font-size:26px 
!important;line-height:34px !important}.wrapper h2{}.wrapper h2{font-size:20px !important;line-height:28px !important}.wrapper h3{}.column p,.column ol,.column ul{}}.mso h1,.ie h1{}.mso h1,.ie h1{font-size:26px !important;line-height:34px !important}.mso h2,.ie h2{}.mso h2,.ie h2{font-size:20px !important;line-height:28px !important}.mso h3,.ie h3{}.mso .layout__inner p,.ie .layout__inner p,.mso .layout__inner ol,.ie .layout__inner ol,.mso .layout__inner ul,.ie .layout__inner ul{}
</style><meta name="robots" content="noindex,nofollow"></meta>
<meta property="og:title" content="Just One More Step"></meta>
<link href="https://css.createsend1.com/css/social.min.css?h=0ED47CE120160920" media="screen,projection" rel="stylesheet" type="text/css" />
</head>
<!--[if mso]>
<body class="mso">
<![endif]-->
<!--[if !mso]><!-->
<body class="full-padding" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;">
<!--<![endif]-->
<div class="wrapper" style="min-width: 320px;background-color: #f5f7fa;" lang="x-wrapper">
  <div class="preheader" style="Margin: 0 auto;max-width: 560px;min-width: 280px; width: 280px;width: calc(28000% - 173040px);">
    <div style="border-collapse: collapse;display: table;width: 100%;">
    <!--[if (mso)|(IE)]><table align="center" class="preheader" cellpadding="0" cellspacing="0"><tr><td style="width: 280px" valign="top"><![endif]-->
      <div class="snippet" style='display: table-cell;Float: left;font-size: 12px;line-height: 19px;max-width: 280px;min-width: 140px; width: 140px;width: calc(14000% - 78120px);padding: 10px 0 5px 0;color: #b9b9b9;font-family: "Open Sans",sans-serif;'>
        
      </div>
    <!--[if (mso)|(IE)]></td><td style="width: 280px" valign="top"><![endif]-->
      <div class="webversion" style='display: table-cell;Float: left;font-size: 12px;line-height: 19px;max-width: 280px;min-width: 139px; width: 139px;width: calc(14100% - 78680px);padding: 10px 0 5px 0;text-align: right;color: #b9b9b9;font-family: "Open Sans",sans-serif;'>
        
      </div>
    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
    </div>
  </div>
  
  <div class="layout one-col fixed-width" style="Margin: 0 auto;max-width: 600px;min-width: 320px; width: 320px;width: calc(28000% - 173000px);overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;">
    <div class="layout__inner" style="border-collapse: collapse;display: table;width: 100%;background-color: #307fb0;" lang="x-layout__inner">
    <!--[if (mso)|(IE)]><table align="center" cellpadding="0" cellspacing="0"><tr class="layout-fixed-width" style="background-color: #307fb0;"><td style="width: 600px" class="w560"><![endif]-->
      <div class="column" style='text-align: left;color: #60666d;font-size: 14px;line-height: 21px;font-family: "Open Sans",sans-serif;max-width: 600px;min-width: 320px; width: 320px;width: calc(28000% - 167400px);'>
    
        <div style="Margin-left: 20px;Margin-right: 20px;Margin-top: 24px;Margin-bottom: 24px;">
  <h1 class="size-48" style="Margin-top: 0;Margin-bottom: 0;font-style: normal;font-weight: normal;color: #44a8c7;font-size: 36px;line-height: 43px;font-family: bitter,georgia,serif;text-align: center;" lang="x-size-48"><span class="font-bitter"><font color="#ffffff"><strong>Instagram</strong></font></span></h1>
</div>
    
      </div>
    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
    </div>
  </div>

  <div class="layout one-col fixed-width" style="Margin: 0 auto;max-width: 600px;min-width: 320px; width: 320px;width: calc(28000% - 173000px);overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;">
    <div class="layout__inner" style="border-collapse: collapse;display: table;width: 100%;background-color: #ffffff;" lang="x-layout__inner" emb-background-style>
    <!--[if (mso)|(IE)]><table align="center" cellpadding="0" cellspacing="0"><tr class="layout-fixed-width" emb-background-style><td style="width: 600px" class="w560"><![endif]-->
      <div class="column" style='text-align: left;color: #60666d;font-size: 14px;line-height: 21px;font-family: "Open Sans",sans-serif;max-width: 600px;min-width: 320px; width: 320px;width: calc(28000% - 167400px);'>
    
        <div style="Margin-left: 20px;Margin-right: 20px;Margin-top: 24px;">
  <div style="line-height:10px;font-size:1px">&nbsp;</div>
</div>
    
        <div style="Margin-left: 20px;Margin-right: 20px;">
  <h2 class="size-24" style="Margin-top: 0;Margin-bottom: 0;font-style: normal;font-weight: normal;color: #44a8c7;font-size: 20px;line-height: 28px;text-align: center;" lang="x-size-24"><strong>Rest Your Password</strong></h2><p style="Margin-top: 16px;Margin-bottom: 0;"><strong>Hello ${options.name},</strong></p><p style="Margin-top: 20px;Margin-bottom: 20px;"><strong>Thank you for signing up to Instagram App.</strong></p><p style="Margin-top: 20px;Margin-bottom: 20px;"><strong>Please click on the following button to rest your password.</strong> <br><br> <strong> your code is :<span style="color:#1D7874;font-weight: bold;Margin-left: 10px">${options.code}</span><strong></p><p style="Margin-top: 20px;Margin-bottom: 20px;"><strong>Sincerely,<br>Team Instagram</strong></p>
</div>
    
        <div style="Margin-left: 20px;Margin-right: 20px;">
  <div class="btn btn--flat btn--large" style="Margin-bottom: 20px;text-align: center;">
    <![if !mso]><a style="border-radius: 4px;display: inline-block;font-size: 14px;font-weight: bold;line-height: 24px;padding: 12px 24px;text-align: center;text-decoration: none !important;transition: opacity 0.1s ease-in;color: #fff;background-color: #5c91ad;font-family: 'Open Sans', sans-serif;" href="https://instagramapi-uuqr.onrender.com/user/resetPassword/${token}">Rest Your Password</a><![endif]>
  <!--[if mso]><p style="line-height:0;margin:0;">&nbsp;</p><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" href="http://photobookworldwide.createsend1.com/t/d-l-dlldol-l-r/" style="width:118px" arcsize="9%" fillcolor="#5C91AD" stroke="f"><v:textbox style="mso-fit-shape-to-text:t" inset="0px,11px,0px,11px"><center style="font-size:14px;line-height:24px;color:#FFFFFF;font-family:sans-serif;font-weight:bold;mso-line-height-rule:exactly;mso-text-raise:4px">Click here</center></v:textbox></v:roundrect><![endif]--></div>
</div>
    
    <div style="font-size: 12px;font-style: normal;font-weight: normal;" align="center">
      <img class="gnd-corner-image gnd-corner-image-center gnd-corner-image-bottom" style="border: 0;display: block;height: auto;width: 90%;max-width: 720px;" alt="" width="600" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWvxamh1mKeImka_TMG43UNjloBaoIw1wILA&usqp=CAU">
    </div>
  
      </div>
    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
    </div>
  </div>

  <div class="layout email-footer" style="Margin: 0 auto;max-width: 600px;min-width: 320px; width: 320px;width: calc(28000% - 173000px);overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;">
    <div class="layout__inner" style="border-collapse: collapse;display: table;width: 100%;" lang="x-layout__inner">
    <!--[if (mso)|(IE)]><table align="center" cellpadding="0" cellspacing="0"><tr class="layout-email-footer"><td style="width: 400px;" valign="top" class="w360"><![endif]-->
      
    <!--[if (mso)|(IE)]></td><td style="width: 200px;" valign="top" class="w160"><![endif]-->
      <!-- <div class="column narrow" style='text-align: left;font-size: 12px;line-height: 19px;color: #b9b9b9;font-family: "Open Sans",sans-serif;Float: left;max-width: 320px;min-width: 200px; width: 320px;width: calc(72200px - 12000%);'>
        <div style="Margin-left: 20px;Margin-right: 20px;Margin-top: 10px;Margin-bottom: 10px;">
          <div class="footer__share-button">
            <!--[if mso]><p style="line-height:0;">&nbsp;</p><![endif]
            
<p style="Margin-top: 0;Margin-bottom: 5px;line-height: 26px;mso-line-height-rule: exactly;"><![if !mso]><a class="fblike" style="background-image: url(https://i8.createsend1.com/static/eb/customise/13-the-blueprint-3/images/fblike.png);text-decoration: none;transition: opacity 0.1s ease-in;color: #ffffff;background-repeat: no-repeat;background-size: 200px 56px;border-radius: 2px;display: inline-block;font-size: 11px;font-weight: bold;line-height: 11px;padding: 8px 11px 7px 28px;text-align: left;background-color: #7b7c7d;" href="http://photobookworldwide.createsend1.com/t/d-fb-dlldol-l-b/" left-align-text="true" rel="cs_facebox">Like</a><![endif]><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" href="http://photobookworldwide.createsend1.com/t/d-fb-dlldol-l-b/" style="width:62px" arcsize="8%" 
fill="t" stroke="f"><v:fill type="tile" src="https://i8.createsend1.com/static/eb/customise/13-the-blueprint-3/images/fblike.png" color="#7B7C7D"></v:fill><v:textbox style="mso-fit-shape-to-text:t" inset="27px,7px,0,6px"><p style="font-size:11px;line-height:11px;color:#FFFFFF;font-weight:bold;mso-line-height-rule:exactly;mso-text-raise:-1px">Like</p></v:textbox></v:roundrect><![endif]</p>
            
<p style="Margin-top: 0;Margin-bottom: 5px;line-height: 26px;mso-line-height-rule: exactly;"><![if !mso]><a class="tweet" style="background-image: url(https://i7.createsend1.com/static/eb/customise/13-the-blueprint-3/images/tweet.png);text-decoration: none;transition: opacity 0.1s ease-in;color: #ffffff;background-repeat: no-repeat;background-size: 200px 56px;border-radius: 2px;display: inline-block;font-size: 11px;font-weight: bold;line-height: 11px;padding: 8px 11px 7px 28px;text-align: left;background-color: #7b7c7d;" href="http://photobookworldwide.createsend1.com/t/d-tw-dlldol-l-n/" left-align-text="true">Tweet</a><![endif]><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" href="http://photobookworldwide.createsend1.com/t/d-tw-dlldol-l-n/" style="width:73px" arcsize="8%" fill="t" 
stroke="f"><v:fill type="tile" src="https://i7.createsend1.com/static/eb/customise/13-the-blueprint-3/images/tweet.png" color="#7B7C7D"></v:fill><v:textbox style="mso-fit-shape-to-text:t" inset="27px,7px,0,6px"><p style="font-size:11px;line-height:11px;color:#FFFFFF;font-weight:bold;mso-line-height-rule:exactly;mso-text-raise:-1px">Tweet</p></v:textbox></v:roundrect><![endif]</p>
            
<p style="Margin-top: 0;Margin-bottom: 5px;line-height: 26px;mso-line-height-rule: exactly;"><![if !mso]><a class="linkedinshare" style="background-image: url(https://i10.createsend1.com/static/eb/customise/13-the-blueprint-3/images/lishare.png);text-decoration: none;transition: opacity 0.1s ease-in;color: #ffffff;background-repeat: no-repeat;background-size: 200px 56px;border-radius: 2px;display: inline-block;font-size: 11px;font-weight: bold;line-height: 11px;padding: 8px 11px 7px 28px;text-align: left;background-color: #7b7c7d;" href="http://photobookworldwide.createsend1.com/t/d-li-dlldol-l-p/" left-align-text="true">Share</a><![endif]><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" href="http://photobookworldwide.createsend1.com/t/d-li-dlldol-l-p/" style="width:70px" arcsize="8%" fill="t" 
stroke="f"><v:fill type="tile" src="https://i10.createsend1.com/static/eb/customise/13-the-blueprint-3/images/lishare.png" color="#7B7C7D"></v:fill><v:textbox style="mso-fit-shape-to-text:t" inset="27px,7px,0,6px"><p style="font-size:11px;line-height:11px;color:#FFFFFF;font-weight:bold;mso-line-height-rule:exactly;mso-text-raise:-1px">Share</p></v:textbox></v:roundrect><![endif]</p>
            
<p style="Margin-top: 0;Margin-bottom: 5px;line-height: 26px;mso-line-height-rule: exactly;"><![if !mso]><a class="forwardtoafriend" style="background-image: url(https://i9.createsend1.com/static/eb/customise/13-the-blueprint-3/images/forward.png);text-decoration: none;transition: opacity 0.1s ease-in;color: #ffffff;background-repeat: no-repeat;background-size: 200px 56px;border-radius: 2px;display: inline-block;font-size: 11px;font-weight: bold;line-height: 11px;padding: 8px 11px 7px 28px;text-align: left;background-color: #7b7c7d;" href="http://photobookworldwide.forwardtomyfriend.com/d-l-2AD73FFF-dlldol-l-x" left-align-text="true">Forward</a><![endif]><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" href="http://photobookworldwide.forwardtomyfriend.com/d-l-2AD73FFF-dlldol-l-x" style="width:85px" arcsize="8%" fill="t" stroke="f"><v:fill type="tile" 
src="https://i9.createsend1.com/static/eb/customise/13-the-blueprint-3/images/forward.png" color="#7B7C7D"></v:fill><v:textbox style="mso-fit-shape-to-text:t" inset="27px,7px,0,6px"><p style="font-size:11px;line-height:11px;color:#FFFFFF;font-weight:bold;mso-line-height-rule:exactly;mso-text-raise:-1px">Forward</p></v:textbox></v:roundrect><![endif]</p>
          </div>
        </div>
      </div> -->
    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
    </div>
  </div>
  <div class="layout one-col email-footer" style="Margin: 0 auto;max-width: 600px;min-width: 320px; width: 320px;width: calc(28000% - 173000px);overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;">
    <div class="layout__inner" style="border-collapse: collapse;display: table;width: 100%;" lang="x-layout__inner">
    <!--[if (mso)|(IE)]><table align="center" cellpadding="0" cellspacing="0"><tr class="layout-email-footer"><td style="width: 600px;" class="w560"><![endif]-->
      <!-- <div class="column" style='text-align: left;font-size: 12px;line-height: 19px;color: #b9b9b9;font-family: "Open Sans",sans-serif;max-width: 600px;min-width: 320px; width: 320px;width: calc(28000% - 167400px);'>
        <div style="Margin-left: 20px;Margin-right: 20px;Margin-top: 10px;Margin-bottom: 10px;">
          <div>
            <a style="text-decoration: underline;transition: opacity 0.1s ease-in;color: #b9b9b9;" href="http://photobookworldwide.createsend1.com/t/d-u-dlldol-l-m/">Unsubscribe</a>
          </div>
        </div>
      </div> -->
    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
    </div>
  </div>
  <div style="line-height:40px;font-size:40px;">&nbsp;</div>

</div><img style="overflow: hidden;position: fixed;visibility: hidden !important;display: block !important;height: 1px !important;width: 1px !important;border: 0 !important;margin: 0 !important;padding: 0 !important;" src="https://apkrabi.com/uploads/2022/5/instagram-thumbnail.jpg" width="1" height="1" border="0" alt="">
<!-- <script type="text/javascript" src="https://js.createsend1.com/js/jquery-1.7.2.min.js?h=C99A465920160920"></script> -->
<div id="fb-root"></div>
<script src="https://connect.facebook.net/en_US/all.js#xfbml=1"></script>

<!-- <script type="text/javascript" src="https://js.createsend1.com/js/track.min.js?h=390A8CD320160920"></script> -->
<script type="text/javascript">
$(document).ready(function () {
CS.WebVersion.setup({"LikeActionBase":"/t/d-fb-dlldol-l-","IsSubscriber":false});
});
</script>
<script type="text/javascript">$(function(){$('area,a').attr('target', '_blank');});</script></body></html>
`
}