using System;
using System.Collections.Generic;

namespace WebPoliklinika3.Models.DbEntities
{
    public partial class TipPretrage
    {
        public TipPretrage()
        {
            Pretraga = new HashSet<Pretraga>();
        }

        public int Id { get; set; }
        public string Naziv { get; set; }
        public string Opis { get; set; }
        public decimal? Cijena { get; set; }

        public virtual ICollection<Pretraga> Pretraga { get; set; }
    }
}
