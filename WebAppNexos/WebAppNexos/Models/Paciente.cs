﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAppNexos.Models
{
    public class Paciente
    {
        public int Id { get; set; }
        [Required()]
        public int SocialSecurityId { get; set; }

        [StringLength(10)]
        public string ZipCode { get; set; }

        [StringLength(20, ErrorMessage = "El numero de Telefono no puede exceder los 20 caracteres ")]
        public string Telephone { get; set; }

        public bool Active { get; set; }

        
        public int Edad { get; set; }

        public int InstitucionId { get; set; }

        private string _Name;
        [ConcurrencyCheck]
        [Required()]
        [StringLength(50, ErrorMessage = "El Nombre no puede exceder los 50 caracteres ")]
        public string Name 

        {
            get { return _Name; }
            set
            {
                _Name = value.ToUpper();
            }
        }

        
        private string _LastName;
        [Required()]
        [StringLength(50, ErrorMessage = "El Apellido no puede exceder los 50 caracteres ")]
        public string LastName
        {
            get { return _LastName; }
            set
            {
                _LastName = value.ToUpper();
            }
        }
    }
}
