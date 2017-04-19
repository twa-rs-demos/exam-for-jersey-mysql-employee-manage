//
// Generated from RAML specification
// <https://github.com/aisensiy/raml2test>
//

var request = require('request');
var chai = require('chai');
var assert = chai.assert;
var tv4 = require('tv4');
var endpoint = process.env.ENDPOINT;

console.log(endpoint);

var employeeId, employeeURI, roleId, roleURI, departmentURI, departmentId;

describe("Test", function () {
  this.timeout(60000);
  it("POST /employees -> 201", function (done) {
    var options = {
      url: endpoint + '/employees',
      method: 'POST',
      qs: {},
      json: {
        "name": "Jane Smith",
        "department_id": 2,
        "role_id": 3,
        "gender": "male"
      },
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 201, "Expect 201, got " + response.statusCode);
      var schema = "";
      if (schema != '') {
        // verify response body
        body = (body == '' ? '[empty]' : body);
        assert.doesNotThrow(function () {
          JSON.parse(body);
        }, JSON.SyntaxError, "Invalid JSON: " + body);
        var json = JSON.parse(body);
        var result = tv4.validateResult(json, schema);
        assert.lengthOf(result.missing, 0, "Missing/unresolved JSON schema $refs (" + result.missing && result.missing.join(', ') + ") in schema: " + JSON.stringify(schema, null, 4) + " Error");
        assert.ok(result.valid, "Got unexpected response body: " + result.error && result.error.message + " " + JSON.stringify(schema, null, 4) + " Error");
        
      }
      employeeURI = response.headers['location'];
      var splits = employeeURI.split("/");
      employeeId = splits[splits.length - 1];
      done();
    });
  });
  
  it("GET /employees/{employeeId} -> 200", function (done) {
    var options = {
      url: endpoint + '/employees/' + employeeId,
      method: 'GET',
      qs: {},
      body: "",
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 200, "Expect 200, got " + response.statusCode);
      var schema = {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "employee_url": {
            "type": "string"
          },
          "id": {
            "type": "integer"
          },
          "name": {
            "type": "string"
          },
          "department_id": {
            "type": "integer"
          },
          "role_id": {
            "type": "integer"
          },
          "gender": {
            "type": "integer"
          },
          "required": ["employee_url", "id", "name", "department_id", "gender", "role_id"]
        }
      };
      if (schema != '') {
        // verify response body
        body = (body == '' ? '[empty]' : body);
        assert.doesNotThrow(function () {
          JSON.parse(body);
        }, JSON.SyntaxError, "Invalid JSON: " + body);
        var json = JSON.parse(body);
        var result = tv4.validateResult(json, schema);
        assert.lengthOf(result.missing, 0, "Missing/unresolved JSON schema $refs (" + result.missing && result.missing.join(', ') + ") in schema: " + JSON.stringify(schema, null, 4) + " Error");
        assert.ok(result.valid, "Got unexpected response body: " + (result.error && result.error.message) + " " + JSON.stringify(schema, null, 4) + " Error");
      }
      done();
    });
  });
  
  it("GET /employees -> 200", function (done) {
    var options = {
      url: endpoint + '/employees',
      method: 'GET',
      qs: {},
      body: '',
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 200, "Expect 200, got " + response.statusCode);
      var schema = {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "array",
        "employees": {
          "type": "object",
          "properties": {
            "employee_url": {
              "type": "string"
            },
            "id": {
              "type": "integer"
            },
            "name": {
              "type": "string"
            },
            "department_id": {
              "type": "integer"
            },
            "role_id": {
              "type": "integer"
            },
            "gender": {
              "type": "integer"
            },
            "required": ["employee_url", "id", "name", "department_id", "gender", "role_id"]
          }
        }
      };
      if (schema != '') {
        // verify response body
        body = (body == '' ? '[empty]' : body);
        assert.doesNotThrow(function () {
          JSON.parse(body);
        }, JSON.SyntaxError, "Invalid JSON: " + body);
        var json = JSON.parse(body);
        var result = tv4.validateResult(json, schema);
        assert.lengthOf(result.missing, 0, "Missing/unresolved JSON schema $refs (" + result.missing && result.missing.join(', ') + ") in schema: " + JSON.stringify(schema, null, 4) + " Error");
        assert.ok(result.valid, "Got unexpected response body: " + (result.error && result.error.message) + " " + JSON.stringify(schema, null, 4) + " Error");
      }
      done();
    });
  });
  
  it("PUT /employees/{employeeId} -> 204", function (done) {
    var options = {
      url: endpoint + '/employees/' + employeeId,
      method: 'PUT',
      qs: {},
      body: {
        "name": "Jane Smith",
        "department_id": 1,
        "role_id": 2,
        "gender": "male"
      },
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 204, "Expect 204, got " + response.statusCode);
      done();
    });
  });
  
  it("DELETE /employees/{employeeId} -> 204", function (done) {
    var options = {
      url: endpoint + '/employees/' + employeeId,
      method: 'DELETE',
      qs: {},
      body: "",
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 204, "Expect 204, got " + response.statusCode);
      done();
    });
  });
  
  
  it("POST /departments -> 201", function (done) {
    var options = {
      url: endpoint + '/departments',
      method: 'POST',
      qs: {},
      json: {
        "name": "new_department"
      },
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 201, "Expect 201, got " + response.statusCode);
      var schema = "";
      if (schema != '') {
        // verify response body
        body = (body == '' ? '[empty]' : body);
        assert.doesNotThrow(function () {
          JSON.parse(body);
        }, JSON.SyntaxError, "Invalid JSON: " + body);
        var json = JSON.parse(body);
        var result = tv4.validateResult(json, schema);
        assert.lengthOf(result.missing, 0, "Missing/unresolved JSON schema $refs (" + result.missing && result.missing.join(', ') + ") in schema: " + JSON.stringify(schema, null, 4) + " Error");
        assert.ok(result.valid, "Got unexpected response body: " + result.error && result.error.message + " " + JSON.stringify(schema, null, 4) + " Error");
        
      }
      departmentURI = response.headers['location'];
      var splits = departmentURI.split("/");
      departmentId = splits[splits.length - 1];
      done();
    });
  });
  
  it("GET /departments/{departmentId} -> 200", function (done) {
    var options = {
      url: endpoint + '/departments/' + departmentId,
      method: 'GET',
      qs: {},
      body: "",
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 200, "Expect 200, got " + response.statusCode);
      var schema = {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "id": {
            "type": "integer"
          },
          "department_url": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "required": ["name", "id", "department_url"]
        }
      };
      if (schema != '') {
        // verify response body
        body = (body == '' ? '[empty]' : body);
        assert.doesNotThrow(function () {
          JSON.parse(body);
        }, JSON.SyntaxError, "Invalid JSON: " + body);
        var json = JSON.parse(body);
        var result = tv4.validateResult(json, schema);
        assert.lengthOf(result.missing, 0, "Missing/unresolved JSON schema $refs (" + result.missing && result.missing.join(', ') + ") in schema: " + JSON.stringify(schema, null, 4) + " Error");
        assert.ok(result.valid, "Got unexpected response body: " + (result.error && result.error.message) + " " + JSON.stringify(schema, null, 4) + " Error");
      }
      done();
    });
  });
  
  it("GET /departments -> 200", function (done) {
    var options = {
      url: endpoint + '/departments',
      method: 'GET',
      qs: {},
      body: '',
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 200, "Expect 200, got " + response.statusCode);
      var schema = {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "totalCount": {
          "type": "integer"
        },
        "departments": {
          "type": "array",
          "department": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer"
              },
              "department_url": {
                "type": "string"
              },
              "name": {
                "type": "string"
              },
              "required": ["name", "id", "department_url"]
            }
          }
        }
      };
      if (schema != '') {
        // verify response body
        body = (body == '' ? '[empty]' : body);
        assert.doesNotThrow(function () {
          JSON.parse(body);
        }, JSON.SyntaxError, "Invalid JSON: " + body);
        var json = JSON.parse(body);
        var result = tv4.validateResult(json, schema);
        assert.lengthOf(result.missing, 0, "Missing/unresolved JSON schema $refs (" + result.missing && result.missing.join(', ') + ") in schema: " + JSON.stringify(schema, null, 4) + " Error");
        assert.ok(result.valid, "Got unexpected response body: " + (result.error && result.error.message) + " " + JSON.stringify(schema, null, 4) + " Error");
      }
      done();
    });
  });
  
  it("PUT /departments/{departmentId} -> 204", function (done) {
    var options = {
      url: endpoint + '/departments/' + departmentId,
      method: 'PUT',
      qs: {},
      body: {
        "name": "Life Department"
      },
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 204, "Expect 204, got " + response.statusCode);
      done();
    });
  });
  
  it("DELETE /departments/{departmentId} -> 204", function (done) {
    var options = {
      url: endpoint + '/departments/' + departmentId,
      method: 'DELETE',
      qs: {},
      body: "",
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 204, "Expect 204, got " + response.statusCode);
      done();
    });
  });
  
  
  it("POST /roles -> 201", function (done) {
    var options = {
      url: endpoint + '/roles',
      method: 'POST',
      qs: {},
      json: {
        "title": "assistant manager"
      },
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 201, "Expect 201, got " + response.statusCode);
      var schema = "";
      if (schema != '') {
        // verify response body
        body = (body == '' ? '[empty]' : body);
        assert.doesNotThrow(function () {
          JSON.parse(body);
        }, JSON.SyntaxError, "Invalid JSON: " + body);
        var json = JSON.parse(body);
        var result = tv4.validateResult(json, schema);
        assert.lengthOf(result.missing, 0, "Missing/unresolved JSON schema $refs (" + result.missing && result.missing.join(', ') + ") in schema: " + JSON.stringify(schema, null, 4) + " Error");
        assert.ok(result.valid, "Got unexpected response body: " + result.error && result.error.message + " " + JSON.stringify(schema, null, 4) + " Error");
        
      }
      roleURI = response.headers['location'];
      var splits = roleURI.split("/");
      roleId = splits[splits.length - 1];
      done();
    });
  });
  
  it("GET /roles/{roleId} -> 200", function (done) {
    var options = {
      url: endpoint + '/roles/' + roleId,
      method: 'GET',
      qs: {},
      body: "",
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 200, "Expect 200, got " + response.statusCode);
      var schema = {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "id": {
            "type": "integer"
          },
          "title": {
            "type": "title"
          },
          "role_rul": {
            "type": "string"
          },
          "required": ["role_url", "title", "id"]
        }
      };
      if (schema != '') {
        // verify response body
        body = (body == '' ? '[empty]' : body);
        assert.doesNotThrow(function () {
          JSON.parse(body);
        }, JSON.SyntaxError, "Invalid JSON: " + body);
        var json = JSON.parse(body);
        var result = tv4.validateResult(json, schema);
        assert.lengthOf(result.missing, 0, "Missing/unresolved JSON schema $refs (" + result.missing && result.missing.join(', ') + ") in schema: " + JSON.stringify(schema, null, 4) + " Error");
        assert.ok(result.valid, "Got unexpected response body: " + (result.error && result.error.message) + " " + JSON.stringify(schema, null, 4) + " Error");
      }
      done();
    });
    
    it("GET /roles -> 200", function (done) {
      var options = {
        url: endpoint + '/roles',
        method: 'GET',
        qs: {},
        body: '',
        header: {}
      };
      
      request(options, function (error, response, body) {
        assert.isNull(error);
        assert.isNotNull(response, 'Response');
        assert.equal(response.statusCode, 200, "Expect 200, got " + response.statusCode);
        var schema = {
          "$schema": "http://json-schema.org/draft-04/schema#",
          "type": "object",
          "properties": {
            "totalCount": {
              "type": "integer"
            },
            "roles": {
              "type": "array",
              "properties": {
                "id": {
                  "type": "integer"
                },
                "title": {
                  "type": "string"
                },
                "role_url": {
                  "type": "string"
                },
                "required": ["role_url", "title", "id"]
              },
              "required": ["totalCount", "roles"]
            }
          }
        };
        if (schema != '') {
          // verify response body
          body = (body == '' ? '[empty]' : body);
          assert.doesNotThrow(function () {
            JSON.parse(body);
          }, JSON.SyntaxError, "Invalid JSON: " + body);
          var json = JSON.parse(body);
          var result = tv4.validateResult(json, schema);
          assert.lengthOf(result.missing, 0, "Missing/unresolved JSON schema $refs (" + result.missing && result.missing.join(', ') + ") in schema: " + JSON.stringify(schema, null, 4) + " Error");
          assert.ok(result.valid, "Got unexpected response body: " + (result.error && result.error.message) + " " + JSON.stringify(schema, null, 4) + " Error");
        }
        done();
      });
    });
    
    it("PUT /roles/{roleId} -> 204", function (done) {
      var options = {
        url: endpoint + '/roles/' + roleId,
        method: 'PUT',
        qs: {},
        body: {
          "title": "president"
        },
        header: {}
      };
      
      request(options, function (error, response, body) {
        assert.isNull(error);
        assert.isNotNull(response, 'Response');
        assert.equal(response.statusCode, 204, "Expect 204, got " + response.statusCode);
        done();
      });
    });
    
    it("DELETE /roles/{roleId} -> 204", function (done) {
      var options = {
        url: endpoint + '/roles/' + roleId,
        method: 'DELETE',
        qs: {},
        body: "",
        header: {}
      };
      
      request(options, function (error, response, body) {
        assert.isNull(error);
        assert.isNotNull(response, 'Response');
        assert.equal(response.statusCode, 204, "Expect 204, got " + response.statusCode);
        done();
      });
    });
    
    
  });
  
  
});