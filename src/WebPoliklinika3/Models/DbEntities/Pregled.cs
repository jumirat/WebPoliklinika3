using System;
using System.Collections.Generic;

namespace WebPoliklinika3.Models.DbEntities
{
    public partial class Pregled
    {
        public Pregled()
        {
            Pretraga = new HashSet<Pretraga>();
        }

        public int Id { get; set; }
        public string Idkorisnik { get; set; }
        public int? Idpacijent { get; set; }
        public DateTime? DatumVrijeme { get; set; }
        public int? Trajanje { get; set; }
        public string RazlogDolaska { get; set; }
        public bool? Naplaceno { get; set; }

        public virtual ICollection<Pretraga> Pretraga { get; set; }
        public virtual AspNetUsers IdkorisnikNavigation { get; set; }
        public virtual Pacijent IdpacijentNavigation { get; set; }
    }
}
