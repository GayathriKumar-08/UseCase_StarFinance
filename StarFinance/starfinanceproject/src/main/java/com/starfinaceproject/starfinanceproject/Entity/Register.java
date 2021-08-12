package com.starfinaceproject.starfinanceproject.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name="register")
public class Register {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
     private int id;

    @Column(name="uname")
    @NotNull(message = "username name is mandatory")
    @Size(min=3, max=10, message = "name must be min of 4 and max of 10")
    private String uname;
    
    @Column(name="email",unique = true)
    @NotNull(message = "email name is mandatory")
    private String email;

    @Column(name="pass")
    @NotNull(message = "password name is mandatory")
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
    
    public Register(@NotNull(message = "user name is mandatory") @Size(min = 4, max = 10, message = "name must be min of 3 and max of 10") String uname,
    @NotNull(message = "email is mandatory")String email, 
    @NotNull(message = "password is mandatory")String pass) {
        this.uname = uname;
        this.email = email;
        this.pass = pass;
    }
    @Override
    public String toString() {
        return "Register [email=" + email + ", id=" + id + ", pass=" + pass + ", uname=" + uname + "]";
    }
   
    
}
