package com.mynotes.app.notes.models;

import jakarta.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "notes") // optional but good practice
public class Note {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID) // Better for UUIDs in newer Hibernate
    private UUID id;

    @Column(nullable = false)  // title should not be null
    private String title;

    @Lob  // allows larger text content
    private String content;

    @Column(unique = true, nullable = false) // ensure each link is unique
    private String shareableLink;

    // --- Constructors ---
    public Note() {}

    public Note(String title, String content, String shareableLink) {
        this.title = title;
        this.content = content;
        this.shareableLink = shareableLink;
    }

    // --- Getters & Setters ---
    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getShareableLink() {
        return shareableLink;
    }

    public void setShareableLink(String shareableLink) {
        this.shareableLink = shareableLink;
    }
}
