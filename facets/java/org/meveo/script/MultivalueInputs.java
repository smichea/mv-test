package org.meveo.script;

import java.util.Map;

import org.meveo.service.script.Script;
import org.meveo.admin.exception.BusinessException;
import java.util.Set;

public class MultivalueInputs extends Script {
	
  	private Set<String> multi;
  
    private String single;
  
  	public void setMulti(Set<String> multi) {
      this.multi = multi;
    }
  
  	public void  setSingle(String single) {
      this.single = single;
    }
  
	@Override
	public void execute(Map<String, Object> parameters) throws BusinessException {
		System.out.println("Multi : " + multi);
      	System.out.println("Single : " + single);
	}
	
}