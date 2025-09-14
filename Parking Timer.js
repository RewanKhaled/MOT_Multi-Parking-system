//*** Start Set Query Parameter Value  For Grid 1 ** 

ExecuteQueryModified('SELECT currentNearnessLevel,SensorId FROM GROUP_71950 where id in (select max(id) from GROUP_71950 group by SensorId)', Grid_1_callbackFunc);

function Grid_1_callbackFunc(error, xhr) {
  if (xhr.response) {
    data = JSON.parse(xhr.response);

    for (var i = 0; i < data.length; i++) {
      var status = data[i].currentNearnessLevel
      var sId = data[i].SensorId
      var carName = 'car_' + sId;

      if (status > 0) {
        SetPluginParameterValue(carName, 'Visible', '0');
        DrawPlugin(carName);
      } else {
        SetPluginParameterValue(carName, 'Visible', '1');
        DrawPlugin(carName);
      }
    }

    SetPluginParameterValue('Grid 1', 'SQL query statement', data);
    DrawPlugin('Grid 1');
  } //End If 
} //End CB function 

//*** End Set Query Parameter  ****