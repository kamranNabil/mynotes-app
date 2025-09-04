package com.mynotes.app.notes;

import com.mynotes.app.notes.models.Note;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class NoteService {
    private final NoteRepository repo;

    public NoteService(NoteRepository repo) {
        this.repo = repo;
    }

    public List<Note> getAll() {
        return repo.findAll();
    }

    public Note create(Note note) {
        note.setShareableLink(UUID.randomUUID().toString());
        return repo.save(note);
    }

    public Optional<Note> getById(UUID id) {
        return repo.findById(id);
    }

    public Note update(UUID id, Note note) {
        note.setId(id);
        return repo.save(note);
    }

    public void delete(UUID id) {
        repo.deleteById(id);
    }

    public Note getByShareableLink(String link) {
        return repo.findByShareableLink(link);
    }
}
