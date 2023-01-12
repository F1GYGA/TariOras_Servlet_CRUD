package pwabd.tariorasjson;

public class Tara {
    private int id;
    private String continent;
    private String nume_tara;
    private int nr_populatie;

    public Tara() {

    }

    public Tara(int id, String continent, String nume_tara, int nr_populatie) {
        super();
        this.id = id;
        this.continent = continent;
        this.nume_tara = nume_tara;
        this.nr_populatie = nr_populatie;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setContinent(String continent) {
        this.continent = continent;
    }

    public void setNume_tara(String nume_tara) {
        this.nume_tara = nume_tara;
    }

    public void setNr_populatie(int nr_populatie) {
        this.nr_populatie = nr_populatie;
    }

    public int getId() {
        return id;
    }

    public String getContinent() {
        return continent;
    }

    public String getNume_tara() {
        return nume_tara;
    }

    public int getNr_populatie() {
        return nr_populatie;
    }

    @Override
    public String toString() {
        return "Tara [id=" + id + ", continent=" + continent + ", nume_tara=" + nume_tara + ", nr_populatie="
                + nr_populatie + "]";
    }

}
