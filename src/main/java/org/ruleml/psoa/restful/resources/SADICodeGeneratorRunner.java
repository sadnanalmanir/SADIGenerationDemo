package org.ruleml.psoa.restful.resources;


import ca.unbsj.cbakerlab.codegenerator.GenerateSADIService;
import org.apache.maven.plugin.MojoExecutionException;
import org.apache.maven.plugin.MojoFailureException;

/**
 * Created by sadnana on 05/03/16.
 */
public class SADICodeGeneratorRunner {

    GenerateSADIService sadiService;

    public SADICodeGeneratorRunner() throws MojoFailureException, MojoExecutionException {
        this.sadiService = new GenerateSADIService();
        this.sadiService.execute();
    }

    //try {
        //sadiService.
    //} catch (MojoExecutionException e) {
    //    e.printStackTrace();
    //} catch (MojoFailureException e) {
    //    e.printStackTrace();
    //}

}
