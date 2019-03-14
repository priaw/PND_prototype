import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 13.967859,
      lng: 100.44544599999995
    },
    zoom: 11
  };
 
  render() {
    return (
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>
    <title>Welcome to GPS Tracking System</title>
    <meta name="google" value="notranslate" />         
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="Shortcut Icon" href="images/ico_Caption.ico"  />
    <style type="text/css" media="screen"> 
        object:focus { outline:none; }
        #flashContent { display:none; }
        html, body { 
			height			:	100%; 
			width			:	100%;
			margin			:	0; 
			padding			:	0; 
			overflow		:	hidden; 
			padding			:	0; 
			overflow		:	hidden; 
			color			:	#111111;
			font			:	12px Verdana;
		}
		body {
		    background-color: 	#ffffff;
		}  
		#flashContent { 
			display			:	none; 
		}
		
		table {
			border			:	0px;
		}
		a:visited {
			color			:	#111111;
		}
		a:link{
			color			:	#111111;
		}
		a:hover{
			color			:	#0808FF;
			text-decoration	:	underline;
		}
    </style>
    
    <link rel="stylesheet" type="text/css" href="history/history.css" />
    <script type="text/javascript" src="history/history.js"></script>
    <script type="text/javascript" src="swfobject.js"></script>
    
	<script charset="utf-8" src="http://map.qq.com/api/js?v=2.exp&libraries=geometry"></script>
        
    <script type="text/javascript">
        // For version detection, set to min. required Flash Player version, or 0 (or 0.0.0), for no version detection. 
        var swfVersionStr = "10.2.0";
        // To use express install, set to playerProductInstall.swf, otherwise the empty string. 
        var xiSwfUrlStr = "playerProductInstall.swf";
        var flashvars = {};
        var params = {};
   		params.wmode			= "transparent";
        params.quality 			= "high";
        params.bgcolor 			= "#ffffff";
        params.allowscriptaccess= "sameDomain";
        params.allowfullscreen 	= "true";
        
        var attributes 			= {};
        attributes.id 			= "index";
        attributes.name 		= "index";
        attributes.align 		= "middle";
        swfobject.embedSWF(
            "index.swf", "flashContent", 
            "100%", "100%", 
            swfVersionStr, xiSwfUrlStr, 
            flashvars, params, attributes);
        swfobject.createCSS("#flashContent", "display:block;text-align:left;");
        
        //----- clear background
		function removeBackground()
		{
			var obj = document.getElementById( "indexBackground" );
			if( obj )
			{
				obj.parentNode.removeChild( obj );
			}
			
			obj = document.getElementById( "indexTop" );
			if( obj )
			{
				obj.parentNode.removeChild( obj );
			}
			
			obj = document.getElementById( "indexBottom" );
			if( obj )
			{
				obj.parentNode.removeChild( obj );
			}
		}
		
		function loadSwfComplete()
		{
			var obj = document.getElementById( "indexLoad" );
			if( obj )
			{
				obj.parentNode.removeChild( obj );
			}
			
			obj = document.getElementById( attributes.id );
			if( obj )
			{
				obj.focus();
			}
			
			LoadGoogleApi();
			LoadCurrentLonLat();
			LoadCocalJsFile();
		}
		
		function LoadGoogleApi()
		{
			var script	= document.createElement("script");
			script.type	= "text/javascript";
			script.src	= "http://maps.google.com/maps/api/js?key=AIzaSyDLxJV_kxVpXHxhO-Z5gKhHL47KgAyir-U&sensor=true&language=en";
			document.body.appendChild(script);
		}
		
		function LoadCocalJsFile()
		{
			var script	= document.createElement("script");
			script.type	= "text/javascript";
			script.src	= "GoogleMapLib.js";
			document.body.appendChild(script);
		}
		
		function LoadCurrentLonLat()
		{
			var script	= document.createElement("script");
			script.type	= "text/javascript";
			script.src	= "http://j.maxmind.com/app/geoip.js";
			document.body.appendChild(script);
	
			var oSwf = document.getElementById( attributes.id  );
			if( oSwf == null )
			{
				return;
			}
			
			function LoadResult()
			{
				var isChina = 0;
				if( String( geoip_country_code() ).toLowerCase() == "cn" || String( geoip_country_name() ).toLowerCase() == "china" )
				{
					isChina = 1;
				}
				oSwf.SetMapCenter( Number(geoip_longitude()), Number(geoip_latitude()), isChina );
			}
			
			// is IE
			if( document.all && window.external ){
				script.onreadystatechange = function(){
					if ( script.readyState == 'loaded' || script.readyState == 'complete' ){
						LoadResult();
					}
				}  
			}
			// no IE
			else{
				script.onload = function(){
						LoadResult();
				}
			}
		}	
		
		//----- Flex load progress
		function SetFlexLoadRate()
		{
			var obj = document.getElementById( "FlexLoadRate" );
			if( obj == null )
			{
				return;
			}		
			var oSwf = document.getElementById( attributes.id  );
			if( oSwf == null )
			{
				return;
			}
	
			var nData		= oSwf.PercentLoaded();
			obj.innerHTML	= nData + "&nbsp;%"
			
			var oRate = document.getElementById( "RateLine" );
			if( oRate != null )
			{
				var strW 	= obj.style.width;
				strW		= strW.substr( 0, strW.length - 2 );
				oRate.style.width = Number( strW ) * Number( nData ) * 0.01 + "px";
			}
			
			if( SetFlexLoadRate >= 100 )
			{
				return;
			}
			else
			{
				setTimeout( SetFlexLoadRate, 200 );
			}
		}
		setTimeout( SetFlexLoadRate, 1000 );
    </script>
</head>
<body onload="document.getElementById('index').focus()">
	<div id="indexBackground" style="position:absolute;z-index:-2;width:100%;height:100%;vertical-align:middle;overflow:hidden;background:url('images/icon_Mainbackground.jpg') repeat-x center center;">
		<table width="100%" height="100%" >
			<tr>
				<td align="center" valign="middle" style="overflow:hidden;">
					<img src="images/icon_bg_centerbg.png" />
				</td>
			</tr>
		</table>
		<div style="position:absolute;z-index:-1;right:15px;bottom:40px;">
			<img style="width:120px;" src="images/icon_SeTracker.png" />
		</div>
                <div style="position:absolute;z-index:-1;right:210px;bottom:40px;">
			<img style="width:120px;" src="images/icon_Itracksafe.png" />
		</div>
	</div>
	
	<div id="indexTop" style="position:absolute;z-index:9;width:100%;height:100;top:0px;">
		<div style="text-align:left;padding-left:10px;padding-top:10px;">
			<img src="images\icon_top_title.png" />
		</div>
		<div id="indexLoad" style="position:absolute;top:80px;width:200px;height:14px;text-align:center;margin-left:50%;margin-right:50%;">
			
			<div style="border:1px solid #969696;position:absolute;text-align:left;width:200px;height:14px;left:-100px;background-color:#bbbbbb;">
				<div id="RateLine" style="background-color:#FF8C00;border:solid 1px #ffffff;width:0px;height:12px;"></div>
			</div>
			<div id="FlexLoadRate" style="position:absolute;left:-100px;width:198px;text-align:center;vertical-align:middle;color:#333333;">
				0&nbsp;%
			</div>
		</div>
	</div>
		
	<div id="indexBottom" style="position:absolute;z-index:10;width:100%;height:30px;bottom:0px;background:url('images/icon_bottom_background.png') repeat-x;">
		<table border="0" style="width:100%;height:30px;line-height:30px;text-align:center;vertical-align:middle;">
			<tr>
				<td align="middle">
					&nbsp;&nbsp; Copyright © All Rights Reserved.Support with Browser IE7+,Firefox,Maxthon,Chrome
				</td>
			</tr>
		</table>
	</div>
	
	<div style="position:absolute;z-index:15;width:100%;height:100%;">
		<table Cellpadding=0 CellSpacing=0 style="width:100%;height:100%;">
			<tr>
				<td id="MainSwf" style="height:100%;border:1px solid #eeeeee;">
			        <div id="flashContent">
			            <p>
			                To view this page ensure that Adobe Flash Player version 
			                10.2.0 or greater is installed. 
			            </p>
			            <script type="text/javascript"> 
			                var pageHost = ((document.location.protocol == "https:") ? "https://" : "http://"); 
			                document.write("<a href='http://www.adobe.com/go/getflashplayer'><img src='" 
			                                + pageHost + "www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player' /></a>" ); 
			            </script> 
			        </div>
			        
				   	<div>
				        <noscript>
				            <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%" id="index">
				                <param name="movie" value="index.swf" />
				                <param name="quality" value="high" />
				                <param name="bgcolor" value="#ffffff" />
				                <param name="allowScriptAccess" value="sameDomain" />
				                <param name="allowFullScreen" value="true" />
				                <!--[if !IE]>-->
				                <object type="application/x-shockwave-flash" data="index.swf" width="100%" height="100%">
				                    <param name="quality" value="high" />
				                    <param name="bgcolor" value="#ffffff" />
				                    <param name="allowScriptAccess" value="sameDomain" />
				                    <param name="allowFullScreen" value="true" />
				                <!--<![endif]-->
				                <!--[if gte IE 6]>-->
				                    <p> 
				                        Either scripts and active content are not permitted to run or Adobe Flash Player version
				                        10.2.0 or greater is not installed.
				                    </p>
				                <!--<![endif]-->
				                    <a href="http://www.adobe.com/go/getflashplayer">
				                        <img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="Get Adobe Flash Player" />
				                    </a>
				                <!--[if !IE]>-->
				                </object>
				                <!--<![endif]-->
				            </object>
				        </noscript> 
					</div>
				</td><td id="StreetView" style="height:100%;width:0px;overflow:hidden;">
					
				</td>
			</tr>
		</table>
	</div>	    
</body>
</html>

    );
  }
}
 
export default SimpleMap;