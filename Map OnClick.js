var Map_1_Mouse_click_Lat = GetPluginParameterValue('Map 1', 'Mouse click Lat');

var Map_1_Mouse_click_Long = GetPluginParameterValue('Map 1', 'Mouse click Long');

SetPluginParameterValue('Latitudetxt', 'Text', Map_1_Mouse_click_Lat);
DrawPlugin('Latitudetxt');

SetPluginParameterValue('Longitudetxt', 'Text', Map_1_Mouse_click_Long);
DrawPlugin('Longitudetxt');