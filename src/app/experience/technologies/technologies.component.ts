import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

  technology = ['Oracle', 'Sybase', 'Watcom', 'MongoDB', 'H2', 'Focus', 'PowerBase', 'Dbase-III', 'MS Access', 'SQLServer', 'Postgres', 'Paradox', 'MySql', 'Ingres', 'Pointbase', 'PF-File', 'SQL', 'SyncSort', 'Xdoclet', 'MiddleGen', 'XMLSpy', 'Jasper', 'Pentaho', 'Java', 'Groovy', 'Javascript', 'PL/SQL', 'Jython', 'AppleBasic', 'Bash Shell', 'OS/JCL', 'PowerBuilder', 'PHP', 'Jenkins', 'Korn Shell', 'Ant', 'Maven', 'JBDC', 'Chameleon', 'Erwin', 'Power Designer Data Modeler', 'ARGO UML', 'Rational Rose', 'Power Designer Process Modeler', 'Liqui-Base', 'SqlLoader', 'Slony', 'SoapUI', 'PostMan', 'Junit', 'CVS', 'Subversion', 'DOS', 'Novell', 'Windows', 'Unix', 'Linux', 'AS/400', 'TSO', 'DynaPlan', 'Excel', 'J2EE', 'Waterfall', 'Agile', 'Extreme programming', 'Paired programming', 'Jboss', 'Jrun', 'Tomcat', 'NodeJS', 'WebLogic', 'JSON', 'XML', 'CSV', 'SOAP', 'REST', 'RMI', 'CORBA', 'JDBC', 'Spring', 'SpringMVC', 'JMS', 'JSP', 'Struts', 'JAXP', 'Jasypt', 'Ibatis', 'Pentaho', 'Camel', 'POI', 'PFC', 'EJB', 'Swing', 'Servlets', 'Python', 'Django'];
  
  constructor() { }

  ngOnInit() {
  }

}
