package pwabd.tariorasjson;

import java.util.ArrayList;

import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;

@WebListener
public class ListenerIncarcareTariInContext implements ServletContextListener {

    public ListenerIncarcareTariInContext() {
    }

    public void contextInitialized(ServletContextEvent sce) {
        Tara[] tari = new Tara[] {
                new Tara(11, "Europa", "Romania", 1000),
                new Tara(22, "Europa", "Bulgaria", 999),
                new Tara(33, "Africa", "Zimbabue", 500)
        };
        ArrayList<Tara> listaTari = new ArrayList<Tara>();

        for(Tara s:tari)
        listaTari.add(s);

        ServletContext context = sce.getServletContext();

        System.out.println("Se incarca lista de tari in context");

        context.setAttribute("listaTari", listaTari);

        System.out.println("S-a incarcat lista in context");
        for(Tara s : tari)
            System.out.println("\t" + s);

    }

}