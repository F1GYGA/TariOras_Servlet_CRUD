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

@WebServlet(urlPatterns = ("/getlistatari"))
public class ServletGetListaTari extends HttpServlet {

    public ServletGetListaTari() {
    }
    
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException,IOException{
        System.out.println("S-a apelat servletul GetListaTari");
        ServletContext sc = this.getServletContext();
        ArrayList<Tara> tari = (ArrayList<Tara>) sc.getAttribute("listaTari");
        
        Gson gson = new Gson();
        
        String listaTarijson = gson.toJson(tari);

        PrintWriter out = response.getWriter();
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        out.print(listaTarijson);
        out.flush();
        
    }
}
