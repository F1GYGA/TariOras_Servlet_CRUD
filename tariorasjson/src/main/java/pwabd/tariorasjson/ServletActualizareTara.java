package pwabd.tariorasjson;

import javax.servlet.http.HttpServlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

@WebServlet(urlPatterns = ("/actualizaretara"))
public class ServletActualizareTara extends HttpServlet {

    public ServletActualizareTara() {
    }

    protected void doPut(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        System.out.println("S-a invocat servlet pentru acutalizare tara");

        // preluam datele din formular care vin sub format json si le transformam in
        // format Tara.class
        System.out.println("Se trimite prin HttpPUT [");
        java.io.BufferedReader br = request.getReader();
        String body = new String();
        String line;
        while ((line = br.readLine()) != null) {
            body += line;
        }
        System.out.println(body);
        System.out.println("]");

        Gson gson = new Gson();

        Tara tara = gson.fromJson(body, Tara.class);

        ServletContext sc = this.getServletContext();

        ArrayList<Tara> tari = (ArrayList<Tara>) sc.getAttribute("listaTari");

        int pozitie = 0;
        for (Tara t : tari) {
            if (t.getId() == tara.getId()) {
                tari.remove(pozitie);
                break;
            }
            pozitie++;
        }

        tari.add(tara);

        sc.setAttribute("listaTari", tari);
        String tarajson = gson.toJson(tara);

        PrintWriter out = response.getWriter();
        response.setCharacterEncoding("UTF-8");
        response.setContentType("application/json");
        out.print(tarajson);
        out.flush();

    }
}
