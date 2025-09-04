package com.mynotes.app.notes;

import com.mynotes.app.notes.models.Note;
import com.mynotes.app.notes.NoteService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;
import java.util.UUID;

@RestController
@RequestMapping("/api/notes")
@CrossOrigin(origins = "*") // Allow frontend access
public class NotesController {
    private final NoteService service;

    public NotesController(NoteService service) {
        this.service = service;
    }

    // ✅ Get all notes
    @GetMapping
    public List<Note> all() {
        return service.getAll();
    }

    // ✅ Create a new note
    @PostMapping
    public ResponseEntity<Note> create(@RequestBody Note note) {
        return ResponseEntity.ok(service.create(note));
    }

    // ✅ Get note by ID
    @GetMapping("/{id}")
    public ResponseEntity<Note> get(@PathVariable UUID id) {
        return service.getById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // ✅ Update a note
    @PutMapping("/{id}")
    public ResponseEntity<Note> update(@PathVariable UUID id, @RequestBody Note note) {
        return ResponseEntity.ok(service.update(id, note));
    }

    // ✅ Delete a note
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable UUID id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    // ✅ Get note by shareable link
    @GetMapping("/share/{link}")
    public ResponseEntity<Note> getShared(@PathVariable String link) {
        Note note = service.getByShareableLink(link);
        if (note != null) {
            return ResponseEntity.ok(note);
        }
        return ResponseEntity.notFound().build();
    }

        // Test endpoint
    @GetMapping("/test")
    public String test() {
        return "API is working! Time: " + new java.util.Date();
    }
}
