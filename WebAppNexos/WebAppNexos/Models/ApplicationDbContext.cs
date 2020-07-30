using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAppNexos.Models
{
    public class ApplicationDbContext: DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
            

        }


        /// <summary>
        /// La configuración de las entidades a migrar por medio de Fluent Validation (API Fluent)
        /// </summary>
        /// <param name="modelBuilder"></param>
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Agregamos una llave compuesta para tabla DoctorPaciente
            modelBuilder.Entity<DoctorPaciente>().HasKey(x => new { x.DoctorId, x.PacienteId });


        }

        public DbSet<Doctor> Doctors { get; set; }
        public DbSet<Paciente> Pacientes { get; set; }
        public DbSet<DoctorPaciente> DoctorPacientes { get; set; }
    }
}
