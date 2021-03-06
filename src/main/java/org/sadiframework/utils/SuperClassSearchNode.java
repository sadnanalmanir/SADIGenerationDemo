package org.sadiframework.utils;

import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

import org.sadiframework.utils.graph.SearchNode;


import com.hp.hpl.jena.ontology.OntClass;

public class SuperClassSearchNode extends SearchNode<OntClass>
{
	public SuperClassSearchNode(OntClass c)
	{
		super(c);
	}

	/* (non-Javadoc)
	 * @see org.sadiframework.utils.graph.SearchNode#getSuccessors()
	 */
	@Override
	public Set<SearchNode<OntClass>> getSuccessors()
	{
		Set<SearchNode<OntClass>> superClasses = new HashSet<SearchNode<OntClass>>();
		for (Iterator<OntClass> i = getNode().listSuperClasses(true); i.hasNext(); ) {
			OntClass superClass = i.next();
			superClasses.add(new SuperClassSearchNode(superClass));
		}
		return superClasses;
	}
}