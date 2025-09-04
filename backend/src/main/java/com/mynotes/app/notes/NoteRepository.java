package com.mynotes.app.notes;

import com.mynotes.app.notes.models.Note;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface NoteRepository extends JpaRepository<Note, UUID> {
    Note findByShareableLink(String shareableLink);
}
