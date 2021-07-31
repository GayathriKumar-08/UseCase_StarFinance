package com.starfinaceproject.starfinanceproject.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="knnumbergen")
public class MessageClass {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name="name")
    private String name;

    
    @Column(name="message")
    private String message;
    
    @Column(name="kn")
    private Long kn;

    @Column(name="email")
    private String user_email;

    public MessageClass() {
    }

    public MessageClass(int id, String name, String message, Long kn, String user_email) {
        this.id = id;
        this.name = name;
        this.message = message;
        this.kn = kn;
        this.user_email = user_email;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Long getKn() {
        return kn;
    }

    public void setKn(Long kn) {
        this.kn = kn;
    }

    public String getUser_email() {
        return user_email;
    }

    public void setUser_email(String user_email) {
        this.user_email = user_email;
    }

    @Override
    public String toString() {
        return "MessageClass [id=" + id + ", kn=" + kn + ", message=" + message + ", name=" + name + ", user_email="
                + user_email + "]";
    }

}