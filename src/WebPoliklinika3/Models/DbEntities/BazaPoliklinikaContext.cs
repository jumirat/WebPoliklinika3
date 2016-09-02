using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace WebPoliklinika3.Models.DbEntities
{
    public partial class BazaPoliklinikaContext : DbContext
    {
        public BazaPoliklinikaContext(DbContextOptions<BazaPoliklinikaContext> options)
            : base(options)
        { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AspNetRoleClaims>(entity =>
            {
                entity.HasIndex(e => e.RoleId)
                    .HasName("IX_AspNetRoleClaims_RoleId");

                entity.Property(e => e.RoleId)
                    .IsRequired()
                    .HasMaxLength(450);

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.AspNetRoleClaims)
                    .HasForeignKey(d => d.RoleId);
            });

            modelBuilder.Entity<AspNetRoles>(entity =>
            {
                entity.HasIndex(e => e.NormalizedName)
                    .HasName("RoleNameIndex");

                entity.Property(e => e.Id).HasMaxLength(450);

                entity.Property(e => e.Name).HasMaxLength(256);

                entity.Property(e => e.NormalizedName).HasMaxLength(256);
            });

            modelBuilder.Entity<AspNetUserClaims>(entity =>
            {
                entity.HasIndex(e => e.UserId)
                    .HasName("IX_AspNetUserClaims_UserId");

                entity.Property(e => e.UserId)
                    .IsRequired()
                    .HasMaxLength(450);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AspNetUserClaims)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<AspNetUserLogins>(entity =>
            {
                entity.HasKey(e => new { e.LoginProvider, e.ProviderKey })
                    .HasName("PK_AspNetUserLogins");

                entity.HasIndex(e => e.UserId)
                    .HasName("IX_AspNetUserLogins_UserId");

                entity.Property(e => e.LoginProvider).HasMaxLength(450);

                entity.Property(e => e.ProviderKey).HasMaxLength(450);

                entity.Property(e => e.UserId)
                    .IsRequired()
                    .HasMaxLength(450);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AspNetUserLogins)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<AspNetUserRoles>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.RoleId })
                    .HasName("PK_AspNetUserRoles");

                entity.HasIndex(e => e.RoleId)
                    .HasName("IX_AspNetUserRoles_RoleId");

                entity.HasIndex(e => e.UserId)
                    .HasName("IX_AspNetUserRoles_UserId");

                entity.Property(e => e.UserId).HasMaxLength(450);

                entity.Property(e => e.RoleId).HasMaxLength(450);

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.AspNetUserRoles)
                    .HasForeignKey(d => d.RoleId);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AspNetUserRoles)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<AspNetUserTokens>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.LoginProvider, e.Name })
                    .HasName("PK_AspNetUserTokens");

                entity.Property(e => e.UserId).HasMaxLength(450);

                entity.Property(e => e.LoginProvider).HasMaxLength(450);

                entity.Property(e => e.Name).HasMaxLength(450);
            });

            modelBuilder.Entity<AspNetUsers>(entity =>
            {
                entity.HasIndex(e => e.NormalizedEmail)
                    .HasName("EmailIndex");

                entity.HasIndex(e => e.NormalizedUserName)
                    .HasName("UserNameIndex")
                    .IsUnique();

                entity.Property(e => e.Id).HasMaxLength(450);

                entity.Property(e => e.Email).HasMaxLength(256);

                entity.Property(e => e.NormalizedEmail).HasMaxLength(256);

                entity.Property(e => e.NormalizedUserName)
                    .IsRequired()
                    .HasMaxLength(256);

                entity.Property(e => e.UserName).HasMaxLength(256);
            });

            modelBuilder.Entity<Pacijent>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Adresa).HasMaxLength(50);

                entity.Property(e => e.DatumRodjenja)
                    .HasColumnName("Datum_rodjenja")
                    .HasColumnType("date");

                entity.Property(e => e.Email).HasMaxLength(50);

                entity.Property(e => e.Ime).HasMaxLength(50);

                entity.Property(e => e.KontaktBroj)
                    .HasColumnName("Kontakt_broj")
                    .HasMaxLength(50);

                entity.Property(e => e.Oib).HasColumnName("OIB");

                entity.Property(e => e.Prezime).HasMaxLength(50);
            });

            modelBuilder.Entity<Pregled>(entity =>
            {
                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .ValueGeneratedNever();

                entity.Property(e => e.DatumVrijeme).HasColumnType("datetime");

                entity.Property(e => e.Idkorisnik)
                    .HasColumnName("IDKorisnik")
                    .HasMaxLength(450);

                entity.Property(e => e.Idpacijent).HasColumnName("IDPacijent");

                entity.Property(e => e.RazlogDolaska).HasMaxLength(255);

                entity.HasOne(d => d.IdkorisnikNavigation)
                    .WithMany(p => p.Pregled)
                    .HasForeignKey(d => d.Idkorisnik)
                    .HasConstraintName("FK_Pregled_AspNetUsers");

                entity.HasOne(d => d.IdpacijentNavigation)
                    .WithMany(p => p.Pregled)
                    .HasForeignKey(d => d.Idpacijent)
                    .HasConstraintName("FK_Pregled_Pacijent");
            });

            modelBuilder.Entity<Pretraga>(entity =>
            {
                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .ValueGeneratedNever();

                entity.Property(e => e.Idkorisnik)
                    .HasColumnName("IDKorisnik")
                    .HasMaxLength(450);

                entity.Property(e => e.Idpacijent).HasColumnName("IDPacijent");

                entity.Property(e => e.Idpregled).HasColumnName("IDPregled");

                entity.Property(e => e.IdtipPretrage).HasColumnName("IDTipPretrage");

                entity.Property(e => e.Tekst).HasColumnType("ntext");

                entity.HasOne(d => d.IdkorisnikNavigation)
                    .WithMany(p => p.Pretraga)
                    .HasForeignKey(d => d.Idkorisnik)
                    .HasConstraintName("FK_Pretraga_AspNetUsers");

                entity.HasOne(d => d.IdpacijentNavigation)
                    .WithMany(p => p.Pretraga)
                    .HasForeignKey(d => d.Idpacijent)
                    .HasConstraintName("FK_Pretraga_Pacijent");

                entity.HasOne(d => d.IdpregledNavigation)
                    .WithMany(p => p.Pretraga)
                    .HasForeignKey(d => d.Idpregled)
                    .HasConstraintName("FK_Pretraga_Pregled");

                entity.HasOne(d => d.IdtipPretrageNavigation)
                    .WithMany(p => p.Pretraga)
                    .HasForeignKey(d => d.IdtipPretrage)
                    .HasConstraintName("FK_Pretraga_TipPretrage");
            });

            modelBuilder.Entity<TipPretrage>(entity =>
            {
                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .ValueGeneratedNever();

                entity.Property(e => e.Cijena).HasColumnType("smallmoney");

                entity.Property(e => e.Naziv).HasMaxLength(50);

                entity.Property(e => e.Opis).HasMaxLength(255);
            });
        }

        public virtual DbSet<AspNetRoleClaims> AspNetRoleClaims { get; set; }
        public virtual DbSet<AspNetRoles> AspNetRoles { get; set; }
        public virtual DbSet<AspNetUserClaims> AspNetUserClaims { get; set; }
        public virtual DbSet<AspNetUserLogins> AspNetUserLogins { get; set; }
        public virtual DbSet<AspNetUserRoles> AspNetUserRoles { get; set; }
        public virtual DbSet<AspNetUserTokens> AspNetUserTokens { get; set; }
        public virtual DbSet<AspNetUsers> AspNetUsers { get; set; }
        public virtual DbSet<Pacijent> Pacijent { get; set; }
        public virtual DbSet<Pregled> Pregled { get; set; }
        public virtual DbSet<Pretraga> Pretraga { get; set; }
        public virtual DbSet<TipPretrage> TipPretrage { get; set; }
    }
}