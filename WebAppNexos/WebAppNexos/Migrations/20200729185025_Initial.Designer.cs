﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WebAppNexos.Models;

namespace WebAppNexos.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20200729185025_Initial")]
    partial class Initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.14-servicing-32113")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("WebAppNexos.Models.Doctor", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("Active");

                    b.Property<int>("CredentialNumber");

                    b.Property<string>("Hospital")
                        .HasMaxLength(100);

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<string>("MedicalSpeciality")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<string>("Name")
                        .IsConcurrencyToken()
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<string>("Telephone")
                        .HasMaxLength(20);

                    b.HasKey("Id");

                    b.ToTable("Doctors");
                });

            modelBuilder.Entity("WebAppNexos.Models.DoctorPaciente", b =>
                {
                    b.Property<int>("DoctorId");

                    b.Property<int>("PacienteId");

                    b.HasKey("DoctorId", "PacienteId");

                    b.HasIndex("PacienteId");

                    b.ToTable("DoctorPacientes");
                });

            modelBuilder.Entity("WebAppNexos.Models.Paciente", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("Active");

                    b.Property<int>("Edad");

                    b.Property<int>("InstitucionId");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<string>("Name")
                        .IsConcurrencyToken()
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<int>("SocialSecurityId");

                    b.Property<string>("Telephone")
                        .HasMaxLength(20);

                    b.Property<string>("ZipCode")
                        .HasMaxLength(10);

                    b.HasKey("Id");

                    b.ToTable("Pacientes");
                });

            modelBuilder.Entity("WebAppNexos.Models.DoctorPaciente", b =>
                {
                    b.HasOne("WebAppNexos.Models.Doctor", "Doctor")
                        .WithMany()
                        .HasForeignKey("DoctorId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("WebAppNexos.Models.Paciente", "Paciente")
                        .WithMany()
                        .HasForeignKey("PacienteId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}