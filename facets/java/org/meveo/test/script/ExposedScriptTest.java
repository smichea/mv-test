package org.meveo.test.script;

import org.meveo.service.script.Script;
import org.meveo.model.technicalservice.endpoint.EndpointVariables;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.util.stream.Collectors;

public class ExposedScriptTest extends Script {

    private String city;

    private Map<String, Object> results;

    @Override
    public void execute(Map<String, Object> methodContext) {
        results = new HashMap<>();
        results.put("result", "The city is : " + city);
        Double maxBudget = (Double) methodContext.get(EndpointVariables.MAX_BUDGET);
        String unit = (String) methodContext.get(EndpointVariables.BUDGET_UNIT);
        results.put("budget", "The budget is " + maxBudget + " " + unit);
    }

    public void setCity(String city) {
        this.city = city;
    }

    public Map<String, Object> getResults() {
        return results;
    }
}
