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

@WebServlet(urlPatterns = ("/stergeretarabyID/*"))
public class ServletStergeTaraByID extends HttpServlet {

    public ServletStergeTaraByID() {
    }

    protected void doDelete(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        System.out.println("A fost invocat servletul pentru stergerea tarii");

        String pathInfo = request.getPathInfo();
        if (pathInfo.startsWith("/")) {
            pathInfo = pathInfo.substring(1);
        }

        int ID = Integer.parseInt(pathInfo);

        ServletContext sc = this.getServletContext();

        ArrayList<Tara> tari = (ArrayList<Tara>) sc.getAttribute("listaTari");

        Tara tara = null;
        int pozitie = 0;
        for (Tara t : tari) {
            if (t.getId() == ID) {
                tari.remove(pozitie);
                break;
            }
            pozitie++;
        }
        Gson gson = new Gson();
        String tarajson = gson.toJson(tara);

        PrintWriter out = response.getWriter();
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		out.print(tarajson);
		out.flush();
    }

}
