window.onload = function() {

  // the DICOM files
  //
  // this is a brain MR with dimensions 26x256x148 vx
  // some slices were removed to get the 'look-into-the-brain' effect
  var _dicom = ['IM-0001-0001.dcm',
'IM-0001-0002.dcm',
'IM-0001-0003.dcm',
'IM-0001-0004.dcm',
'IM-0001-0005.dcm',
'IM-0001-0006.dcm',
'IM-0001-0007.dcm',
'IM-0001-0008.dcm',
'IM-0001-0009.dcm',
'IM-0001-0010.dcm',
'IM-0001-0011.dcm',
'IM-0001-0012.dcm',
'IM-0001-0013.dcm',
'IM-0001-0014.dcm',
'IM-0001-0015.dcm',
'IM-0001-0016.dcm',
'IM-0001-0017.dcm',
'IM-0001-0018.dcm',
'IM-0001-0019.dcm',
'IM-0001-0020.dcm',
'IM-0001-0021.dcm',
'IM-0001-0022.dcm',
'IM-0001-0023.dcm',
'IM-0001-0024.dcm',
'IM-0001-0025.dcm',
'IM-0001-0026.dcm',
'IM-0001-0027.dcm',
'IM-0001-0028.dcm',
'IM-0001-0029.dcm',
'IM-0001-0030.dcm',
'IM-0001-0031.dcm',
'IM-0001-0032.dcm',
'IM-0001-0033.dcm',
'IM-0001-0034.dcm',
'IM-0001-0035.dcm',
'IM-0001-0036.dcm',
'IM-0001-0037.dcm',
'IM-0001-0038.dcm',
'IM-0001-0039.dcm',
'IM-0001-0040.dcm',
'IM-0001-0041.dcm',
'IM-0001-0042.dcm',
'IM-0001-0043.dcm',
'IM-0001-0044.dcm',
'IM-0001-0045.dcm',
'IM-0001-0046.dcm',
'IM-0001-0047.dcm',
'IM-0001-0048.dcm',
'IM-0001-0049.dcm',
'IM-0001-0050.dcm',
'IM-0001-0051.dcm',
'IM-0001-0052.dcm',
'IM-0001-0053.dcm',
'IM-0001-0054.dcm',
'IM-0001-0055.dcm',
'IM-0001-0056.dcm',
'IM-0001-0057.dcm',
'IM-0001-0058.dcm',
'IM-0001-0059.dcm',
'IM-0001-0060.dcm',
'IM-0001-0061.dcm',
'IM-0001-0062.dcm',
'IM-0001-0063.dcm',
'IM-0001-0064.dcm',
'IM-0001-0065.dcm',
'IM-0001-0066.dcm',
'IM-0001-0067.dcm',
'IM-0001-0068.dcm',
'IM-0001-0069.dcm',
'IM-0001-0070.dcm',
'IM-0001-0071.dcm',
'IM-0001-0072.dcm',
'IM-0001-0073.dcm',
'IM-0001-0074.dcm',
'IM-0001-0075.dcm',
'IM-0001-0076.dcm',
'IM-0001-0077.dcm',
'IM-0001-0078.dcm',
'IM-0001-0079.dcm',
'IM-0001-0080.dcm',
'IM-0001-0081.dcm',
'IM-0001-0082.dcm',
'IM-0001-0083.dcm',
'IM-0001-0084.dcm',
'IM-0001-0085.dcm',
'IM-0001-0086.dcm',
'IM-0001-0087.dcm',
'IM-0001-0088.dcm',
'IM-0001-0089.dcm',
'IM-0001-0090.dcm',
'IM-0001-0091.dcm',
'IM-0001-0092.dcm',
'IM-0001-0093.dcm',
'IM-0001-0094.dcm',
'IM-0001-0095.dcm',
'IM-0001-0096.dcm',
'IM-0001-0097.dcm',
'IM-0001-0098.dcm'];



  // create a new test_renderer
  var r = new X.renderer3D();
  r.bgColor = [0.2, 0.55, 0.4];
  r.init();
  r.camera.position = [0, 300, 0];

  // we create the X.volume container and attach all DICOM files
  var v = new X.volume();
  // map the data url to each of the slices
  v.file = _dicom.sort().map(function(v) {

    // we also add the 'fake' .DCM extension since else wise
    // XTK would think .org is the extension
    return 'https://xtk-test.herokuapp.com/dicom/ct/' + v;

  });

  // add the volume
  r.add(v);

  // .. and render it
  r.render();

  r.onShowtime = function() {

    // activate volume rendering
    v.volumeRendering = true;
    v.lowerThreshold = 80;
    v.windowLower = 115;
    v.windowHigh = 360;
    v.minColor = [0, 0.06666666666666667, 1];
    v.maxColor = [0.5843137254901961, 1, 0];
    v.opacity = 0.2;

  };

  volume = v;

};
