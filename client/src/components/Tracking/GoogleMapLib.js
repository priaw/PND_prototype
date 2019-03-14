 
/***************************************\
Function:	Google map street view

\***************************************/
var oStreetView = {
	m_nWidth		:	400,
	m_nHeight		:	300,
	m_nInitLon		:	-122.084101,
	m_nInitLat		:	37.421137,
	m_nInitZoom		:	15,
	m_oMainElement	:	null,
	m_oTableElement	:	null,
	m_oMapDiv		:	null,
	m_oStreetDiv	:	null,
	m_oLeftGapDiv	:	null,
	m_oMiddleGapDiv	:	null,
	
	m_oElement		:	null,
	m_oCoverElement	:	null,
	m_oStreetView	:	null,
	m_oMap			:	null,
	m_oService		:	null,
	m_isLoad		:	false,
	m_isShow		:	false
};
	
//---------------------------------
//
oStreetView.Init = function()
{
	if( typeof( google ) == 'undefined' )
	{
		alert( "Google javascript file load failed." );
		oStreetView.m_isLoad = false;
        return;
	}

	//----- add table div
	oStreetView.m_oMainElement				= document.getElementById( "StreetView" );
	oStreetView.m_oMainElement.style.width	= oStreetView.m_nWidth + "px";
	
	if( oStreetView.m_oMainElement == null )
	{
		alert( "Street view div error !" );
		return;
	}
	
	//-----
	oStreetView.m_oTableElement				= document.createElement('div');
	oStreetView.m_oTableElement.style.width	= "100%";
	oStreetView.m_oTableElement.style.height= "100%";
	oStreetView.m_oMainElement.appendChild( oStreetView.m_oTableElement );
	
	//----- map Div
	oStreetView.m_oMapDiv					= document.createElement('div');
	oStreetView.m_oMapDiv.style.width		= "100%";
	oStreetView.m_oMapDiv.style.height		= "50%";
	oStreetView.m_oTableElement.appendChild( oStreetView.m_oMapDiv );
	
	//----- middle gap
	oStreetView.m_oMiddleGapDiv					= document.createElement('div');
	oStreetView.m_oMiddleGapDiv.style.position	= "absolute";
	oStreetView.m_oMiddleGapDiv.style.width		= oStreetView.m_nWidth - 5 + "px";
	oStreetView.m_oMiddleGapDiv.style.right		= "0px";
	oStreetView.m_oMiddleGapDiv.style.height	= "4px";
	oStreetView.m_oMiddleGapDiv.style.top		= "50%";
	oStreetView.m_oMiddleGapDiv.style.bottom	= "50%";
	oStreetView.m_oMiddleGapDiv.style.zIndex	= 10000;
	oStreetView.m_oMiddleGapDiv.style.backgroundColor	= "#ddddff";
	oStreetView.m_oMiddleGapDiv.style.borderTop			= "1px solid #ffffff";
	oStreetView.m_oMiddleGapDiv.style.borderBottom		= "1px solid #666666";
	oStreetView.m_oMainElement.appendChild( oStreetView.m_oMiddleGapDiv );
	
	//----- left gap
	oStreetView.m_oLeftGapDiv					= document.createElement('div');
	oStreetView.m_oLeftGapDiv.style.position	= "absolute";
	oStreetView.m_oLeftGapDiv.style.width		= "4px";
	oStreetView.m_oLeftGapDiv.style.height		= "100%";
	oStreetView.m_oLeftGapDiv.style.top			= "0px";
	oStreetView.m_oLeftGapDiv.style.bottom		= "0px";
	oStreetView.m_oLeftGapDiv.style.zIndex			= 9999;
	oStreetView.m_oLeftGapDiv.style.backgroundColor	= "#ddddff";
	oStreetView.m_oLeftGapDiv.style.borderLeft		= "1px solid #ffffff";
	oStreetView.m_oLeftGapDiv.style.borderRight		= "1px solid #666666";
	oStreetView.m_oMainElement.appendChild( oStreetView.m_oLeftGapDiv );

	//----- street view div
	oStreetView.m_oStreetDiv				= document.createElement('div');
	oStreetView.m_oStreetDiv.style.width	= "100%";
	oStreetView.m_oStreetDiv.style.height	= "50%";
	oStreetView.m_oTableElement.appendChild( oStreetView.m_oStreetDiv );

	//----- map
	oStreetView.m_oMap = new google.maps.Map( oStreetView.m_oMapDiv, {
		zoom						: 	oStreetView.m_nInitZoom,
		center						: 	new google.maps.LatLng( oStreetView.m_nInitLat, oStreetView.m_nInitLon ),
		mapTypeId					: 	google.maps.MapTypeId.ROADMAP,
		mapTypeControl				:	true
    });

	//----- street map
	oStreetView.m_oStreetView	= new google.maps.StreetViewPanorama ( oStreetView.m_oStreetDiv );
	oStreetView.m_oService		= new google.maps.StreetViewService();
	oStreetView.m_isLoad		= true;

	oStreetView.m_oMap.setStreetView( oStreetView.m_oStreetView );
}

//---------------------------------
//
oStreetView.Show = function()
{
	if( oStreetView.m_oMapDiv == null  || oStreetView.m_oStreetDiv == null || oStreetView.m_oStreetView == null )
	{
		oStreetView.Init();
	}
	
	if( oStreetView.m_isLoad == false )
	{
		return;
	}
	
	oStreetView.m_isShow 						= true;
	oStreetView.m_oMainElement.style.width		= oStreetView.m_nWidth + "px";
	oStreetView.m_oTableElement.style.visibility= "visible";
	oStreetView.m_oMiddleGapDiv.style.visibility= "visible";
	oStreetView.m_oLeftGapDiv.style.visibility	= "visible";
	oStreetView.m_oStreetView.setVisible( true );
	
	oStreetView.m_oTableElement.style.height	= document.body.clientHeight + "px";
	setTimeout( function()
	{
		oStreetView.m_oTableElement.style.height	= "100%";
		oStreetView.AddPos( oStreetView.m_nInitLon, oStreetView.m_nInitLat, oStreetView.m_nInitZoom );
		oStreetView.CoverView( true );
		
	}, 200 );
}

//---------------------------------
//
oStreetView.Close = function()
{
	if( oStreetView.m_isLoad == false || oStreetView.m_oMainElement == null || oStreetView.m_oTableElement == null )
	{
		return;
	}
	
	oStreetView.m_isShow 						= false;
	oStreetView.m_oMainElement.style.width		= "0px";
	oStreetView.m_oTableElement.style.visibility= "hidden";
	oStreetView.m_oMiddleGapDiv.style.visibility= "hidden";
	oStreetView.m_oLeftGapDiv.style.visibility	= "hidden";
	oStreetView.m_oStreetView.setVisible( false );
}

//---------------------------------
//
oStreetView.AddPos = function( nLon, nLat, nDir )
{
	if( oStreetView.m_isLoad == false || oStreetView.m_isShow == false )
	{
		return;
	}
	var oLonLat = new google.maps.LatLng( nLat, nLon ); 
	oStreetView.m_oService.getPanoramaByLocation( oLonLat, 100, function( data, status )
	{
		if( status != google.maps.StreetViewStatus.OK )
		{
			oStreetView.CoverView( true );
			return;
		}
		oStreetView.m_nInitLon	= oLonLat.lng();
		oStreetView.m_nInitLat	= oLonLat.lat();
		
		oStreetView.CoverView( false );
		oStreetView.m_oStreetView.setPosition( oLonLat );
		oStreetView.m_oStreetView.setPov({
			heading :	nDir,
			pitch	:	0,
	        zoom	:	1
		});
		
		oStreetView.m_oMap.setCenter( oLonLat, oStreetView.m_oMap.getZoom() );
	});
}

//---------------------------------
//
oStreetView.CoverView = function( isShow )
{
	if( oStreetView.m_isLoad == false || oStreetView.m_isShow == false )
	{
		return;
	}
	if( oStreetView.m_oCoverElement == null )
	{
		oStreetView.m_oCoverElement = document.createElement('div');
		oStreetView.m_oCoverElement.style.position			= 'absolute';
		oStreetView.m_oCoverElement.style.backgroundColor	= '#FF8C00';
		oStreetView.m_oCoverElement.style.filter			= 'Alpha(Opacity=50)';
		oStreetView.m_oCoverElement.style.zIndex			= 999; 
		oStreetView.m_oCoverElement.style.opacity			= 0.5;
		
		oStreetView.m_oStreetDiv.appendChild( oStreetView.m_oCoverElement );
	}

	if( isShow )
	{
		oStreetView.m_oCoverElement.style.display	= "block";
		oStreetView.m_oCoverElement.style.width		= "100%";
		oStreetView.m_oCoverElement.style.height	= "100%";
	}
	else
	{
		oStreetView.m_oCoverElement.style.display	= "none";
		oStreetView.m_oCoverElement.style.width		= 0 + "px";
		oStreetView.m_oCoverElement.style.height	= 0 + "px";
	}
}

//---------------------------------
//
oStreetView.isLoad = function()
{
	return true;	
}

/***************************************\
Function:	Google map address search

\***************************************/
var oGeocoder = {
	m_oFlex			:	null,
	
	m_isLoad		:	false,
	m_arrGeocoder	:	[],
	m_nMaxID		:	20,
	m_nCurID		:	0
};

//---------------------------------------
//
oGeocoder.Init = function()
{
	if( typeof( google ) == 'undefined' )
	{
		return;
	}
	
	for( var n = 0; n < oGeocoder.m_nMaxID; n++ )
	{
		oGeocoder.m_arrGeocoder.push( new google.maps.Geocoder() );
	}
	
	
	if( oGeocoder.m_oFlex == null )
	{
		oGeocoder.m_oFlex = document.getElementById( attributes.id  );
	}
	oGeocoder.m_isLoad = true;
}

//---------------------------------------
//
oGeocoder.GetGeocoder = function()
{
	if( oGeocoder.m_isLoad == false )
	{
		return;
	}
	
	oGeocoder.m_nCurID++;
	if( oGeocoder.m_nCurID >= oGeocoder.m_nMaxID )
	{
		oGeocoder.m_nCurID = 0;
	}
	
	return oGeocoder.m_arrGeocoder[ oGeocoder.m_nCurID ];
}

//---------------------------------------
//
oGeocoder.GetAddressByLonLat = function( strKey, nLon, nLat )
{
	if( nLon == null || nLat == null )
	{
		return;
	}
	if( oGeocoder.m_isLoad == false )
	{
		oGeocoder.Init();
		return;
	}

    oGeocoder.GetGeocoder().geocode( { 'latLng': new google.maps.LatLng( nLat, nLon ) }, function( results, status )
    {
		if ( status == google.maps.GeocoderStatus.OK )
		{
			if ( results[0] )
			{
				oGeocoder.m_oFlex.CallFuncGetAddressByLonLat( strKey, results[0].formatted_address );
			}
			else
			{
				oGeocoder.m_oFlex.CallFuncGetAddressByLonLat( strKey, "" );
			}
		}
		else
		{
			oGeocoder.m_oFlex.CallFuncGetAddressByLonLat( strKey, "" );
		}
	});
}

//--------------------------------------
//
oGeocoder.GetLonLatByAddress = function( strQuestKey )
{
	if( strQuestKey == null || typeof( strQuestKey ) != "string" )
	{
		return;
	}
	if( oGeocoder.m_isLoad == false )
	{
		oGeocoder.Init();
		return;
	}

    oGeocoder.GetGeocoder().geocode( { 'address' : strQuestKey }, function( results, status )
    {
		if ( status == google.maps.GeocoderStatus.OK )
		{
			if ( results != null && results.length > 0 )
			{
				var arrData	= [];
				var nLen	= results.length;
				for( var n = 0; n < nLen; n++ )
				{
					arrData.push([
						results[n].geometry.location.lng(),
						results[n].geometry.location.lat(),
						results[n].formatted_address
					]);
				}
				
				oGeocoder.m_oFlex.CallFuncGetLonLatByAddress( strQuestKey, arrData );
			}
			else
			{
				oGeocoder.m_oFlex.CallFuncGetLonLatByAddress( strQuestKey, [] );
			}
		}
		else
		{
			oGeocoder.m_oFlex.CallFuncGetLonLatByAddress( strQuestKey, [] );
		}
	});
}

/***************************************\
Function:	Google map search way

\***************************************/
var oWay = {
	m_oFlex			:	null,
	m_isLoad		:	false,
	m_oWay			:	null
}

oWay.Init = function()
{
	if( typeof( google ) == 'undefined' )
	{
		return;
	}
	oWay.m_oWay		= new google.maps.DirectionsService();
	oWay.m_isLoad	= true;
}

oWay.GetWay = function( strKey, nLon1, nLat1, nLon2, nLat2 )
{
	if( nLon1 == null || nLat1 == null || nLon2 == null || nLat2 == null )
	{
		return;
	}
	
	if( oWay.m_isLoad == false )
	{
		oWay.Init();
		return;
	}
	
	var oRequest = {
        origin		:	new google.maps.LatLng( nLat1, nLon1 ), 
        destination	:	new google.maps.LatLng( nLat2, nLon2 ),
        travelMode	:	google.maps.DirectionsTravelMode.DRIVING
    };

	oWay.m_oWay.route( oRequest, function( response, status )
	{
		if ( status == google.maps.DirectionsStatus.OK && response.routes.length > 0 )
		{
			var arrData		= [];
			var arrRoute	= response.routes[0].overview_path;
			var nLen		= arrRoute.length;
			for( var n = 0; n < nLen; n++)
			{
				arrData.push( [ arrRoute[n].lng(), arrRoute[n].lat() ] );
			}
			
			var strStartAddress = "";
			var strEndAddress = "";
			
			var arrWay	= [];
			if( response.routes[0].legs.length > 0 )
			{
				strStartAddress = response.routes[0].legs[0].start_address;
				strEndAddress	= response.routes[0].legs[0].end_address;
				
				arrRoute		= response.routes[0].legs[0].steps;
				nLen			= arrRoute.length;
				for( var n = 0; n < nLen; n++ )
				{
					arrWay.push( arrRoute[n].instructions );
				}
			}			
			oGeocoder.m_oFlex.CallFuncGetWay( strKey, arrData, arrWay, strStartAddress, strEndAddress );
		}
		else
		{
			oGeocoder.m_oFlex.CallFuncGetWay( strKey, [], [] );
		}
    });

}

/***************************************\
Search Address by lonlat from mapABC

\***************************************/
var oMapABC = {};

oMapABC.GetAddressByLonLat = function( strKey, nLon, nLat )
{
oMapSOSO.GetAddressByLonLat( strKey, nLon, nLat );
}

/***************************************\
Search Address by lonlat from mapABC

\***************************************/
var oMapSOSO = {
	m_isLoaded		:	false,
	m_oGeocoder		:	null,
	m_arrGeocoder	:	[],
	m_oFlex 		:	null
};

//---------------------------------------
// 
oMapSOSO.GetAngle = function( oLatLng1, oLatLng2 )
{
	var dbLon1	= oLatLng1.getLng();
	var dbLat1	= oLatLng1.getLat();
	var dbLon2	= oLatLng2.getLng();
	var dbLat2	= oLatLng2.getLat();

	var alpha = Math.acos(( dbLat2 - dbLat1 ) / Math.sqrt(Math.pow( dbLon2 - dbLon1, 2) + Math.pow( dbLat2 - dbLat1, 2)));
	if ( dbLon2 - dbLon1 < 0) {
		alpha = Math.PI * 2 - alpha;
	}
	var nAngle = parseInt( alpha/Math.PI*180 );

	//var nAngle = parseInt( qq.maps.geometry.spherical.computeHeading( oLatLng1, oLatLng2 ) );
	
	if( nAngle >= -10 && nAngle <= 10 )
	{
		return "正北方";
	}
	else if( nAngle > 10 && nAngle < 80 )
	{
		return "东北方";
	}
	else if( nAngle >= 80 && nAngle <= 100 )
	{
		return "正东方";
	}
	else if( nAngle > 100 && nAngle < 170 )
	{
		return "东南方";
	}
	else if( nAngle >= 170 || nAngle <= -170 )
	{
		return "正南方";
	}
	else if( nAngle > -170 && nAngle < -100 )
	{
		return "西南方";
	}
	else if( nAngle >= -100 && nAngle <= -80 )
	{
		return "正西方";
	}
	else if( nAngle > -80 && nAngle < -10 )
	{
		return "西北方";
	}
	else
	{
		return "";
	}
	
}

//---------------------------------------
//
oMapSOSO.Init = function()
{
	if( typeof(qq) == "undefined" || typeof(qq.maps.Geocoder) == "undefined" )
	{
		return;	
	}
    
	oMapSOSO.m_isLoaded = true; 
	oMapSOSO.m_oFlex = document.getElementById( attributes.id ); 
}

//---------------------------------------
//
oMapSOSO.GetAddressByLonLat = function( strKey, nLon, nLat )
{
	if( nLon == null || nLat == null )
	{
		return;
	}

	if( oMapSOSO.m_isLoaded == false )
	{
		oMapSOSO.Init();
		return;
	}
	
	var oGeocoder = null;
	if( oMapSOSO.m_arrGeocoder.length > 0 )
	{
		oGeocoder = oMapSOSO.m_arrGeocoder.shift();
	}
	else
	{
		oGeocoder = new qq.maps.Geocoder();
	}

	if( oGeocoder == null )
	{
		oMapSOSO.m_oFlex.CallFuncGetAddressByLonLat( strKey, "未查找到任何结果." );
		return;
	}

	oGeocoder.setComplete( function( result )
	{

		var strAddress	= result.detail.address;
		var arrNear		= result.detail.nearPois
		var nLen = arrNear.length;
		if( nLen > 2 )
		{
			nLen = 2;
		}
		for( var n = 0; n < nLen; n++ )
		{
			strAddress += ", 距"
						+ arrNear[n].name
						+ oMapSOSO.GetAngle( arrNear[n].latLng, new qq.maps.LatLng(nLat, nLon) )
						+ arrNear[n].dist + "米";
		}
		
		oMapSOSO.m_oFlex.CallFuncGetAddressByLonLat( strKey, strAddress );
		oMapSOSO.m_arrGeocoder.push( oGeocoder );
		
	});
	
	oGeocoder.setError( function( a )
	{
		oMapSOSO.m_oFlex.CallFuncGetAddressByLonLat( strKey, "未查找到任何结果." );
		oMapSOSO.m_arrGeocoder.push( oGeocoder );
	});

	oGeocoder.getAddress( new qq.maps.LatLng( nLat, nLon ) );
}
