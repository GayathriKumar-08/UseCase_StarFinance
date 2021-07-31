package com.starfinaceproject.starfinanceproject.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="register")
public class Register {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
     private int id;

    @Column(name="uname")
    private String uname;
    
    @Column(name="email",unique = true)
    private String email;

    @Column(name="pass")
    private String pass;

    public String getUname() {
        return uname;
    }
    public void setUname(String uname) {
        this.uname = uname;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPass() {
        return pass;
    }
    public void setPass(String pass) {
        this.pass = pass;
    }
    public Register(){}
    
    public Register(String uname, String email, String pass) {
        this.uname = uname;
        this.email = email;
        this.pass = pass;
    }
    @Override
    public String toString() {
        return "Register [email=" + email + ", id=" + id + ", pass=" + pass + ", uname=" + uname + "]";
    }
   
    
}
