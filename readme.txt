=== Royal Google Maps ===
Contributors: royaltechbd
Donate link: http://royaltechbd.com/donate.html
Tags: google, google maps, google maps api, marker, markers, kml, network links, fusion, fusion tables, infowindow, infowindows, map, mapping, fusion layers, shortcode, shortcodes, google maps v3, v3, geocode, geocoding, address,  maps, latitude, longitude, api, traffic, bike


This plugin allows you to add one or more maps (via the Google Maps v3 API) to your page/post using shortcodes. 


== Description ==

This plugin allows you to add a google map into your post/page using shortcodes. 

Features:

* default world map
* add marker
* show/hide map controls
* set map size
* set zoom level
* set map type
* multiple maps on the same post
* set location by latitude/longitude
* set location by address
* show traffic
* show bike lanes
* disable scroll wheel zoom
* add scale bar
* Info windows
* show/hide infowindow by default
* add custom image as map icon
* add KML via URL link
* option to disable autozoom to KML bounds
* add a Fusion Table Layer


See a full description here:

http://royaltechbd.com/royal-google-maps-plugin-for-wordpress/

== Installation ==

This section describes how to install the plugin and get it working.

e.g.

1. Upload `google-maps-v3-shortcode` directory to the `/wp-content/plugins/` directory
1. Activate the plugin through the 'Plugins' menu in WordPress
1. Add shortcodes in your posts (ex: [royalmap address="Dhaka, Bangladesh"])

== Frequently Asked Questions ==
= Is there documentation for this plugin? =

http://royaltechbd.com/royal-google-maps-plugin-for-wordpress/
You can ask any question here.

= How do I add a map to my post =

Using shortcodes in the edit box for your post.  The address parameter for the address, and the "zoom" parameter for zoom level (ex: 20=really zoomed in, 0=full world)

Ex:
`[royalmap address="Dhaka, Bangladesh" zoom="10"]`


= Can I add multiple maps to the same post? =

Yes!  But make sure you use the "id" parameter to create unique id's for each map.

Ex:
`[royalmap id="map1" address="Dhaka, Bangladesh"]`
`[royalmap id="map2" address="Khulna, Bangladesh"]`

= Can I change the size of the map? =
Yes!  Just add your own width and height parameters (the default is 100%x400).

Ex:
`[royalmap w="200" h="100"]`

= Can you add info bubbles? =
Yes!  Add the "infowindow" parameter

Ex:
`[royalmap address="Mirpur, Dhaka" marker="yes" infowindow="Hello Dhaka!"]`

= Can you add KML's? =
Yes!  Just provide the url link to the KML file.  The map will auto center and zoom to the extent of your KML.

Ex:
`[royalmap kml="http://example.com/svn/trunk/ggeoxml/example.kml"]`

= Can you add Fusion Table Layers? =
Yes!  Just provide the Fusion Layer ID as "fusion" parameter.  

Ex:
`[royalmap address="90095" z=9 fusion="825831"]`


== Screenshots ==
1. Shortcode Generator icon
2. Create shortcode in post/page
3. Generated Shortcode in post
4. Output.

See full working examples here:
http://royaltechbd.com/royal-google-maps-plugin-for-wordpress/

== Changelog ==

= 1.0 =
* First release

== Upgrade Notice ==

= 1.0 =
* First release
