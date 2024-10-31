// closure to avoid namespace collision
(function(){
	// creates the plugin
	tinymce.create('tinymce.plugins.royalgooglemaps', {
	
		// creates control instances based on the control's id.
		// our button's id is "royalgmap_button"

                init : function(ed, url) {
                        ed.addButton('royalgmap_button', {
                                title : 'Royal Google Maps Shortcode Generator', // title of the button
                                cmd : 'mceExample',
                                image : url + '/gmap.png',
					onclick : function() {
						// triggers the thickbox
						var width = jQuery(window).width(), H = jQuery(window).height(), W = ( 720 < width ) ? 720 : width;
						W = W - 80;
						H = H - 115;
						tb_show( 'Google Maps Shortcode', '#TB_inline?width=' + W + '&height=' + H + '&inlineId=royalgmap-form' );
					}
                        });
                },
 
                getInfo : function() {
                        return {
                                longname : 'Royal Google Maps',
                                author : 'SM Mehdi Akram',
                                authorurl : 'http://shamokaldarpon.com',
                                infourl : 'http://royaltechbd.com/royal-google-maps-plugin-for-wordpress',
                                version : "1.0"
                        };
                }
	});
	
	// registers the plugin. DON'T MISS THIS STEP!!!
	tinymce.PluginManager.add('royalgmap', tinymce.plugins.royalgooglemaps);
	
	// executes this when the DOM is ready
	jQuery(function(){
		// creates a form to be displayed everytime the button is clicked
		// you should achieve this using AJAX instead of direct html code like this
		var form = jQuery('<div id="royalgmap-form"><table id="royalgmap-table" class="form-table">\
			<tr>\
				<th><label for="royalgmap-id">Map ID</label></th>\
				<td><input type="text" name="id" id="royalgmap-id" value="map1" /><small>Give an Unique ID for Every Map</small>\
			</tr>\
			<tr>\
				<th><label for="royalgmap-w">Map Width</label></th>\
				<td><input type="text" name="w" id="royalgmap-w" value="100%" /><small>Width in pixels or percentages</small></td>\
			</tr>\
			<tr>\
				<th><label for="royalgmap-h">Map Height</label></th>\
				<td><input type="text" name="h" id="royalgmap-h" value="400" /><small>Height in pixels</small></td>\
			</tr>\
			<tr>\
				<th><label for="royalgmap-lat">Latitude</label></th>\
				<td><input type="text" id="royalgmap-lat" name="lat" value="23" /><small>Just give Latitude value</small></td>\
			</tr>\
			<tr>\
				<th><label for="royalgmap-lon">Longitude</label></th>\
				<td><input type="text" id="royalgmap-lon" name="lon" value="90" /><small>Just give Longitude value</small></td>\
			</tr>\
			<tr>\
				<th><label for="royalgmap-zoom">Zoom</label></th>\
				<td><select name="zoom" id="royalgmap-zoom">\
					<option value="1">1</option>\
					<option value="2">2</option>\
					<option value="3">3</option>\
					<option value="4">4</option>\
					<option value="5">5</option>\
					<option value="6">6</option>\
					<option value="7">7</option>\
					<option value="8">8</option>\
					<option value="9">9</option>\
					<option value="10" selected>10</option>\
					<option value="11">11</option>\
					<option value="12">12</option>\
					<option value="13">13</option>\
					<option value="14">14</option>\
					<option value="15">15</option>\
					<option value="16">16</option>\
					<option value="17">17</option>\
					<option value="18">18</option>\
					<option value="19">19</option>\
					<option value="20">20</option>\
				</select><small>Google Map Zoom</small></td>\
			</tr>\
			<tr>\
				<th><label for="royalgmap-zc">Zoom Control</label></th>\
				<td><select name="zc" id="royalgmap-zc">\
					<option value="true" selected>True</option>\
					<option value="false">False</option>\
				</select><small>Zoom Control</small></td>\
			</tr>\
			<tr>\
				<th><label for="royalgmap-zco">Zoom Size</label></th>\
				<td><select name="zco" id="royalgmap-zco">\
					<option value="SMALL" selected>SMALL</option>\
					<option value="LARGE">LARGE</option>\
				</select><small>Zoom Size</small></td>\
			</tr>\
			<tr>\
				<th><label for="royalgmap-maptype">Map Type</label></th>\
				<td><select name="maptype" id="royalgmap-maptype">\
					<option value="ROADMAP" selected>ROADMAP</option>\
					<option value="SATELLITE">SATELLITE</option>\
					<option value="HYBRID">HYBRID</option>\
					<option value="TERRAIN">TERRAIN</option>\
				</select><small>Map Type</small></td>\
			</tr>\
			<tr>\
				<th><label for="royalgmap-marker">Marker</label></th>\
				<td><select name="marker" id="royalgmap-marker">\
					<option value="yes" selected>Yes</option>\
					<option value="no">No</option>\
				</select><small>Marker</small></td>\
			</tr>\
			<tr>\
				<th><label for="royalgmap-markerimage">Marker Image</label></th>\
				<td><input type="text" id="royalgmap-markerimage" name="markerimage" value="" /><small>Full image URL</small>\
				</td>\
			</tr>\
			<tr>\
				<th><label for="royalgmap-infowindow">Info Window</label></th>\
				<td><input type="text" id="royalgmap-infowindow" name="infowindow" value="Mehdi Akram" /><small>Info descriptions</small>\
				</td>\
			</tr>\
			<tr>\
				<th><label for="royalgmap-infowindowdefault">Info Window Default</label></th>\
				<td><select name="infowindowdefault" id="royalgmap-infowindowdefault">\
					<option value="no" selected>No</option>\
					<option value="yes">Yes</option>\
				</td>\
			</tr>\
		</table>\
		<p class="submit">\
			<input type="button" id="royalgmap-submit" class="button-primary" value="Insert Goole Map" name="submit" />\
		</p>\
		</div>');
		
		var table = form.find('table');
		form.appendTo('body').hide();
		
		// handles the click event of the submit button
		form.find('#royalgmap-submit').click(function(){
			// defines the options and their default values
			// again, this is not the most elegant way to do this
			// but well, this gets the job done nonetheless
			var options = { 
				'lat'    		: '23',
				'lon'    		: '90',
				'id'  			: 'map1',
				'w'    			: '100%',
				'h' 			: '400',				
				'zoom'			: '10',
				'zc'			: 'true',
				'zco'    		: 'SMALL',
				'maptype'   	: 'TERRAIN',
				'marker'		: 'yes',
				'markerimage'	: '',
				'infowindow'	: '',
				'infowindowdefault'	: 'no'
				};
			var shortcode = '[royalmap';
			
			for( var index in options) {
				var value = table.find('#royalgmap-' + index).val();
				
				// attaches the attribute to the shortcode only if it's different from the default value
				if ( value !== options[index] )
					shortcode += ' ' + index + '="' + value + '"';
			}
			
			shortcode += ']';
			
			// inserts the shortcode into the active editor
			tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);
			
			// closes Thickbox
			tb_remove();
		});
	});
})();