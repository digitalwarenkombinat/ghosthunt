getAccessToken = function () {
  return 'pk.eyJ1IjoiZ3JlZ2dlciIsImEiOiJjaXl1N3picTcwMDZkMzJyczB4Y3MxMGVxIn0.voeDl_IRyEmggYlnYhDXoQ';
};

getStyle = function (selectedCity) {
  switch (selectedCity) {
    case 'leipzig':
      return 'mapbox://styles/gregger/cjpkxg68s0fb22sqnjhzm8vvb';
    default:
      return 'mapbox://styles/gregger/cjpkxg68s0fb22sqnjhzm8vvb';
  };
};