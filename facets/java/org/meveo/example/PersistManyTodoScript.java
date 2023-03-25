/*
 * This function is an example of entity creation and peristence
 * for more documentation check 
 * https://github.com/meveo-org/meveo/tree/develop/meveo-admin-ejbs/src/main/java/org/meveo/api/persistence#ii1-persisting-an-entity
 */

/* replace here by you module package name */
package org.meveo.example;

import java.util.Map;
import java.time.Instant;
import org.meveo.service.script.Script;
import org.meveo.admin.exception.BusinessException;
import org.meveo.api.persistence.CrossStorageApi;
import org.meveo.model.storage.Repository;
import org.meveo.service.storage.RepositoryService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/* Replace here by your Custom entity class  */
import org.meveo.model.customEntities.Todo;


/* Here we use a generic script by extending Script */
public class PersistManyTodoScript extends Script {

    private static final Logger LOG = LoggerFactory.getLogger(PersistManyTodoScript.class);
    
    /* Service used to persist an entity */
    private final CrossStorageApi crossStorageApi = getCDIBean(CrossStorageApi.class);

    /* Service used to retrieve the default repository (holding the data stores configuration) */
    private final RepositoryService repositoryService = getCDIBean(RepositoryService.class);

    /* Default repository */
    private final Repository defaultRepo = repositoryService.findDefaultRepository();
  
    /* variable used to store the result of the script */
    private String result;
 
    /* By using a getter the GUI for creating a rest endpoint
    *  will detect 'result' as being an output of the function
    *  it can then be selected as the response of the endpoint
    */
    public String getResult() {
        return this.result;
    }

    @Override
    public void execute(Map<String, Object> parameters) throws BusinessException {
        
        try {
            Todo newEntity = new Todo();
            for(int l=0;l<100;l++){
              for(int i=0;i<1000;i++){
                newEntity.setUuid("TEST1_"+l+"_"+i);
                newEntity.setName("NAME_1_"+l+"_"+i);
                crossStorageApi.createOrUpdate(defaultRepo, newEntity);
              }
              LOG.info("Created batch {} of 1000 entities",l);
            }
            result = "{\"status\": \"success\"}";
        } catch (Exception ex) {
            String errorMessage = ex.getMessage();
            result = "{\"status\": \"failed\", \"result\": \"" + errorMessage + "\"}";
            LOG.error(errorMessage, ex);
        }
    }

}
