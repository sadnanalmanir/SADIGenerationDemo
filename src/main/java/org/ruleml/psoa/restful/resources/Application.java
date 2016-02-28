package org.ruleml.psoa.restful.resources;

import java.util.HashSet;
import java.util.Set;
import org.jboss.resteasy.logging.Logger;



public class Application extends javax.ws.rs.core.Application {

    Logger logger = Logger.getLogger(Application.class);
    private Set<Object> singletons = new HashSet<Object>();
    private Set<Class<?>> empty = new HashSet<Class<?>>();

    public Application() {
        // ADD YOUR RESTFUL RESOURCES HERE
        logger.info("inside Application class....");
        this.singletons.add(new DomainOntologyLoader());
        this.singletons.add(new ServiceOntologyLoader());

    }

    @Override
    public Set<Class<?>> getClasses() {
        return this.empty;
    }

    @Override
    public Set<Object> getSingletons() {
        return this.singletons;
    }
}
