using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebPoliklinika3.Models.DbEntities;

namespace WebPoliklinika3.Controllers.Api
{
    [Produces("application/json")]
    [Route("api/Pacijents")]
    public class PacijentsController : Controller
    {
        private readonly BazaPoliklinikaContext _context;

        public PacijentsController(BazaPoliklinikaContext context)
        {
            _context = context;
        }

        // GET: api/Pacijents
        [HttpGet]
        public IEnumerable<Pacijent> GetPacijent()
        {
            return _context.Pacijent;
        }

        // GET: api/Pacijents/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPacijent([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Pacijent pacijent = await _context.Pacijent.SingleOrDefaultAsync(m => m.Id == id);

            if (pacijent == null)
            {
                return NotFound();
            }

            return Ok(pacijent);
        }

        // PUT: api/Pacijents/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPacijent([FromRoute] int id, [FromBody] Pacijent pacijent)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pacijent.Id)
            {
                return BadRequest();
            }

            _context.Entry(pacijent).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PacijentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Pacijents
        [HttpPost]
        public async Task<IActionResult> PostPacijent([FromBody] Pacijent pacijent)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Pacijent.Add(pacijent);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (PacijentExists(pacijent.Id))
                {
                    return new StatusCodeResult(StatusCodes.Status409Conflict);
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetPacijent", new { id = pacijent.Id }, pacijent);
        }

        // DELETE: api/Pacijents/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePacijent([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Pacijent pacijent = await _context.Pacijent.SingleOrDefaultAsync(m => m.Id == id);
            if (pacijent == null)
            {
                return NotFound();
            }

            _context.Pacijent.Remove(pacijent);
            await _context.SaveChangesAsync();

            return Ok(pacijent);
        }

        private bool PacijentExists(int id)
        {
            return _context.Pacijent.Any(e => e.Id == id);
        }
    }
}