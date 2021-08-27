using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProEventos.API.Models;

namespace ProEventos.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventoController : ControllerBase
    {
        public IEnumerable<Evento> _evento = new Evento[]{
             new Evento(){
                    EventoId = 1,
                    Tema = "Angular",
                    Local = "BH",
                    Lote ="1 lote",
                    QtdPessoas = 250,
                    DataEvento = DateTime.Now.ToString(),
                    ImagemUrl = "foto.png"
                },
                new Evento(){
                    EventoId = 2,
                    Tema = "Angular 2",
                    Local = "SP",
                    Lote ="2 lote",
                    QtdPessoas = 50,
                    DataEvento = DateTime.Now.ToString(),
                    ImagemUrl = "foto2.png"
                }
        };
        public EventoController()
        {

        }

        [HttpGet]
        public IEnumerable<Evento> Get()
        {
            return _evento;
        }
        [HttpGet("{id}")]
        public IEnumerable<Evento> Get(int id)
        {
            return _evento.Where(evento => evento.EventoId == id);
        }
        [HttpPost]
        public string HttpPost()
        {
            return "example post";
        }
    }
}
