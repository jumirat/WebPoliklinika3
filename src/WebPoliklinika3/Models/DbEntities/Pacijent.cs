using System;
using System.Collections.Generic;

namespace WebPoliklinika3.Models.DbEntities
{
    public partial class Pacijent
    {
        public Pacijent()
        {
            Pregled = new HashSet<Pregled>();
            Pretraga = new HashSet<Pretraga>();
        }

        public int Id { get; set; }
        public long? Oib { get; set; }
        public string Ime { get; set; }
        public string Prezime { get; set; }
        public string Adresa { get; set; }
        public DateTime? DatumRodjenja { get; set; }
        public string KontaktBroj { get; set; }
        public string Email { get; set; }

        public virtual ICollection<Pregled> Pregled { get; set; }
        public virtual ICollection<Pretraga> Pretraga { get; set; }
    }
}
