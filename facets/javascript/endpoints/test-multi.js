import EndpointInterface from "#{API_BASE_URL}/api/rest/endpoint/EndpointInterface.js";

// the request schema, this should be updated
// whenever changes to the endpoint parameters are made
// this is important because this is used to validate and parse the request parameters
const requestSchema = {
  "title" : "test-multiRequest",
  "id" : "test-multiRequest",
  "default" : "Schema definition for test-multi",
  "$schema" : "http://json-schema.org/draft-07/schema",
  "type" : "object",
  "properties" : {
    "single" : {
      "title" : "single",
      "type" : "string",
      "minLength" : 1
    },
    "multi" : {
      "title" : "multi",
      "type" : "string",
      "minLength" : 1
    }
  }
}

// the response schema, this should be updated
// whenever changes to the endpoint parameters are made
// this is important because this could be used to parse the result
const responseSchema = {
  "title" : "test-multiResponse",
  "id" : "test-multiResponse",
  "default" : "Schema definition for test-multi",
  "$schema" : "http://json-schema.org/draft-07/schema",
  "type" : "object"
}

// should contain offline mock data, make sure it adheres to the response schema
const mockResult = {};

class test-multi extends EndpointInterface {
	constructor() {
		// name and http method, these are inserted when code is generated
		super("test-multi", "POST");
		this.requestSchema = requestSchema;
		this.responseSchema = responseSchema;
		this.mockResult = mockResult;
	}

	getRequestSchema() {
		return this.requestSchema;
	}

	getResponseSchema() {
		return this.responseSchema;
	}
}

export default new test-multi();