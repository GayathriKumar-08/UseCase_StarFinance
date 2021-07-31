package com.starfinaceproject.starfinanceproject.Entity;

import java.util.Date;

public class ErrorClass {
    private String errcode;
    private String message;
    private String status;
    private Date dt;
    public String getErrcode() {
        return errcode;
    }
    public void setErrcode(String errcode) {
        this.errcode = errcode;
    }
    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }
  
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }
    public Date getDt() {
        return dt;
    }
    public void setDt(Date dt) {
        this.dt = dt;
    }
    
}