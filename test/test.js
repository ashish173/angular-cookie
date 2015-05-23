describe('ipCookie', function(){
  var $document;

  beforeEach(angular.mock.module('ipCookie'));
  beforeEach(angular.mock.module(function($provide){
    $document = {};
    $provide.value('$document', [$document]);
  }));

  it('should set a cookie if key & value is passed as params', inject(function(ipCookie){
    // Usage: ipCookie(key, value);
    cookie = "{name: 'hidden_truth'}";
    ipCookie("test_cookie", cookie);
    expect(ipCookie('test_cookie')).not.toBeNull();
  }));

  it('should return a cookie if only the key is passed as params', inject(function(ipCookie){
    // Usage: ipCookie(key);
    $document.cookie = "test_cookie={name: 'hidden_truth'}";
    var cookie_value = "{name: 'hidden_truth'}";
    expect(ipCookie('test_cookie')).toEqual(cookie_value);
  }));

  //TODO this test is RED
  //ISSUE: https://github.com/ivpusic/angular-cookie/issues/46
  it('should return all cookies if no params are passed', inject(function(ipCookie){
    // Usage: ipCookie();
    ipCookie("test_cookie_1", "{name1: 'hidden_tresures1'}");
    ipCookie("test_cookie_2", "{name2: 'hidden_tresures2'}");
    var all_cookies = ipCookie();
    expect(Array.isArray(all_cookies)).toEqual(true);
  }));

  it('should remove a cookie if a key is provided', inject(function(ipCookie){
    // Usage: ipCookie.remove(key);
    ipCookie("test_cookie", "{name1: 'hidden_tresures'}");
    ipCookie.remove('test_cookie');
    expect(ipCookie('test_cookie').length).toEqual(0);
  }));

  // Test is RED too as removing of cookies is independant of path
  // Path is not implemented its just set in tests so need to implement it.
  it('should remove a cookie from a certain path if path is provided', inject(function(ipCookie){
    // Usage: ipCookie.remove(key, { path: '/some/path'});
    // ipCookie('test_cookie', "{name1: 'hidden_tresures'}", { path: '/new'});
    // implementation left
  }));
});