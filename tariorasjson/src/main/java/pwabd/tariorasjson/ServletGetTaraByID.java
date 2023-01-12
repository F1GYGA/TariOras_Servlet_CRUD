package pwabd.tariorasjson;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

//mappare pe url
@WebServlet(urlPatterns = ("/gettarabyid/*"))
public class ServletGetTaraByID extends HttpServlet {

    public ServletGetTaraByID() {
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws IOException, ServletException {

        System.out.println("S-a invocat servletul pentru gettarabyID");
        
        //preluam id-ul din path transmis din bara URL 
        String pathInfo = request.getPathInfo();
        System.out.println(pathInfo);
        //stergem caracterul '/' care este continut de parametru, daca nu exista ID se intoarce un string empty
        if(pathInfo.startsWith("/")){
            pathInfo = pathInfo.substring(1);
        }
        int id = Integer.parseInt(pathInfo);
            
        //preluare lista de tari din context
        ServletContext sc = this.getServletContext();
        ArrayList<Tara> Tari = (ArrayList<Tara>) sc.getAttribute("listaTari");

        Tara tara = null;
        //ciclare prin lista preluata din context si gasirea tarii cu id-ul luat din path
        for (Tara t : Tari) {
            if(t.getId() == id){
            tara = t;
            System.out.println(tara.getNume_tara());
            break;
            }
        }

        //serializam obiectul 
        Gson gson = new Gson();

        String tarajson = gson.toJson(tara);
        System.out.println(tarajson);
        //transmitere json
        PrintWriter out = response.getWriter();
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        out.write(tarajson);
        out.flush();
    }

}
