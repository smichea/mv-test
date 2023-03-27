import EndpointInterface from "#{API_BASE_URL}/api/rest/endpoint/EndpointInterface.js";

// the request schema, this should be updated
// whenever changes to the endpoint parameters are made
// this is important because this is used to validate and parse the request parameters
const requestSchema = {
  "title" : "script-endpointRequest",
  "id" : "script-endpointRequest",
  "default" : "Schema definition for script-endpoint",
  "$schema" : "http://json-schema.org/draft-07/schema",
  "type" : "object",
  "properties" : {
    "CityValue" : {
      "title" : "CityValue",
      "id" : "script-endpoint_CityValue",
      "default" : "Paris",
      "type" : "string",
      "minLength" : 1
    }
  }
}

// the response schema, this should be updated
// whenever changes to the endpoint parameters are made
// this is important because this could be used to parse the result
const responseSchema = {
  "title" : "script-endpointResponse",
  "id" : "script-endpointResponse",
  "default" : "Schema definition for script-endpoint",
  "$schema" : "http://json-schema.org/draft-07/schema",
  "type" : "object",
  "properties" : {
    "results" : {
      "title" : "results",
      "type" : "string",
      "minLength" : 1
    }
  }
}

// should contain offline mock data, make sure it adheres to the response schema
const mockResult = {};

class script-endpoint extends EndpointInterface {
	constructor() {
		// name and http method, these are inserted when code is generated
		super("script-endpoint", "GET");
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

export default new script-endpoint();