using System;
using System.Collections.Generic;

namespace WebPoliklinika3.Models.DbEntities
{
    public partial class Pretraga
    {
        public int Id { get; set; }
        public int? Idpacijent { get; set; }
        public int? Idpregled { get; set; }
        public string Idkorisnik { get; set; }
        public string Tekst { get; set; }
        public int? IdtipPretrage { get; set; }

        public virtual AspNetUsers IdkorisnikNavigation { get; set; }
        public virtual Pacijent IdpacijentNavigation { get; set; }
        public virtual Pregled IdpregledNavigation { get; set; }
        public virtual TipPretrage IdtipPretrageNavigation { get; set; }
    }
}
